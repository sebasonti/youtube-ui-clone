import { useContext } from 'react';
import SidebarContext from './SidebarContext';

const useSidebarContext = () => {
  const value = useContext(SidebarContext);
  if (value === null) {
    throw new Error(
      'useSidebarContext cannot be used outside of SidebarProvider'
    );
  }
  return value;
};

export default useSidebarContext;
