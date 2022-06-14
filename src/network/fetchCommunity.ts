import { endpoints } from '@/constants/endpoints';
import { globalFetch } from '@/network/globalFetch';

export interface CommunityResponseType {
  description: string;
  id: number;
  image: string;
  title: string;
}

export const fetchCommunity = async ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<CommunityResponseType[]> => {
  return globalFetch<CommunityResponseType[]>(
    `${endpoints.community}?limit=${limit}&offset=${offset}`
  );
};
