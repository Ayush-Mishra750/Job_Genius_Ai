// import JobForm from "@/features/employers/components/employer-job-form";

import JobForm from "../../_components/employer-job-form";


const Jobs = () => {
  return (
   <div className="max-w-8xl mx-auto py-4 justify-center items-center flex flex-col">
    <div className="mb-3 flex ">
       <h1 className="font-bold text-2xl "> Post a new Job</h1>

    </div>
      <JobForm />
    </div>
  );
};

export default Jobs;


   