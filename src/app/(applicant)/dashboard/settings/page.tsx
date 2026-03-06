import React from 'react'
import ApplicantSettingsForm from '../../_components/applicant-setting-form'
import { getCurrentUser } from '@/app/(auth)/_actions/auth.queries';
import { redirect } from 'next/navigation';
import { getApplicantProfileData } from '../../actions/applicant.queries';


const SettingPage =async () => {
  const user =await getCurrentUser();
  if(!user){
    return redirect('/login');
  }
  const initialData=await getApplicantProfileData(user.id);
  return (
    <div>
      <h1 className='flex justify-center items-center text-2xl font-bold'>Update Your Profile</h1>
     <ApplicantSettingsForm initialData={initialData}/>
    </div>
  )
}

export default SettingPage
