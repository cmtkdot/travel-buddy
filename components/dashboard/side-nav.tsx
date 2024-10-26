"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const sidebarNavItems = [
  {
    title: "Trips",
    href: "/trips",
  },
  {
    title: "Settings",
    href: "/settings",
  },
];

export function SideNav() {
  return (
    <nav className="grid items-start gap-2">
      {sidebarNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
