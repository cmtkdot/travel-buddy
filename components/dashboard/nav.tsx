"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export function DashboardNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Travel Buddy</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
}
