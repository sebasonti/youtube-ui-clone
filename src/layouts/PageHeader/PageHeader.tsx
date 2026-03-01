import LeftHeader from './components/LeftHeader';
import { useState } from 'react';
import RightHeader from './components/RightHeader';
import SearchBar from './components/SearchBar';

const PageHeader = () => {
  // controls whether search bar is expanded on small devices
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      {!isSearchExpanded && <LeftHeader />}
      <SearchBar
        onClose={() => setIsSearchExpanded(false)}
        isVisibleOnMobile={isSearchExpanded}
      />
      {!isSearchExpanded && (
        <RightHeader onOpenSearchBar={() => setIsSearchExpanded(true)} />
      )}
    </div>
  );
};;

export default PageHeader;
