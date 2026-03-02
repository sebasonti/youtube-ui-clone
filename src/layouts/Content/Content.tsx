import { categories } from '@/data/home';
import CategoryPills from './components/CategoryPills';
import { useState } from 'react';

const Content = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <div className="overflow-x-hidden px-8 pb-4">
      <div className="sticky top-0 bg-white z-10 pb-4">
        <CategoryPills
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>
    </div>
  );
};

export default Content;
