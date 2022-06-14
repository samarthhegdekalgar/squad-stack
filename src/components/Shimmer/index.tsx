import { FC } from 'react';

interface ShimmerProps {
  className?: string;
}
const Shimmer: FC<ShimmerProps> = ({ className }: ShimmerProps) => {
  return (
    <div className='flex gap-2'>
      {Array(5)
        .fill(0)
        .map((_, index) => {
          return (
            <div
              key={index}
              className={`h-[136px] w-[288px] rounded-lg bg-white p-3 ${className}`}
            >
              <div className='flex animate-pulse space-x-4'>
                <div className='h-10 w-10 rounded-full bg-gray-400'></div>
                <div className='flex-1 space-y-6 py-1'>
                  <div className='h-2 rounded bg-gray-400'></div>
                  <div className='space-y-3'>
                    <div className='grid grid-cols-3 gap-4'>
                      <div className='col-span-2 h-2 rounded bg-gray-400'></div>
                      <div className='col-span-1 h-2 rounded bg-gray-400'></div>
                    </div>
                    <div className='h-2 rounded bg-gray-400'></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Shimmer;
