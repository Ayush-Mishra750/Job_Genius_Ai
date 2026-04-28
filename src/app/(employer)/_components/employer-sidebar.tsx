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
  { name: "Post New Job", icon: Plus, href: base + "/jobs" },
  { name: "Posted Jobs", icon: Briefcase, href: base + "/jobsList" },
  { name: " Applications", icon: Bookmark, href: base + "/applications" },
  { name: "Plans & Billing", icon: CreditCard },
  { name: "Settings", icon: Settings, href: base + "/settings" },
];

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface EmployerSidebarProps {
  className?: string;
  onClose?: () => void;
  user?: any;
}

const EmployerSidebar = ({ className, onClose, user }: EmployerSidebarProps) => {
  const pathname = usePathname();

  function isLinkActive({
    href,
    pathname,
  }: {
    href: string;
    pathname: string;
  }) {
    const normalizedHref = href.replace(/\/$/, "") || "/";
    try {
      const pattern = new URLPattern({ pathname: normalizedHref });
      return pattern.test({ pathname });
    } catch {
      return pathname === normalizedHref;
    }
  }

  return (
    <div className={cn("w-72 bg-card/50 backdrop-blur-xl border-r border-border  flex flex-col shadow-2xl", className)}>
      {/* Logo Section */}
      <div className="p-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-foreground group-hover:text-blue-600 transition-colors">
            CareerHive
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-8 overflow-y-auto custom-scrollbar">
        <div>
          <h3 className="px-4 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
            Main Menu
          </h3>
          <div className="space-y-1.5">
            {navigationItems.map((curNav) => {
              const Icon = curNav.icon;
              const active = isLinkActive({
                href: curNav.href || "#",
                pathname,
              });

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
          </div>
        </div>
      </nav>

      {/* User Profile Section */}
      <div className="p-4 mt-auto">
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



export default EmployerSidebar;
