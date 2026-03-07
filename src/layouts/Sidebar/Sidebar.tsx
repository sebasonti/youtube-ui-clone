import {
  Clapperboard,
  Clock,
  History,
  Home,
  Library,
  ListVideo,
  PlaySquare,
  Repeat,
} from 'lucide-react';
import SmallSidebarItem from './components/SmallSidebarItem';
import LargeSidebarItem from './components/LargeSidebarItem';
import LargeSidebarSection from './components/LargeSidebarSection';
import { playlists, subscriptions } from '@/data/sidebar';
import LeftHeader from '../PageHeader/components/LeftHeader';
import { useSidebarContext } from '@/contexts/SidebarContext';

const Sidebar = () => {
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext();

  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col mx-1 ${isLargeOpen ? 'lg:hidden' : ''}`}
      >
        <SmallSidebarItem Icon={Home} title="Home" url="/" />
        <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSidebarItem
          Icon={Clapperboard}
          title="Subscriptions"
          url="/subscriptions"
        />
        <SmallSidebarItem Icon={Library} title="Library" url="/library" />
      </aside>
      {isSmallOpen && (
        <div
          className="lg:hidden fixed bg-secondary-dark opacity-50 inset-0 z-998"
          onClick={close}
        />
      )}
      <aside
        className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${isLargeOpen ? 'lg:flex' : 'lg:hidden'} ${isSmallOpen ? 'flex z-999 bg-white h-screen' : 'hidden'}`}
      >
        <div className="lg:hidden pt-2.5 mb-4 mx-2 sticky top-0 bg-white">
          <LeftHeader />
        </div>
        <LargeSidebarSection>
          <LargeSidebarItem isActive Icon={Home} title="Home" url="/" />
          <LargeSidebarItem
            Icon={Clapperboard}
            title="Subscriptions"
            url="/subscriptions"
          />
        </LargeSidebarSection>
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem Icon={Library} title="Library" url="/library" />
          <LargeSidebarItem Icon={History} title="History" url="/history" />
          <LargeSidebarItem
            Icon={PlaySquare}
            title="Your Videos"
            url="/your-videos"
          />
          <LargeSidebarItem
            Icon={Clock}
            title="Watch Later"
            url="/playlist?list=WL"
          />
          {playlists.map((playlist) => (
            <LargeSidebarItem
              key={playlist.id}
              Icon={ListVideo}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
            />
          ))}
        </LargeSidebarSection>
        <LargeSidebarSection>
          {subscriptions.map((subscription) => (
            <LargeSidebarItem
              key={subscription.id}
              Icon={subscription.imgUrl}
              title={subscription.channelName}
              url={`/@${subscription.id}`}
            />
          ))}
        </LargeSidebarSection>
      </aside>
    </>
  );
};

export default Sidebar;
