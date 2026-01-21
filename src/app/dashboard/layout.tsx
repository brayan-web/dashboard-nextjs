
import { Sidebar } from "@/components/Sidebar";



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        
        <div className="bg-slate-100  w-full h-screen antialiased text-slate-300  ">
    <div className="flex">
        
        
            <Sidebar/>
      
        <div className="w-full text-slate-900  ">
        {children}

        </div>
      
    </div>
</div>
        
    );
}

