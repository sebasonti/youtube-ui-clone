import Button from '@/components/Button';
import { Bell, Mic, Search, Upload, User } from 'lucide-react';

type Props = {
  onOpenSearchBar: () => void;
};

const RightHeader = ({ onOpenSearchBar }: Props) => {
  return (
    <div className="flex shrink-0 md:gap-2">
      <Button
        onClick={onOpenSearchBar}
        variant="ghost"
        size="icon"
        className="md:hidden flex"
      >
        <Search />
      </Button>
      <Button variant="ghost" size="icon" className="md:hidden flex">
        <Mic />
      </Button>
      <Button variant="ghost" size="icon">
        <Upload />
      </Button>
      <Button variant="ghost" size="icon">
        <Bell />
      </Button>
      <Button variant="ghost" size="icon">
        <User />
      </Button>
    </div>
  );
};

export default RightHeader;
