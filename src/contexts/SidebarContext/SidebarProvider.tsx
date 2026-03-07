import { useEffect, useState, type ReactNode } from 'react';
import SidebarContext, { type SidebarContextType } from './SidebarContext';

const LARGE_SCREEN_BREAKPOINT = 1024;

type Props = {
  children: ReactNode;
};

const isScreenSmall = () => window.innerWidth < LARGE_SCREEN_BREAKPOINT;

const SidebarProvider = ({ children }: Props) => {
  const [isLargeOpen, setIsLargeOpen] = useState(true);
  const [isSmallOpen, setIsSmallOpen] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      if (!isScreenSmall()) setIsSmallOpen(false);
    };

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  const toggle = () => {
    if (isScreenSmall()) {
      setIsSmallOpen((prev) => !prev);
    } else {
      setIsLargeOpen((prev) => !prev);
    }
  };

  const close = () => {
    if (isScreenSmall()) {
      setIsSmallOpen(false);
    } else {
      setIsLargeOpen(false);
    }
  };

  const value: SidebarContextType = {
    isLargeOpen,
    isSmallOpen,
    toggle,
    close,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export default SidebarProvider;
