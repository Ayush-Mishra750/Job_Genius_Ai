import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import CoverLetterGenerator from '../_componets/cover-letter-generater'

const NewCoverLetterPage = () => {
  return (
    <div className='container mx-auto px-5'>
        <div>
            <Link href="/cover">
            <Button variant="link" className='gap-2 pl-0'>
                <ArrowLeft className='h-4 w-4'/>
               Back to Cover Letters
            </Button>
            </Link>

            <div className='pb-8 mt-3'>
                <h1 className='text-4xl font-bold text-primary'>
                  Create Cover Letter
                </h1>
                <p className='text-muted-foreground'> 
               Generate a compelling, role-specific cover letter tailored to the user’s profile and job description.
                </p>
            </div>
        </div>
        <CoverLetterGenerator />
      
    </div>
  )
}

export default NewCoverLetterPage
