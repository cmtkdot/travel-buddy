import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { DashboardNav } from "@/components/dashboard/nav";
import { SideNav } from "@/components/dashboard/side-nav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  if (!userId) {
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <DashboardNav />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <SideNav />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
