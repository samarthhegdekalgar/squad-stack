import { FC } from 'react';

import NextImage from '@/components/NextImage';

import { showAlert } from '@/utils/showAlert';

interface CommunityCardProps {
  description: string;
  itemId: number;
  image: string;
  title: string;
}

const CommunityCard: FC<CommunityCardProps> = ({
  description,
  image,
  title,
}: CommunityCardProps) => {
  return (
    <div
      role='button'
      className='flex h-[224px] w-[288px] flex-col overflow-hidden rounded-lg bg-white'
      onClick={() => showAlert(title)}
    >
      <NextImage
        src={image}
        alt={title}
        width={288}
        height={128}
        className='bg-cover'
      />
      <div className='p-[12px]'>
        <h4 className='mb-2 text-base font-bold leading-6'>{title}</h4>
        <p className='h-[48px] overflow-hidden break-normal text-sm font-normal leading-6 text-gray-400'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default CommunityCard;
