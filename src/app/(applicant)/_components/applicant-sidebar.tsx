"use client";
import { logoutUserAction } from "@/app/(auth)/_actions/registeruser";
import { ThemeToggle } from "@/app/(employer)/_components/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Bookmark,
  Briefcase,
  Building,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Plus,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


// const base = "/dashboard";

const navigationItems = [
  { name: "Home", icon: LayoutDashboard, href:  "/dashboard" },
  { name: "Find Jobs", icon: User, href:  "/find-jobs" },

  { name: "Applied Jobs", icon: Briefcase, href:  "/dashboard/applied-jobs" },
  { name: "Saved Jobs", icon: Bookmark ,href:"/dashboard/saved-jobs" },
  { name: "Plans & Billing", icon: CreditCard  ,href:"/dashboard/plans-billing"},

  { name: "Settings", icon: Settings, href:  "/dashboard/settings" },
];

const ApplicantSidebar = () => {
  const pathname = usePathname();

  function isLinkActive({
    href,
    pathname,
    base = "/",
  }: {
    href: string;
    pathname: string;
    base?: string;
  }) {
    const normalizedHref = href.replace(/\/$/, "") || "/";

    // URLPattern is a built-in browser API that lets you define URL matching patterns using a template-like syntax.

    const pattern = new URLPattern({ pathname: normalizedHref });

    return pattern.test({ pathname });
  }

  return (
    <div className="w-64 bg-card border-r border-border fixed bottom-0 top-0">
      <div className="p-6">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Applicants Dashboard
        </h2>
      </div>

      <nav className="px-3 space-y-1">
        {navigationItems.map((curNav) => {
          const Icon = curNav.icon;
          return (
            <Link
              key={curNav.name}
              href={curNav.href || "#"}
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                isLinkActive({
                  href: curNav.href || "#",
                  pathname,
                  base: "/dashboard",
                }) && "text-primary bg-blue-300 dark:text-black",
              )}
            >
              <Icon />
              {curNav.name}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-6 left-3 right-3 ">
       

        <Button
          onClick={logoutUserAction}
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium mt-4 rounded-lg  w-full"
        >
          <LogOut className="h-4 w-4 " />
          Log-out
        </Button>
      </div>
    </div>
  );
};

export default ApplicantSidebar;
