import { FC } from 'react';

const NetworkError: FC = () => {
  return (
    <div className='flex h-[136px] w-[288px] flex-col items-center justify-center rounded-lg bg-white p-3'>
      <p className='text-xs text-red-400'>Network error</p>
      <p>something went wrong 😕</p>
    </div>
  );
};
export default NetworkError;
