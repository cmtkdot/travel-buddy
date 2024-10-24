"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export function DashboardNav() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Travel Buddy
            </span>
          </Link>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
