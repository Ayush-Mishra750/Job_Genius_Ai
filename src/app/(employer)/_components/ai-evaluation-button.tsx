"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Loader2, CheckCircle2, XCircle, AlertCircle, BrainCircuit } from "lucide-react";
import { evaluateResumeAction, ResumeEvaluationResult } from "../_actions/evaluate-resume";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

interface AIEvaluationButtonProps {
  applicationId: number;
  candidateName: string;
}

const AIEvaluationButton = ({ applicationId, candidateName }: AIEvaluationButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResumeEvaluationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleEvaluate = async () => {
    setLoading(true);
    setError(null);
    setIsOpen(true);
    try {
      const evaluation = await evaluateResumeAction(applicationId);
      setResult(evaluation);
    } catch (err: any) {
      if (err.message === "CREDIT_EXHAUSTED") {
        setError("CREDIT_EXHAUSTED");
      } else {
        toast.error("Failed to evaluate resume");
        setIsOpen(false);
      }
    } finally {
      setLoading(false);
    }
  };


  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-500 bg-emerald-500/10";
    if (score >= 60) return "text-amber-500 bg-amber-500/10";
    return "text-rose-500 bg-rose-500/10";
  };

  const getRecommendationBadge = (res: string) => {
    switch (res) {
      case "Shortlist":
        return <Badge className="bg-emerald-500 hover:bg-emerald-600 font-bold px-3 py-1 rounded-full"><CheckCircle2 className="w-3 h-3 mr-1" /> Shortlist</Badge>;
      case "Consider":
        return <Badge className="bg-amber-500 hover:bg-amber-600 font-bold px-3 py-1 rounded-full"><AlertCircle className="w-3 h-3 mr-1" /> Consider</Badge>;
      case "Reject":
        return <Badge className="bg-rose-500 hover:bg-rose-600 font-bold px-3 py-1 rounded-full"><XCircle className="w-3 h-3 mr-1" /> Reject</Badge>;
      default:
        return <Badge variant="secondary">{res}</Badge>;
    }
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={handleEvaluate}
        className="rounded-xl h-10 px-4 font-bold border-primary/20 hover:bg-primary/5 hover:text-primary transition-all group"
      >
        <Sparkles className="w-4 h-4 mr-2 text-primary group-hover:animate-pulse" />
        AI Evaluate
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-2xl p-0 overflow-hidden border-none bg-white dark:bg-zinc-950 shadow-2xl rounded-[2rem]">
          <div className="relative">
            {/* Header with Gradient Background */}
            <div className="p-8 border-b border-border/50">
              <div className="flex items-center gap-4 mb-4">

                <div>
                  <DialogTitle className="text-2xl font-black">AI Candidate Evaluation</DialogTitle>
                  <DialogDescription className="font-medium text-muted-foreground">
                    Analyzing <span className="text-primary font-bold">{candidateName}</span> against the job requirements.
                  </DialogDescription>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 space-y-6">
                  <div className="relative">
                    <Loader2 className="w-16 h-16 text-primary animate-spin" />
                    <Sparkles className="absolute -top-1 -right-1 w-6 h-6 " />
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-xl tracking-tight">Gemini is analyzing...</p>
                    <p className="text-sm text-muted-foreground font-medium max-w-xs">
                      We're performing semantic matching and experience validation. This usually takes a few seconds.
                    </p>
                  </div>
                </div>
              ) : error === "CREDIT_EXHAUSTED" ? (
                <div className="flex flex-col items-center justify-center py-16 space-y-6 text-center animate-in zoom-in duration-300">
                  <div className="p-4 rounded-full bg-rose-500/10 text-rose-500">
                    <AlertCircle className="w-12 h-12" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-black tracking-tight text-foreground">AI Credits Exhausted</h4>
                    <p className="text-muted-foreground font-medium max-w-sm">
                      You have used all your AI evaluation credits for this period. Upgrade to a Pro or Unlimited plan to continue evaluating candidates.
                    </p>
                  </div>
                  <Link href="/employer-dashboard/plans" className="w-full max-w-xs">
                    <Button className="w-full rounded-2xl h-12 font-black shadow-lg shadow-primary/20">
                      View Pricing Plans
                    </Button>
                  </Link>
                </div>
              ) : result ? (

                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

                  {/* Score & Recommendation Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-[2rem] bg-muted/30 border border-border/50 flex flex-col items-center justify-center text-center space-y-3">
                      <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Match Score</p>
                      <div className={`text-4xl font-black ${getScoreColor(result.matchScore).split(' ')[0]}`}>
                        {result.matchScore}%
                      </div>
                      <Progress value={result.matchScore} className="h-2 w-full max-w-[150px]" />
                    </div>
                    <div className="p-6 rounded-[2rem] bg-muted/30 border border-border/50 flex flex-col items-center justify-center text-center space-y-4">
                      <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">AI Recommendation</p>
                      {getRecommendationBadge(result.recommendation)}
                      <p className="text-sm font-bold text-foreground/80">
                        Experience: <span className="text-primary">{result.experienceMatch} Match</span>
                      </p>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Executive Summary
                    </h4>
                    <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10 text-base font-medium  text-foreground/90">
                      "{result.summary}"
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-sm font-black uppercase tracking-widest text-emerald-500 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Matched Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {result.matchedSkills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-none font-bold py-1 px-3 rounded-lg">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-sm font-black uppercase tracking-widest text-rose-500 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Missing Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {result.missingSkills.length > 0 ? (
                          result.missingSkills.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="bg-rose-500/10 text-rose-600 dark:text-rose-400 border-none font-bold py-1 px-3 rounded-lg">
                              {skill}
                            </Badge>
                          ))
                        ) : (
                          <p className="text-xs font-bold text-muted-foreground italic">None identified</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AIEvaluationButton;
