import React from 'react'
import ApplicantSettingsForm from '../../_components/applicant-setting-form'
import { getCurrentUser } from '@/app/(auth)/_actions/auth.queries';
import { redirect } from 'next/navigation';
import { getApplicantProfileData } from '../../actions/applicant.queries';
import { Settings } from 'lucide-react';

const SettingPage = async () => {
  const user = await getCurrentUser();
  if (!user) {
    return redirect('/login');
  }
  const initialData = await getApplicantProfileData(user.id);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#121212]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* ── Page Header ── */}
        <div className="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 shrink-0">
            <Settings className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 leading-tight">
              Profile Settings
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Keep your profile up to date to attract the right opportunities.
            </p>
          </div>
        </div>

        {/* ── Form ── */}
        <ApplicantSettingsForm initialData={initialData} />
      </div>
    </div>
  );
};

export default SettingPage;
