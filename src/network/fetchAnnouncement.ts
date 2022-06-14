import { endpoints } from '@/constants/endpoints';
import { globalFetch } from '@/network/globalFetch';

export interface AnnouncementResponseType {
  avatar: string;
  description: string;
  id: number;
  subtitle: string;
  title: string;
}

export const fetchAnnouncement = async ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<AnnouncementResponseType[]> => {
  return globalFetch<AnnouncementResponseType[]>(
    `${endpoints.announcement}?limit=${limit}&offset=${offset}`
  );
};
