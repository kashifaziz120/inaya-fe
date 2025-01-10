import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "../app-header";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SiteHeader>
          <SidebarTrigger />
        </SiteHeader>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
