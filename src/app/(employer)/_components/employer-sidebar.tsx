"use client";
import { logoutUserAction } from "@/app/(auth)/_actions/registeruser";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Bookmark,
  Briefcase,
  Building,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Menu,
  Plus,
  Settings,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ThemeToggle } from "./theme-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const base = "/employer-dashboard";

const navigationItems = [
  { name: "Overview", icon: LayoutDashboard, href: base + "/" },
  { name: "Employer Profile", icon: User, href: base + "/profile" },
  { name: "Post New Job", icon: Plus, href: base + "/jobs" },
  { name: "Posted Jobs", icon: Briefcase, href: base + "/jobsList" },
  { name: " Applications", icon: Bookmark, href: base + "/applications" },
  { name: "Plans & Billing", icon: CreditCard, href: base + "/plans" },
  { name: "Settings", icon: Settings, href: base + "/settings" },
];

interface EmployerSidebarProps {
  className?: string;
  onClose?: () => void;
  user?: any;
}

// Standalone SidebarContent to avoid closure issues and improve reliability
const SidebarContent = ({ className, onClose, user, pathname }: {
  className?: string;
  onClose?: () => void;
  user?: any;
  pathname: string;
}) => {
  function isLinkActive(href: string) {
    if (href === "/employer-dashboard/" || href === "/employer-dashboard") {
      return pathname === "/employer-dashboard/" || pathname === "/employer-dashboard";
    }
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <div className={cn("flex flex-col h-full bg-card/50 backdrop-blur-xl", className)}>
      {/* Logo Section */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" onClick={onClose}>
            <div className="p-2 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-foreground group-hover:text-blue-600 transition-colors">
              CareerHive
            </span>
          </Link>
          <button
            className="md:hidden p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto custom-scrollbar">
        <h3 className="px-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">
          Main Menu
        </h3>
        {navigationItems.map((curNav) => {
          const Icon = curNav.icon;
          const active = isLinkActive(curNav.href || "#");

          return (
            <Link
              key={curNav.name}
              href={curNav.href || "#"}
              onClick={onClose}
              className={cn(
                "relative flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 group",
                active
                  ? "text-blue-600 bg-blue-500/10 dark:bg-blue-500/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {active && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute left-0 w-1 h-6 bg-blue-600 rounded-r-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className={cn(
                "h-5 w-5 transition-transform duration-300 group-hover:scale-110",
                active ? "text-blue-600" : "text-muted-foreground group-hover:text-foreground"
              )} />
              {curNav.name}
              {curNav.name === " Applications" && (
                <Badge variant="secondary" className="ml-auto bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  New
                </Badge>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-border/50">
        <div className="flex items-center justify-between px-2 mb-4">
          <div className="flex flex-col w-full">
            <span className="text-xs font-medium text-muted-foreground">Appearance</span>
            <ThemeToggle />

          </div>
        </div>
        <div className="bg-muted/30 rounded-2xl p-4 border border-border/50">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="h-10 w-10 border-2 border-background shadow-md">
              <AvatarImage src={user?.avatarUrl} />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                {user?.name?.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold text-foreground truncate">{user?.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
            </div>
          </div>

          <Button
            onClick={logoutUserAction}
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all duration-300 gap-3"
          >
            <LogOut className="h-4 w-4" />
            <span className="font-semibold">Sign Out</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

const EmployerSidebar = ({ className, onClose, user }: EmployerSidebarProps) => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClose = () => {
    setMobileOpen(false);
    onClose?.();
  };

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
          onClick={handleClose}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={cn(
          "md:hidden fixed left-0 top-0 bottom-0 z-50 w-72 bg-card border-r border-border shadow-2xl transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent user={user} onClose={handleClose} pathname={pathname} />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-72 bg-card border-r border-border fixed bottom-0 top-0 flex-col shadow-sm z-30">
        <SidebarContent user={user} className={className} pathname={pathname} />
      </div>
    </>
  );
};

export default EmployerSidebar;
