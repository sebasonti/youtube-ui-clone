import Button from '@/components/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
  categories: string[];
  onSelect: (category: string) => void;
  selected: string;
};

const CategoryPills = ({ categories, onSelect, selected }: Props) => {
  const [translate, setTranslate] = useState(0);
  const [isStartVisible, setIsStartVisible] = useState(true);
  const [isEndVisible, setIsEndVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;

      setIsStartVisible(translate === 0);
      setIsEndVisible(
        translate + container.clientWidth === container.scrollWidth
      );
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [translate]);

  const scrollToLeft = useCallback(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    setTranslate((prevTranslate) => {
      if (!containerRef.current) return 0;
      const newTranslate = prevTranslate - width * 0.5;
      if (newTranslate < 0) {
        return 0;
      }
      return newTranslate;
    });
  }, []);

  const scrollToRight = useCallback(() => {
    setTranslate((prevTranslate) => {
      if (!containerRef.current) return 0;
      const edge = containerRef.current.scrollWidth;
      const width = containerRef.current.clientWidth;
      const newTranslate = prevTranslate + width * 0.5;
      if (newTranslate + width >= edge) {
        return edge - width;
      }
      return newTranslate;
    });
  }, []);

  return (
    <div className="overflow-x-hidden relative" ref={containerRef}>
      <div
        className="flex whitespace-nowrap gap-3 transition-transform w-max"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((category) => (
          <Button
            className="py-1 px-3 rounded-lg whitespace-nowrap"
            key={category}
            onClick={() => onSelect(category)}
            variant={selected === category ? 'dark' : 'default'}
          >
            {category}
          </Button>
        ))}
      </div>
      {!isStartVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-linear-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            className="h-full aspect-square w-auto p-1.5"
            onClick={scrollToLeft}
            size="icon"
            variant="ghost"
          >
            <ChevronLeft />
          </Button>
        </div>
      )}
      {!isEndVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-linear-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
          <Button
            className="h-full aspect-square w-auto p-1.5"
            onClick={scrollToRight}
            size="icon"
            variant="ghost"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategoryPills;
