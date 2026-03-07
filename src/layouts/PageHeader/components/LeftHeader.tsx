import { Menu } from 'lucide-react';
import Button from '@/components/Button';
import logo from '@/assets/Logo.png';
import { useSidebarContext } from '@/contexts/SidebarContext';

const LeftHeader = () => {
  const { toggle } = useSidebarContext();

  return (
    <div className="flex gap-4 items-center shrink-0">
      <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Button>
      <a href="/">
        <img src={logo} alt="DT Logo" className="h-6" />
      </a>
    </div>
  );
};

export default LeftHeader;
