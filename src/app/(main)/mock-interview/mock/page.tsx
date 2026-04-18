import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import Interview from "../_components/Interview";


const MockInterviewPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col ">
        <Link href="/mock-interview">
          <Button variant="link" className="gap-2 pl-0 cursor-pointer">
            <ArrowLeft className="h-4 w-4 " />
            Back to Interview Preparation
          </Button>
        </Link>
        <div>
          <h1 className="text-6xl font-bold text-primary ml-3 mb-2">
            Mock Interview
          </h1>
        </div>
        <Interview />
      </div>
    </div>
  );
};

export default MockInterviewPage;
