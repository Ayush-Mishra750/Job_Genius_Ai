export type PlanName = "Free" | "Basic" | "Pro" | "Unlimited";

export interface PlanDetails {
  name: PlanName;
  price: number; // In Paise for Razorpay (INR)
  jobLimit: number; // -1 for unlimited
  aiCredits: number; // -1 for unlimited
  durationMonths: number;
}

export const SUBSCRIPTION_PLANS: Record<PlanName, PlanDetails> = {
  Free: {
    name: "Free",
    price: 0,
    jobLimit: 3,
    aiCredits: 10,
    durationMonths: 0,
  },
  Basic: {
    name: "Basic",
    price: 499900, // ₹4,999
    jobLimit: 20,
    aiCredits: 100,
    durationMonths: 6,
  },
  Pro: {
    name: "Pro",
    price: 999900, // ₹9,999
    jobLimit: 50,
    aiCredits: 300,
    durationMonths: 12,
  },
  Unlimited: {
    name: "Unlimited",
    price: 1999900, // ₹19,999
    jobLimit: -1,
    aiCredits: -1,
    durationMonths: 24,
  },
};
