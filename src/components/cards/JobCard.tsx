import React, { FC } from 'react';

import NextImage from '@/components/NextImage';

import { showAlert } from '@/utils/showAlert';

interface JobCardProps {
  title: string;
  businessName: string;
  businessLogo: string;
  earnings: number;
  estimatedTime: number;
  itemId: string;
}
const JobCard: FC<JobCardProps> = ({
  title,
  businessLogo,
  businessName,
  earnings,
  estimatedTime,
}: JobCardProps) => {
  return (
    <div
      role='button'
      className='flex w-[288px] flex-col divide-y divide-gray-200 rounded-lg bg-white p-3'
      onClick={() => showAlert(title)}
    >
      <div className='flex flex-row gap-2 pb-4'>
        <NextImage
          src={businessLogo}
          alt={businessName}
          width={48}
          height={48}
          imgClassName='rounded-full'
        />
        <div className='flex flex-col'>
          <p className='text-base font-normal text-stone-900'>{title}</p>
          <p className='text-sm font-light text-stone-500'>{businessName}</p>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between gap-4 pt-4 pl-[24px] pr-[24px]'>
        <div className='flex gap-2'>
          <div className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-200'>
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.00001 0.333344C3.31811 0.333344 0.333344 3.31811 0.333344 7.00001C0.333344 10.6819 3.31811 13.6667 7.00001 13.6667C10.6819 13.6667 13.6667 10.6819 13.6667 7.00001C13.6667 3.31811 10.6819 0.333344 7.00001 0.333344ZM7.00001 1.66668C9.94553 1.66668 12.3333 4.05449 12.3333 7.00001C12.3333 9.94553 9.94553 12.3333 7.00001 12.3333C4.05449 12.3333 1.66668 9.94553 1.66668 7.00001C1.66668 4.05449 4.05449 1.66668 7.00001 1.66668ZM7.66219 3.58893C7.62368 3.25737 7.3419 3.00001 7.00001 3.00001C6.63182 3.00001 6.33334 3.29849 6.33334 3.66668V7.00001L6.33913 7.08764C6.35828 7.23211 6.42442 7.36723 6.52861 7.47141L8.52861 9.47141L8.59141 9.52687C8.85294 9.73022 9.23109 9.71174 9.47141 9.47141L9.52687 9.40861C9.73022 9.14708 9.71174 8.76893 9.47141 8.52861L7.66668 6.72334V3.66668L7.66219 3.58893Z'
                fill='#162447'
              />
            </svg>
          </div>
          <div className='flex flex-col'>
            <p className='text-xs font-normal text-gray-400'>Upto</p>
            <p>{earnings}</p>
          </div>
        </div>
        <div className='flex gap-2'>
          <div className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-200'>
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.00001 0.333344C3.31811 0.333344 0.333344 3.31811 0.333344 7.00001C0.333344 10.6819 3.31811 13.6667 7.00001 13.6667C10.6819 13.6667 13.6667 10.6819 13.6667 7.00001C13.6667 3.31811 10.6819 0.333344 7.00001 0.333344ZM7.00001 1.66668C9.94553 1.66668 12.3333 4.05449 12.3333 7.00001C12.3333 9.94553 9.94553 12.3333 7.00001 12.3333C4.05449 12.3333 1.66668 9.94553 1.66668 7.00001C1.66668 4.05449 4.05449 1.66668 7.00001 1.66668ZM7.66219 3.58893C7.62368 3.25737 7.3419 3.00001 7.00001 3.00001C6.63182 3.00001 6.33334 3.29849 6.33334 3.66668V7.00001L6.33913 7.08764C6.35828 7.23211 6.42442 7.36723 6.52861 7.47141L8.52861 9.47141L8.59141 9.52687C8.85294 9.73022 9.23109 9.71174 9.47141 9.47141L9.52687 9.40861C9.73022 9.14708 9.71174 8.76893 9.47141 8.52861L7.66668 6.72334V3.66668L7.66219 3.58893Z'
                fill='#162447'
              />
            </svg>
          </div>
          <div className='flex flex-col gap-0'>
            <p className='text-xs font-normal text-gray-400'>Time</p>
            <p className='text-xs font-normal text-gray-900'>
              {estimatedTime} hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobCard;
