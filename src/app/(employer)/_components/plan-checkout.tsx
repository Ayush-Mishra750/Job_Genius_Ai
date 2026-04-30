"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { createRazorpayOrder, verifyPayment } from "../_actions/subscription";
import { PlanName } from "@/lib/subscriptions";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";
import Script from "next/script";

interface PlanCheckoutProps {
  planName: PlanName;
  price: number;
  currentPlan?: string;
}

const PlanCheckout = ({ planName, price, currentPlan }: PlanCheckoutProps) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (planName === "Free") return;
    if (currentPlan === planName) {
      toast.info(`You are already on the ${planName} plan`);
      return;
    }

    setLoading(true);
    try {
      const order = await createRazorpayOrder(planName);

      const options = {
        key: order.key,
        amount: order.amount,
        currency: order.currency,
        name: "CareerHive",
        description: `${planName} Subscription`,
        order_id: order.orderId,
        handler: async (response: any) => {
          try {
            const result = await verifyPayment(
              response.razorpay_order_id,
              response.razorpay_payment_id,
              response.razorpay_signature,
              planName
            );
            if (result.success) {
              toast.success("Subscription activated successfully!");
              window.location.reload();
            }
          } catch (error) {
            toast.error("Payment verification failed");
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#0F172A",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error: any) {
      toast.error(error.message || "Failed to initiate payment");
    } finally {
      setLoading(false);
    }
  };

  if (planName === "Free") return null;

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <Button
        onClick={handlePayment}
        disabled={loading || currentPlan === planName}
        className={`w-full h-12 rounded-2xl font-bold transition-all active:scale-95 ${currentPlan === planName
            ? "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/10"
            : "shadow-lg shadow-primary/20"
          }`}
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : currentPlan === planName ? (
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" /> Current Plan
          </div>
        ) : (
          `Upgrade to ${planName}`
        )}
      </Button>
    </>
  );
};

export default PlanCheckout;
