import { Content, PageHeader } from '@/layouts';

function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto_1fr] grow overflow-auto">
        <div>Sidebar</div>
        <Content />
      </div>
    </div>
  );
}

export default App;
