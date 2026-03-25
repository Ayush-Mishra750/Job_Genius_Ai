import React from 'react'
import { getCoverLetter } from '../_actions/getcover-letter';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import CoverLetterPreview from '../_componets/cover-letter-preview';

const EditCoverLetterPage = async ({params}:{params:{id:number}}) => {
    const {id}=await params;
    const userId=Number(id)
    console.log(userId)
    const coverLetter=await getCoverLetter(userId);
    // const {}=coverLetter
  return (
   <div className="container px-5">
      <div className="flex flex-col space-y-2">
        <Link href="/cover">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>

        <h1 className="text-lg font-bold mb-6">
          {coverLetter?.jobTitle} at {coverLetter?.companyName}
        </h1>
      </div>

      <CoverLetterPreview content={coverLetter?.content} />
    </div>
  )
}

export default EditCoverLetterPage
