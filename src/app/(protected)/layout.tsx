import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/custom/app-sidebar";
import AppNavbar from "@/components/custom/app-navbar";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <main className="flex h-full w-full flex-col">
        <AppNavbar />
        <section className="h-screen border p-5 md:rounded-tl-2xl">
          {children}
        </section>
      </main>
    </SidebarProvider>
  );
}
