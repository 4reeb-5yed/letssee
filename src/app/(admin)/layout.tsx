import { AdminNav } from "@/components/admin/AdminNav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[--color-paper]">
      <AdminNav />
      <main className="flex-1 p-[--space-6]">
        {children}
      </main>
    </div>
  );
}
