import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import CoverLetterGenerator from '../_componets/cover-letter-generater'

const NewCoverLetterPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#212121] sticky top-0 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* Back link */}
        <Link href="/cover">
          <Button
            variant="ghost"
            className="gap-2 pl-2 text-slate-500 dark:text-[#8e8ea0] hover:text-slate-800 dark:hover:text-[#ececec] hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>

        {/* Page Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-violet-50 dark:bg-white/5 border border-violet-200 dark:border-white/10 shrink-0">
            <FileText className="h-5 w-5 text-violet-600 dark:text-violet-400" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-[#ececec] leading-tight">
              Create Cover Letter
            </h1>
            <p className="text-sm text-slate-500 dark:text-[#8e8ea0]">
              Generate a compelling, role-specific cover letter in seconds.
            </p>
          </div>
        </div>

        {/* Generator Form */}
        <CoverLetterGenerator />
      </div>
    </div>
  )
}

export default NewCoverLetterPage
