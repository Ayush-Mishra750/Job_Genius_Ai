import React from "react";
import { getSubscription } from "../../_actions/subscription";
import { SUBSCRIPTION_PLANS, PlanName } from "@/lib/subscriptions";
import {
  Check,
  Sparkles,
  Zap,
  ShieldCheck,
  Rocket,
  Clock,
  Briefcase,
  BrainCircuit,
  CreditCard
} from "lucide-react";
import PlanCheckout from "../../_components/plan-checkout";
import { Badge } from "@/components/ui/badge";

const PricingPage = async () => {
  const subscription = await getSubscription();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">

      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl  font-semiboldtext-foreground">
          Scale Your <span className="text-primary italic">Hiring</span> with AI
        </h1>
        <p className="text-muted-foreground text-lg font-medium">
          Choose a plan that fits your growth. Every paid plan includes advanced AI evaluation and priority job listing.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {(Object.keys(SUBSCRIPTION_PLANS) as PlanName[]).map((planName) => {
          const plan = SUBSCRIPTION_PLANS[planName];
          const isCurrent = subscription?.planName === planName;
          const isPro = planName === "Pro";

          return (
            <div
              key={planName}
              className={`relative rounded-[2.5rem] p-8 border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 flex flex-col ${isPro
                ? "border-primary bg-primary/[0.02] shadow-xl shadow-primary/5 ring-1 ring-primary/20 scale-105 z-10"
                : "border-border/50 bg-white dark:bg-card/40 dark:backdrop-blur-xl"
                }`}
            >
              {isPro && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full font-black text-xs uppercase border-none shadow-lg ">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="space-y-6 flex-1">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${isPro ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                      {getPlanIcon(planName)}
                    </div>
                    <h3 className="text-2xl font-black tracking-tight">{planName}</h3>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black tracking-tight">₹{Math.floor(plan.price / 100).toLocaleString()}</span>
                    {plan.durationMonths > 0 && (
                      <span className="text-muted-foreground font-bold text-sm">/{plan.durationMonths}mo</span>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">What's Included</div>
                  <ul className="space-y-3">
                    <FeatureItem
                      icon={<Briefcase className="w-4 h-4" />}
                      label={plan.jobLimit === -1 ? "Unlimited Job Posts" : `${plan.jobLimit} Job Posts`}
                    />
                    <FeatureItem
                      icon={<BrainCircuit className="w-4 h-4" />}
                      label={plan.aiCredits === -1 ? "Unlimited AI Matcher" : `${plan.aiCredits} AI Credits`}
                    />
                    {plan.durationMonths > 0 ? (
                      <FeatureItem
                        icon={<Clock className="w-4 h-4" />}
                        label={`${plan.durationMonths} Months Duration`}
                      />
                    ) : (
                      <FeatureItem
                        icon={<Zap className="w-4 h-4" />}
                        label="Free Forever"
                      />
                    )}
                    <FeatureItem
                      icon={<ShieldCheck className="w-4 h-4" />}
                      label="Dashboard Analytics"
                    />
                    {isPro && (
                      <FeatureItem
                        icon={<Sparkles className="w-4 h-4" />}
                        label="Featured Job Badge"
                        highlight
                      />
                    )}
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-border/50">
                {planName === "Free" ? (
                  <div className="p-4 text-center rounded-2xl bg-muted/30 border border-border/50 font-bold text-muted-foreground text-sm">
                    {isCurrent ? "Current Plan" : "Always Free"}
                  </div>
                ) : (
                  <PlanCheckout
                    planName={planName}
                    price={plan.price}
                    currentPlan={subscription?.planName}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust Badge / Info */}
      <div className="rounded-[3rem] p-10 border border-border/50 flex flex-col md:flex-row items-center justify-between gap-8 mt-20">
        <div className="flex items-center gap-6">

          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-2xl font-black">Enterprise Needs?</h4>
            <p className="text-muted-foreground font-medium">Looking for custom limits or team collaboration features? Contact our sales team.</p>
          </div>
        </div>
        <button className="h-14 px-10 rounded-2xl bg-white dark:bg-card border-2 border-border/50 font-black tracking-tight transition-all hover:border-primary hover:text-primary active:scale-95 shadow-lg shadow-black/[0.03]">
          Contact Sales
        </button>
      </div>

    </div>
  );
};

function FeatureItem({ icon, label, highlight = false }: { icon: React.ReactNode, label: string, highlight?: boolean }) {
  return (
    <li className="flex items-center gap-3">
      <div className={`p-1 rounded-md ${highlight ? "bg-amber-500/10 text-amber-500" : "bg-primary/10 text-primary"}`}>
        {icon}
      </div>
      <span className={`text-sm font-bold ${highlight ? "text-foreground" : "text-foreground/80"}`}>{label}</span>
    </li>
  );
}

function getPlanIcon(plan: PlanName) {
  switch (plan) {
    case "Free": return <Zap className="w-5 h-5" />;
    case "Basic": return <ShieldCheck className="w-5 h-5" />;
    case "Pro": return <Rocket className="w-5 h-5" />;
    case "Unlimited": return <Zap className="w-5 h-5" />;
  }
}

export default PricingPage;