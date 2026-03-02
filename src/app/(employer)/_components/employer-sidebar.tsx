"use client";
import { logoutUserAction } from "@/app/(auth)/_actions/registeruser";
// import { ThemeToggle } from "@/components/themeProvider";
import { Button } from "@/components/ui/button";
// import { logoutUserAction } from "@/features/auth/server/auth.action";
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
// import { URLPattern } from 'next/server';
import React from "react";
import { ThemeToggle } from "./theme-provider";

const base = "/employer-dashboard";

const navigationItems = [
  { name: "Overview", icon: LayoutDashboard, href: base + "/" },
  { name: "Employer Profile", icon: User, href: base + "/profile" },
  { name: "Post a Job", icon: Plus, href: base + "/jobs" },
  { name: "Uploaded Jobs", icon: Briefcase, href: base + "/jobsList" },
  { name: "Saved Candidate", icon: Bookmark },
  { name: "Plans & Billing", icon: CreditCard },
  { name: "All Companies", icon: Building },
  { name: "Settings", icon: Settings, href: base + "/settings" },
];

const EmployerSidebar = () => {
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
          Employer Dashboard
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
                }) && "text-primary bg-blue-300",
              )}
            >
              <Icon />
              {curNav.name}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-0 w-full p-4 border-t border-border">
        {/* dark and light mode */}
       

       <ThemeToggle  />
        

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

export default EmployerSidebar;
