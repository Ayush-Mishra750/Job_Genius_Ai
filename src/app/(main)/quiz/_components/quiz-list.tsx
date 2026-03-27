"use client"
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import React from 'react'

const QuizList = ({assessments}:any) => {
  const router=useRouter();
  return (
   <>
   <Card>
    <CardHeader>
          <div className='flex md:items-center justify-between flex-cols md-flex-row gap-4 flex-start'>
               <div >
                <CardTitle className='font-bold text-2xl'>
                    Recent Quizzes
                </CardTitle>
                <CardDescription>
                     Review your past quiz performance
                </CardDescription>
               </div>
                <Button
              onClick={() => router.push("/quiz/mock")}
              className=" w-48 h-10 cursor-pointer">
              Start New Quiz
            </Button>
          </div>
    </CardHeader>
   </Card>
   </>
  )
}

export default QuizList
