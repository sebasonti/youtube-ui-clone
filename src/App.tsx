import { Content, PageHeader, Sidebar } from '@/layouts';
import { SidebarProvider } from '@/contexts/SidebarContext';

function App() {
  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="grid grid-cols-[auto_1fr] grow overflow-auto">
          <Sidebar />
          <Content />
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
