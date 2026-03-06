import { categories, videos } from '@/data/home';
import CategoryPills from './components/CategoryPills';
import { useState } from 'react';
import VideoItem from '@/components/VideoItem';

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
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {videos.map((video) => (
          <VideoItem key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Content;
