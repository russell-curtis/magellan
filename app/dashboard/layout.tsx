import { Sidebar } from "@/components/ui/Sidebar"
import { Header } from "@/components/ui/Header"
import Chatbot from "./_components/chatbot";

export default function DashboardLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-muted/50">
          {children}
        </main>
      </div>
      <Chatbot />
    </div>
  )
}
