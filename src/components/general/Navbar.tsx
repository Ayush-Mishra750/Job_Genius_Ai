import Link from "next/link";
import {
  Brain,
  Briefcase,
  FileText,
  LogOut,
  Mic,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { logoutUserAction } from "@/app/(auth)/_actions/registeruser";
import { ThemeToggle } from "./toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { prisma } from "@/lib/prisma";

// async function getFeaturedJobs(){
//   return await prisma.job.findMany({
//      take:9,
//      orderBy:{
//       createdAt:"desc",
//      },
//       include: {
//       employer: {
//         select: {
//           name: true,
//           user: {
//             select: {
//               avatarUrl: true,
//             },
//           },
//         },
//       },
//     },
//   })
// }
export default async function Navbar() {

  const user = await getCurrentUser();

  return (
    <header className="border-b bg-white/80 dark:bg-[#212121]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">

        {/*  Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-blue-600"
        >
          <Briefcase className="w-6 h-6" />
          CareerHive
        </Link>

        {/*  Nav Links */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-gray-600 dark:text-gray-300">

          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="/find-jobs" className="hover:text-blue-600 transition">
            Find Job
          </Link>

          {/*  AI Tools Dropdown */}
          {user?.role === "applicant" && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-semibold cursor-pointer">
                  🤖 AI Tools
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-64 p-2 cursor-pointer">

                <DropdownMenuItem asChild>
                  <Link href="/mock-interview" className="flex gap-2 cursor-pointer">
                    <Mic className="h-4 w-4" />
                    <div>
                      <p className="font-medium">Mock Interview</p>
                      <p className="text-xs text-muted-foreground">
                        Practice with AI feedback
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/quiz" className="flex gap-2 cursor-pointer">
                    <Brain className="h-4 w-4" />
                    <div>
                      <p className="font-medium">AI Quiz</p>
                      <p className="text-xs text-muted-foreground">
                        Test your concepts
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/cover" className="flex gap-2 cursor-pointer">
                    <FileText className="h-4 w-4" />
                    <div>
                      <p className="font-medium">Cover Letter</p>
                      <p className="text-xs text-muted-foreground">
                        Generate ATS-ready letters
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </nav>

        {/* 🔷 Right Section */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {!user ? (
            <>
              <Button variant="outline" className="font-semibold" asChild>
                <Link href="/login">Sign In</Link>
              </Button>

              <Button asChild>
                <Link href="/register">Post a Job</Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild>
                <Link
                  href={
                    user.role === "employer"
                      ? "/employer-dashboard"
                      : "/dashboard"
                  }
                >
                  Dashboard
                </Link>

              </Button>

              <form action={logoutUserAction}>
                <Button size="icon" type="submit">
                  <LogOut className="w-5 h-5 hover:text-red-500 transition" />
                </Button>
              </form>
              <Button variant="outline" className="ml-2 rounded-2xl">
                {user.name?.charAt(0).toUpperCase()}
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}