// import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
// import { appliedJob } from "../../actions/getjob";

import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { appliedJob } from "../../actions/getjob";

// import { StatusBadge } from "../../_components/status-badge";
export const dynamic = "force-dynamic";

const AppliedJob=async ()=> {
  const user = await getCurrentUser();
  if (!user) return null;

  const appliedJobs = await appliedJob();
   
  const {data}=appliedJobs;
 if(appliedJobs.status=="ERROR"){
  toast.error(appliedJobs.message) }


  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">
        Applied Jobs ({data?.length}) 
      </h1>
          {data?.length === 0 ? (
        <EmptyState/>
      ) : (
        <div className="grid gap-4">
                 {data?.map((item) => (
        <Card key={item.id} className="shadow-sm">
          <CardContent className="p-5 flex justify-between items-start">
            
            {/* LEFT */}
            <div className="space-y-1">
              <h2 className="text-lg font-medium">{item.job.title}</h2>
              <p className="text-sm text-gray-500">
                Applied on {new Date(item.job.createdAt).toLocaleDateString()}
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              {/* <StatusBadge status={item.job.status} /> */}

              <a
                href={item.resume.fileUrl}
                target="_blank"
                className="text-sm text-blue-600 hover:underline"
              >
                View Resume
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
        </div>
      )}
    </div>
  );
}
export default AppliedJob
 function EmptyState() {
  return (
    <div className="border rounded-lg p-10 text-center text-gray-500">
      <p className="text-lg font-medium">No Applied jobs yet</p>
      <p className="text-sm mt-1">
        Applied jobs to view them here later.
      </p>
    </div>
  );
}



