import Link from "next/link";
import { Briefcase, LogOut } from "lucide-react"; // Import LogOut icon
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/app/(auth)/_actions/auth.queries";
import { logoutUserAction } from "@/app/(auth)/_actions/registeruser";
import { ThemeToggle } from "./toggle";
// import { getCurrentUser } from "@/features/auth/server/auth.queries";
// import { logoutUserAction } from "@/features/auth/server/auth.actions";

export default async function Navbar() {
  const user = await getCurrentUser();

  return (
    <header className="border-b bg-white dark:bg-[#212121] sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-blue-600"
        >
          <Briefcase className="w-6 h-6" />
          Job_Genius_ai
        </Link>

        <nav className="hidden md:flex items-center gap-8  font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/find-jobs" className="hover:text-blue-600 transition-colors">
            Find Job
          </Link>
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Employers
          </Link>
        </nav>
        <div className="flex items-center gap-3">
           <ThemeToggle />
          {!user ? (
            <>
              <Button variant="outline"  className="font-bold" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Post a Job</Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild >
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
                <Button
                //   variant="ghost"
                  type="submit"
                  size="icon"
                  title="Log out"
                >
                  <LogOut className="w-5 h-5 cursor-pointer hover:text-red-600 transition-colors" />
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </header>
  );
}