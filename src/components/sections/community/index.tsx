import { FC } from 'react';
import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { useInfiniteScroller } from '@/hooks/useInfiniteScroller';

import { LeftArrow, RightArrow } from '@/components/arrow';
import CommunityCard from '@/components/cards/CommunityCard';
import NetworkError from '@/components/error';
import Shimmer from '@/components/Shimmer';

import { fetchCommunity } from '@/network/fetchCommunity';
import { onWheel } from '@/utils/onWheel';

const Community: FC = () => {
  const [offset, setOffset] = React.useState(0);
  const limit = 25;

  const { error, hasMore, loading, response } = useInfiniteScroller({
    callback: fetchCommunity,
    limit: limit,
    offset: offset,
  });

  const pushNewItems = () => {
    setOffset((prev) => prev + limit);
  };

  return (
    <>
      <div className='mx-auto mb-5 mt-[51px] ml-5 max-w-full px-4 sm:px-6 md:px-8'>
        <h3 className='text-base font-normal text-gray-900'>Community</h3>
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
        {response.map(({ description, id, image, title }, index) => (
          <CommunityCard
            description={description}
            key={id}
            image={image}
            title={title}
            itemId={`community:${id}:${index}`}
          />
        ))}
        {loading ? <Shimmer className='h-[224px]' /> : <></>}
        {error ? <NetworkError /> : <></>}
      </ScrollMenu>
    </>
  );
};
export default Community;
