import React from "react";
import { getSubscription } from "../_actions/subscription";
import { SUBSCRIPTION_PLANS } from "@/lib/subscriptions";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, Briefcase, Calendar, Sparkles, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SubscriptionStatusCard = async () => {
  const subscription = await getSubscription();
  if (!subscription) return null;

  const aiRemaining = subscription.aiCredits === -1 
    ? "Unlimited" 
    : subscription.aiCredits - subscription.aiCreditsUsed;
  
  const aiProgress = subscription.aiCredits === -1 
    ? 0 
    : (subscription.aiCreditsUsed / subscription.aiCredits) * 100;

  const isLowCredits = typeof aiRemaining === "number" && aiRemaining <= 2;

  return (
    <div className="rounded-[2rem] border border-border/50 bg-white dark:bg-card/40 dark:backdrop-blur-xl p-8 shadow-xl shadow-black/[0.02] space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Current Plan</p>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-black tracking-tight">{subscription.planName}</h3>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-none rounded-lg font-bold">
              Active
            </Badge>
          </div>
        </div>
        <Link href="/employer-dashboard/plans">
          <Button variant="outline" size="sm" className="rounded-xl font-bold border-primary/20 hover:bg-primary/5 hover:text-primary">
            Upgrade Plan
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* AI Credits Usage */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold">
              <BrainCircuit className="w-4 h-4 text-primary" />
              <span>AI Matcher Credits</span>
            </div>
            <span className={`text-sm font-black ${isLowCredits ? "text-rose-500" : "text-foreground"}`}>
              {aiRemaining} left
            </span>
          </div>
          <Progress value={aiProgress} className="h-2 bg-primary/5" />
          {isLowCredits && (
            <div className="flex items-center gap-2 text-[10px] font-black text-rose-500 uppercase tracking-wider animate-pulse">
              <AlertCircle className="w-3 h-3" />
              Running low on credits!
            </div>
          )}
        </div>

        {/* Plan Meta */}
        <div className="flex items-center gap-6">
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Expires On</span>
            </div>
            <p className="text-sm font-black text-foreground">
              {subscription.endDate ? new Date(subscription.endDate).toLocaleDateString() : "Never"}
            </p>
          </div>
          <div className="h-10 w-px bg-border/50 hidden md:block" />
          <div className="space-y-1 flex-1 text-right md:text-left">
            <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground md:justify-start justify-end">
              <Briefcase className="w-4 h-4" />
              <span>Job Limit</span>
            </div>
            <p className="text-sm font-black text-foreground">
              {subscription.jobLimit === -1 ? "Unlimited" : subscription.jobLimit}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionStatusCard;
