"use client";

import React from "react";
import MDEditor from "@uiw/react-md-editor";

import { useTheme } from "next-themes";
import { Card, CardContent } from "@/components/ui/card";

interface contentProps{
     content:string | undefined
}
const CoverLetterPreview = ({ content }:contentProps) => {
  const { resolvedTheme } = useTheme();
  console.log(content)

  return (
    <div className="py-4">
      {/* <MDEditor
        data-color-mode={
          resolvedTheme === "dark" ? "dark-theme" : "light-theme"
        }
        value={content}
        preview="preview"
        height={700}
      /> */}
      <Card>
       
            <CardContent className="max-w-2xl mx-auto p-6  rounded-xl shadow-md whitespace-pre-line leading-relaxed">
  {content}
</CardContent>
        
      </Card>
    </div>
  );
};

export default CoverLetterPreview;
