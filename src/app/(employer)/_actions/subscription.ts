"use server";

import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { prisma } from "@/lib/prisma";
import { PlanName, SUBSCRIPTION_PLANS } from "@/lib/subscriptions";
import Razorpay from "razorpay";
import crypto from "crypto";
import { revalidatePath } from "next/cache";

let razorpayInstance: Razorpay | null = null;

const getRazorpay = () => {
  if (razorpayInstance) return razorpayInstance;

  const key_id = process.env.PAYMENT_API_KEY;
  const key_secret = process.env.PAYMENT_SECRET_KEY;

  if (!key_id || !key_secret) {
    console.warn("Razorpay API keys are missing. Payment features will fail.");
    return null;
  }

  razorpayInstance = new Razorpay({
    key_id,
    key_secret,
  });

  return razorpayInstance;
};

/**
 * Get or Initialize Employer Subscription
 */
export async function getSubscription() {
  const user = await getCurrentUser();
  if (!user || user.role !== "employer") return null;

  let subscription = await prisma.subscription.findUnique({
    where: { employerId: user.id },
  });

  // If no subscription, initialize with Free tier
  if (!subscription) {
    subscription = await prisma.subscription.create({
      data: {
        employerId: user.id,
        planName: "Free",
        jobLimit: SUBSCRIPTION_PLANS.Free.jobLimit,
        aiCredits: SUBSCRIPTION_PLANS.Free.aiCredits,
        isActive: true,
      },
    });
  }

  // Check if expired
  if (subscription.endDate && new Date() > subscription.endDate) {
    // Revert to free if expired
    return await prisma.subscription.update({
      where: { employerId: user.id },
      data: {
        planName: "Free",
        jobLimit: SUBSCRIPTION_PLANS.Free.jobLimit,
        aiCredits: SUBSCRIPTION_PLANS.Free.aiCredits,
        endDate: null,
        isActive: true,
      },
    });
  }

  return subscription;
}

//create razorpay payment order

export async function createRazorpayOrder(planName: PlanName) {
  const user = await getCurrentUser();
  if (!user || user.role !== "employer") throw new Error("Unauthorized");

  const plan = SUBSCRIPTION_PLANS[planName];
  if (plan.price === 0) throw new Error("Cannot create order for free plan");

  const options = {
    amount: plan.price,
    currency: "INR",
    receipt: `receipt_plan_${planName}_${user.id}_${Date.now()}`,
    notes: {
      userId: user.id,
      planName: planName,
    },
  };

  try {
    const razorpay = getRazorpay();
    if (!razorpay) throw new Error("Payment system is not configured.");

    const order = await razorpay.orders.create(options);
    return {
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.PAYMENT_API_KEY,
    };
  } catch (error) {
    console.error("Razorpay Order Error:", error);
    throw new Error("Failed to create payment order");
  }
}

/**
 * Verify Razorpay Payment and Update Subscription
 */
export async function verifyPayment(
  razorpay_order_id: string,
  razorpay_payment_id: string,
  razorpay_signature: string,
  planName: PlanName
) {
  const user = await getCurrentUser();
  if (!user || user.role !== "employer") throw new Error("Unauthorized");

  // Verify signature
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.PAYMENT_SECRET_KEY!)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    throw new Error("Invalid payment signature");
  }

  const plan = SUBSCRIPTION_PLANS[planName];
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + plan.durationMonths);

  // Update subscription
  await prisma.subscription.upsert({
    where: { employerId: user.id },
    create: {
      employerId: user.id,
      planName: plan.name,
      jobLimit: plan.jobLimit,
      aiCredits: plan.aiCredits,
      aiCreditsUsed: 0,
      startDate: new Date(),
      endDate: endDate,
      isActive: true,
    },
    update: {
      planName: plan.name,
      jobLimit: plan.jobLimit,
      aiCredits: plan.aiCredits,
      aiCreditsUsed: 0,
      startDate: new Date(),
      endDate: endDate,
      isActive: true,
    },
  });

  revalidatePath("/employer-dashboard");
  return { success: true };
}
