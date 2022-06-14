import { endpoints } from '@/constants/endpoints';
import { globalFetch } from '@/network/globalFetch';

export interface RecommendedJobsResponseType {
  businessLogo: string;
  businessName: string;
  earnings: number;
  estimatedTime: number;
  id: number;
  title: string;
}

export const fetchRecommendedJobs = async ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<RecommendedJobsResponseType[]> => {
  return globalFetch<RecommendedJobsResponseType[]>(
    `${endpoints.recommendedJobs}?limit=${limit}&offset=${offset}`
  );
};
