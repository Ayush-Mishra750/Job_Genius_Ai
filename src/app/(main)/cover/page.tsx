
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";


export default async function CoverLetterPage() {
//   const coverLetters = await getCoverLetters();

  return (
    <div className="container px-5">
      <div className="flex flex-col md:flex-row gap-2 items-start md:items-center justify-between mt-3">
        <h1 className="text-4xl font-bold text-primary mb-4">
          AI Cover Letter
        </h1>
        <Link href="/cover/new">
          <Button>
            <Plus />
            Create New
          </Button>
        </Link>
      </div>

      {/* <CoverLetterList coverLetters={coverLetters} /> */}
    </div>
  );
}
