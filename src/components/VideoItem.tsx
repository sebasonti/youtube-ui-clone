import type { Video } from '@/types/Video';
import { formatDuration } from '@/utils/formatDuration';
import { formatTimeAgo } from '@/utils/formatTimeAgo';

const VIEWS_FORMATTER = Intl.NumberFormat(undefined, { notation: 'compact' });

type Props = Video;

const VideoItem = ({
  channel,
  duration,
  id,
  postedAt,
  thumbnailUrl,
  title,
  videoUrl,
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
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} className="shrink-0">
          <img className="w-12 h-12 rounded-full" src={channel.profileUrl} />
        </a>
        <div className="flex flex-col">
          <a href={`/watch?v=${id}`} className="font-bold">
            {title}
          </a>
          <a href={`/@${channel.id}`} className="text-secondary-text text-sm">
            {channel.name}
          </a>
          <p className="text-secondary-text text-sm">
            {VIEWS_FORMATTER.format(views)} Views • {formatTimeAgo(postedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
