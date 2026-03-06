import { createContext } from 'react';

export type SidebarContextType = {
  isLargeOpen: boolean;
  isSmallOpen: boolean;
  toggle: () => void;
  close: () => void;
};

export default createContext<SidebarContextType | null>(null);
