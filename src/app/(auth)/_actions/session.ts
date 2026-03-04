import { cookies, headers } from "next/headers";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { SESSION_LIFETIME, SESSION_REFRESH_TIME } from "@/app/_functions/constant";
import { getIPAddress } from "@/app/_functions/location";

type CreateSessionData = {
  userAgent: string;
  ip: string;
  userId: number;
  token: string;
  tx?: DbClient;
};

const generateSessionToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

// generates a 256-bit cryptographically secure token
// <Buffer 4f 8a 9b 12 ... > (raw binary, not readable)
// Converts that binary data into a hexadecimal string.("4f8a9b12d1e9a8c3f5...")
// This ensures the string is in a consistent Unicode normalization form (usually NFC).
const createUserSession = async ({
  token,
  userId,
  userAgent,
  ip,
  tx = prisma,
}: {
  token: string;
  userId: number;
  userAgent: string;
  ip: string;
  tx?: typeof prisma;
}) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const session = await tx.session.create({
    data: {
      id: hashedToken,
      userId,
      userAgent,
      ip,
      expiresAt: new Date(Date.now() + SESSION_LIFETIME * 1000),
    },
  });

  return session;
};

// Give me the type of the first parameter of the callback inside db.transaction — that's the tx object
type DbClient = typeof prisma | Parameters<Parameters<typeof prisma.$transaction>[0]>[0];

export const createSessionAndSetCookies = async (
  userId: number,
  tx: typeof prisma = prisma
) => {
  const token = generateSessionToken();
  const ip = await getIPAddress();
  const headersList = await headers();

  await createUserSession({
    token,
    userId,
    userAgent: headersList.get("user-agent") || "",
    ip,
    tx,
  });

  const cookieStore = await cookies();

  cookieStore.set("session", token, {
    secure: true,
    httpOnly: true,
    maxAge: SESSION_LIFETIME,
  });
};

export const validateSessionAndGetUser = async (session: string) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(session)
    .digest("hex");

  const sessionData = await prisma.session.findUnique({
    where: { id: hashedToken },
    include: {
      user: true,
    },
  });

  if (!sessionData) return null;

  // Expired?
  if (Date.now() >= sessionData.expiresAt.getTime()) {
    await invalidateSession(sessionData.id);
    return null;
  }

  // Refresh session if near expiry
  if (
    Date.now() >=
    sessionData.expiresAt.getTime() - SESSION_REFRESH_TIME * 1000
  ) {
    await prisma.session.update({
      where: { id: sessionData.id },
      data: {
        expiresAt: new Date(Date.now() + SESSION_LIFETIME * 1000),
      },
    });
  }

  return {
    id: sessionData.user.id,
    name: sessionData.user.name,
    userName: sessionData.user.userName,
    role: sessionData.user.role,
    email: sessionData.user.email,
    phoneNumber: sessionData.user.phoneNumber,
    avatarUrl: sessionData.user.avatarUrl,
    createdAt: sessionData.user.createdAt,
    updatedAt: sessionData.user.updatedAt,
  };
};

export const invalidateSession = async (id: string) => {
  await prisma.session.delete({
    where: { id },
  });
};

