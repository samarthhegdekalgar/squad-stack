import React from 'react';
import { FC } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { useInfiniteScroller } from '@/hooks/useInfiniteScroller';

import { LeftArrow, RightArrow } from '@/components/arrow';
import AnnouncementCard from '@/components/cards/AnnouncementCard';
import NetworkError from '@/components/error';
import Shimmer from '@/components/Shimmer';

import { fetchAnnouncement } from '@/network/fetchAnnouncement';
import { onWheel } from '@/utils/onWheel';

const Announcement: FC = () => {
  const [offset, setOffset] = React.useState(0);
  const limit = 25;

  const { error, hasMore, loading, response } = useInfiniteScroller({
    callback: fetchAnnouncement,
    limit: limit,
    offset: offset,
  });

  const pushNewItems = () => {
    setOffset((prev) => prev + limit);
  };

  return (
    <>
      <div className='mx-auto mb-5 mt-[51px] ml-5 max-w-full px-4 sm:px-6 md:px-8'>
        <h3 className='text-base font-normal text-gray-900'>Announcements</h3>
      </div>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={
          <RightArrow
            limit={limit}
            pushNewItems={pushNewItems}
            hasMore={hasMore}
          />
        }
        onWheel={onWheel}
        scrollContainerClassName='scrollbar-hide gap-2'
      >
        {response.map(({ avatar, description, id, subtitle, title }, index) => (
          <AnnouncementCard
            avatar={avatar}
            description={description}
            itemId={`announcement:${id}:${index}`}
            subtitle={subtitle}
            title={title}
            key={id}
          />
        ))}
        {loading ? <Shimmer /> : <></>}
        {error ? <NetworkError /> : <></>}
      </ScrollMenu>
    </>
  );
};
export default Announcement;
