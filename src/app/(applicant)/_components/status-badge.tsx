import { Badge } from "@/components/ui/badge";

interface statusProps{
    status:string |null;
}
export function StatusBadge({ status }: statusProps) {
  if (status === "hired") {
    return <Badge className="bg-green-600">Hired</Badge>;
  }

  if (status === "rejected") {
    return <Badge className="bg-red-600">Rejected</Badge>;
  }
 if (status === "shortlisted") {
    return <Badge className="bg-blue-500">Shortlisted</Badge>;
  }
   if (status === "interview") {
    return <Badge className="bg-purple-600">Interview</Badge>;
  }
  return <Badge className="bg-yellow-500">Pending</Badge>;
}
