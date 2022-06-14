import { FC } from 'react';

import Announcement from '@/components/sections/announcement';
import Community from '@/components/sections/community';
import RecommendedJobs from '@/components/sections/recommendedJobs';

const Home: FC = () => {
  return (
    <div className='flex h-screen flex-1 flex-col overflow-scroll bg-stone-100 md:pl-64'>
      <main className='flex-1'>
        <div className='py-6'>
          <div className='mx-auto max-w-full px-4 sm:px-6 md:px-8'>
            <RecommendedJobs />
            <Announcement />
            <Community />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
