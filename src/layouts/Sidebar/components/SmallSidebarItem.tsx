import { buttonStyles } from '@/components/Button/Button.styles';
import type { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  Icon: ElementType;
  title: string;
  url: string;
};

const SmallSidebarItem = ({ Icon, title, url }: Props) => {
  return (
    <a
      className={twMerge(
        buttonStyles({ variant: 'ghost' }),
        'py-4 px-1 flex flex-col items-center rounded-lg gap-2'
      )}
      href={url}
    >
      <Icon className="h-6 w-6" />
      <p className="text-sm">{title}</p>
    </a>
  );
};

export default SmallSidebarItem;
