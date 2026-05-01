import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Trophy } from 'lucide-react';
import { Brain } from 'lucide-react';
import React from 'react'



interface Assessment {
  id: number;
  quizScore: number;
  questions: any[];
  category: string;
  topic: string;
  difficulty: string;
  createdAt: Date;
}

interface StatsCardsProps {
  assessments: Assessment[];
}

const StatsCards = ({ assessments }: StatsCardsProps) => {

  const getAverageScore = () => {
    if (!assessments?.length) return 0;
    const total = assessments.reduce(
      (sum: number, assessment: Assessment) => sum + assessment.quizScore,
      0
    );
    return (total / assessments.length).toFixed(1);
  };
  const getLatestAssessment = () => {
    if (!assessments?.length) return null;
    const size = assessments?.length;
    return assessments[size - 1];
  };
  const getTotalQuestions = () => {
    if (!assessments?.length) return 0;
    return assessments.reduce(
      (sum: number, assessment: Assessment) => sum + assessment.questions.length,
      0
    );
  };

  return (
    <div className='grid md:grid-cols-3 gap-3 m-3 sm:m-10 '>
      <Card className='ml-2'>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Score</CardTitle>
          <Trophy className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{getAverageScore()}%</div>
          <p className="text-xs text-muted-foreground">
            Across all assessments
          </p>
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
          <div className="text-2xl font-bold">{getTotalQuestions()}</div>
          <p className="text-xs text-muted-foreground">Total questions</p>
        </CardContent>
      </Card>
      <Card className='mr-2'>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Latest Score</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {getLatestAssessment()?.quizScore.toFixed(1) || 0}%
          </div>
          <p className="text-xs text-muted-foreground">Most recent quiz</p>
        </CardContent>
      </Card>

    </div>
  )
}

export default StatsCards
