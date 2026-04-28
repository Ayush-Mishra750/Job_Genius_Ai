"use client";

import { usePathname } from "next/navigation";
import React from "react";

export function NavbarWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Hide global navbar on dashboard routes to avoid collision
  const isDashboard = pathname?.startsWith("/employer-dashboard") || pathname?.startsWith("/dashboard");

  if (isDashboard) {
    return null;
  }

  return <>{children}</>;
}
