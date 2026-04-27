"use client";
import { logoutUserAction } from "@/app/(auth)/_actions/registeruser";
import { ThemeToggle } from "@/app/(employer)/_components/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Bookmark,
  Briefcase,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationItems = [
  { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Find Jobs", icon: User, href: "/find-jobs" },
  { name: "Applied Jobs", icon: Briefcase, href: "/dashboard/applied-jobs" },
  { name: "Saved Jobs", icon: Bookmark, href: "/dashboard/saved-jobs" },
  { name: "Plans & Billing", icon: CreditCard, href: "/dashboard/plans-billing" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

const ApplicantSidebar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  function isLinkActive({
    href,
    pathname,
  }: {
    href: string;
    pathname: string;
    base?: string;
  }) {
    const normalizedHref = href.replace(/\/$/, "") || "/";
    const pattern = new URLPattern({ pathname: normalizedHref });
    return pattern.test({ pathname });
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo / Title */}
      <div className="px-5 py-5 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">
              Dashboard
            </p>
            <h2 className="text-base font-bold text-foreground leading-tight">
              Career <span className="text-blue-600">Hive</span>
            </h2>
          </div>
          {/* Mobile close */}
          <button
            className="md:hidden p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {/* <p className="text-[10px] font-semibold text-muted-foreground   px-3 mb-2">
          Menu
        </p> */}
        {navigationItems.map((curNav) => {
          const Icon = curNav.icon;
          const active = isLinkActive({
            href: curNav.href || "#",
            pathname,
            base: "/dashboard",
          });
          return (
            <Link
              key={curNav.name}
              href={curNav.href || "#"}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200",
                active
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 dark:shadow-blue-900/40"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <Icon className={cn("h-4 w-4 shrink-0", active ? "text-white" : "")} />
              {curNav.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="px-3 py-4 border-t border-border space-y-2">
        {/* <div className="flex items-center justify-between px-3 py-2">
          <span className="text-xs text-muted-foreground font-medium">Theme</span>
          <ThemeToggle />
        </div> */}
        <Button
          onClick={logoutUserAction}
          variant="ghost"
          className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl w-full justify-start text-muted-foreground hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all duration-200"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          Log out
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2.5 rounded-xl bg-card border border-border shadow-md text-foreground hover:bg-muted transition-colors"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={cn(
          "md:hidden fixed left-0 top-0 bottom-0 z-50 w-64 bg-card border-r border-border shadow-2xl transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 bg-card border-r border-border fixed bottom-0 top-0 flex-col shadow-sm z-30">
        <SidebarContent />
      </div>
    </>
  );
};

export default ApplicantSidebar;
