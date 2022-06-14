import React, { FC } from 'react';

import NextImage from '@/components/NextImage';

import { showAlert } from '@/utils/showAlert';

interface AnnouncementCardProps {
  avatar: string;
  description: string;
  itemId: number;
  subtitle: string;
  title: string;
}
const AnnouncementCard: FC<AnnouncementCardProps> = ({
  title,
  avatar,
  description,
  subtitle,
}: AnnouncementCardProps) => {
  return (
    <div
      role='button'
      className='flex h-[136px] w-[288px] flex-col overflow-hidden rounded-lg bg-white p-3'
      onClick={() => showAlert(title)}
    >
      <div className='flex gap-2'>
        <NextImage
          src={avatar}
          alt={title}
          width={24}
          height={24}
          imgClassName='rounded-full'
        />
        <h5 className='text-base font-normal leading-6 text-gray-800'>
          {title}
        </h5>
      </div>
      <div className='p-[12px]'>
        <h4 className='mb-2 text-base font-bold leading-6'>{subtitle}</h4>
        <p className='h-[48px] overflow-hidden break-normal text-sm font-normal leading-6 text-gray-400'>
          {description}
        </p>
      </div>
    </div>
  );
};
export default AnnouncementCard;
