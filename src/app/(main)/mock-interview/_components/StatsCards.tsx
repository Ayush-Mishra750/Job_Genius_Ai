import { Brain, Target, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StatsCards({ interviews }) {

//   const getAverageScore = () => {
//     if (!interviews?.length) return 0;
//     const total = interviews.reduce(
//       (sum, interview) => sum + interview.interviewScore,
//       0
//     );
//     return (total / interviews.length).toFixed(1);
//   };

//   const getLatestInterview = () => {
//     if (!interviews?.length) return null;
//     let size = interviews?.length;
//     return interviews[size - 1];
//   };

//   const getTotalQuestions = () => {
//     if (!interviews?.length) return 0;
//     return interviews.reduce(
//       (sum, interview) => sum + interview.questions.length,
//       0
//     );
//   };

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Score</CardTitle>
          <Trophy className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {/* <div className="text-2xl font-bold">{getAverageScore()}%</div> */}
          <p className="text-xs text-muted-foreground">Across all interviews</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Questions Practiced
          </CardTitle>
          <Brain className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {/* <div className="text-2xl font-bold">{getTotalQuestions()}</div> */}
          <p className="text-xs text-muted-foreground">Total questions</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Latest Score</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {/* {getLatestInterview()?.interviewScore.toFixed(1) || 0}% */}
          </div>
          <p className="text-xs text-muted-foreground">Most recent interview</p>
        </CardContent>
      </Card>
    </div>
  );
}
