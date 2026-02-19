import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
  

type LayoutProps = {
    children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
         <Header />    
        <div className="flex flex-1"> <Sidebar />
        <div className="flex-1 w-full">{children}</div></div>
        </div>
    );
}