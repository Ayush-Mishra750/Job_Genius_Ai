This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



<!-- User fills form
        ↓
handleSubmit
        ↓
onSubmit(data)
        ↓
generateLetterFn(data)  → API call
        ↓
generatedLetter update hota hai
        ↓
useEffect trigger hota hai
        ↓
Toast + Redirect + Reset -->


<!-- quiz generate flow 
1. first we have to design the server action function where we have to generate the quiz by gemini using prompt 
2. after  generating quiz we have to save those uiz into database 
3.show into ui  -->

I have successfully implemented the AI Resume Matcher feature using Gemini AI. This feature allows employers to evaluate candidates' resumes against job descriptions with semantic understanding and premium visualization.

🏗️ Architecture & Workflow
Trigger: The employer clicks the "AI Evaluate" button next to a candidate's application.

Data Retrieval: A Next.js Server Action (evaluateResumeAction) fetches the Job Description (JD) and the candidate's Resume URL from the database.
PDF Processing: The system fetches the resume PDF from UploadThing, converts it to a base64 stream, and sends it directly to Gemini 1.5 Flash. This multimodal approach is superior to simple text extraction as it preserves layout and formatting context.
AI Analysis: Gemini performs Semantic Matching (e.g., recognizing that "React.js" in a resume matches "Next.js" requirements). It follows strict scoring rules to generate a structured JSON output.
UI Presentation: A premium, glassmorphic Dialog (AIEvaluationButton) displays the results, including a visual match score, an executive summary, and categorized skill badges (Matched vs. Missing).

🛠️ Implementation Details
I created the following components and logic:

Server Action: evaluate-resume.ts handles the backend logic and Gemini integration.
Client Component: ai-evaluation-button.tsx provides a polished user interface with loading states and result visualization.
Dashboard Integration: Updated the EmployerApplicantPage to include the AI action in both desktop and mobile views.
Evaluation Logic Highlights:
Match Score (0-100): Calculated based on skills, experience, and projects.
Experience Match: Categorized as Low, Medium, or High.
Recommendations:
80-100: Shortlist 
60-79: Consider 
<60: Reject 
  # Files Created/Modified
src/app/(employer)/_actions/evaluate-resume.ts
src/app/(employer)/_components/ai-evaluation-button.tsx
src/app/(employer)/employer-dashboard/applications/page.tsx
You can now navigate to your Employer Dashboard > Applications and click the AI Evaluate button for any candidate with a resume!