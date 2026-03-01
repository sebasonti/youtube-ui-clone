import Button from '@/components/Button';
import { ArrowLeft, Mic, Search } from 'lucide-react';

type Props = {
  onClose: () => void;
  isVisibleOnMobile: boolean;
};

const SearchBar = ({ onClose, isVisibleOnMobile }: Props) => {
  return (
    <form
      className={`gap-4 grow justify-center ${isVisibleOnMobile ? 'flex' : 'hidden md:flex'}`}
    >
      {isVisibleOnMobile && (
        <Button onClick={onClose} type="button" variant="ghost" size="icon">
          <ArrowLeft />
        </Button>
      )}
      <div className="flex grow max-w-150">
        <input
          type="search"
          placeholder="Search"
          className="border border-secondary-border rounded-s-full shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
        />
        <Button
          type="button"
          className="border border-secondary-border border-s-0 py-2 px-4 rounded-s-none rounded-e-full shrink-0"
        >
          <Search />
        </Button>
      </div>
      <Button type="button" variant="default" size="icon">
        <Mic />
      </Button>
    </form>
  );
};

export default SearchBar;
