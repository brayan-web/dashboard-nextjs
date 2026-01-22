import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-slate-100 h-screen w-screen   text-slate-300 overflow-hidden">
      <div className="flex h-full">
        <Sidebar />

        <div
          className="w-full text-slate-900   *<Accordion>
            Accordion.Item, Card, etc
        </Accordion> h-full overflow-y-auto "
        >
          {children}
        </div>
      </div>
    </div>
  );
}
