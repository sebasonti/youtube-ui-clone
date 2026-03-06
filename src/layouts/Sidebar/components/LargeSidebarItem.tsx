import { buttonStyles } from '@/components/Button/Button.styles';
import type { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  isActive?: boolean;
  Icon: ElementType | string;
  title: string;
  url: string;
};

const LargeSidebarItem = ({ Icon, isActive = false, title, url }: Props) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: 'ghost' }),
        `w-full flex items-center rounded-lg gap-4 p-4 ${isActive ? 'font-bold bg-neutral-100 hover:bg-secondary' : undefined}`
      )}
    >
      {typeof Icon === 'string' ? (
        <img src={Icon} className="h-6 w-6 rounded-full" />
      ) : (
        <Icon className="h-6 w-6" />
      )}
      <p className="whitespace-nowrap overflow-hidden text-ellipsis">{title}</p>
    </a>
  );
};

export default LargeSidebarItem;
