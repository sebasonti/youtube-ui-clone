import Button from '@/components/Button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Children, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
};

const LargeSidebarSection = ({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const childrenArray = Children.toArray(children);
  const visibleChildren = isExpanded
    ? children
    : childrenArray.slice(0, visibleItemCount);
  const showExpandButton = childrenArray.length > visibleItemCount;
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div>
      {title && <p className="ml-4 mt-2 text-lg mb-1">{title}</p>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((prev) => !prev)}
          variant="ghost"
          className="w-full flex rounded-lg gap-4 p-3"
        >
          <ButtonIcon />
          {`Show ${isExpanded ? 'Less' : 'More'}`}
        </Button>
      )}
      <hr className="text-secondary" />
    </div>
  );
};

export default LargeSidebarSection;
