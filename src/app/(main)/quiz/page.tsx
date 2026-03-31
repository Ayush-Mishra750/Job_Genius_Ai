import React from 'react'
import { getAssessments } from './_actions/quiz'
import StatsCards from './_components/stats-cards'
import PerformanceCharts from './_components/performance-chart'
import QuizList from './_components/quiz-list'
import AllQuiz from './_components/all-quiz'


const InterviewPrepPage =async () => {
  const assessments=await getAssessments()
  console.log(assessments)
  return (
    <div>
      <div className='flex items-center justify-between mb-5'>
        <h1 className='font-bold text-5xl text-primary mt-2'>AI Mock Quiz</h1>
      </div>
      <div className='space-y-6'>
          <StatsCards assessments={assessments} />
        <PerformanceCharts assessments={assessments} />
        <AllQuiz assessments={assessments} />
      </div>
    </div>
  )
}

export default InterviewPrepPage
