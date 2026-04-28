"use client";

import { useState } from "react";
import { Menu, X, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmployerSidebar from "./employer-sidebar";
import { ThemeToggle } from "./theme-provider";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function MobileNav({ user }: { user: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden flex items-center justify-between px-6 py-4 border-b bg-card/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-1.5 bg-blue-600 rounded-lg shadow-lg shadow-blue-500/20">
            <Briefcase className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-black tracking-tighter text-foreground">
            CareerHive
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl bg-muted/50"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />
            
            {/* Sidebar Content */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-80 bg-background z-[70] md:hidden shadow-2xl overflow-hidden"
            >
              <EmployerSidebar 
                user={user} 
                onClose={() => setIsOpen(false)} 
                className="w-full border-r-0 shadow-none h-full" 
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

