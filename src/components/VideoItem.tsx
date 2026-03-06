import type { Video } from '@/types/Video';
import { formatDuration } from '@/utils/formatDuration';

type Props = Video;

const VideoItem = ({
  channel,
  duration,
  id,
  postedAt,
  thumbnailUrl,
  title,
  viderUrl,
  views,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className="block w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
          {formatDuration(duration)}
        </div>
      </a>
    </div>
  );
};

export default VideoItem;
