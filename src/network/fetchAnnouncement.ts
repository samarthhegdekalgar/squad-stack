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
    `https://mockend.com/nillion/frontend-challenge/announcements?limit=${limit}&offset=${offset}`
  );
};
