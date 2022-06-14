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
    `https://mockend.com/nillion/frontend-challenge/jobs?limit=${limit}&offset=${offset}`
  );
  // return new Promise<RecommendedJobsResponseType[]>((resolve) => {
  //   resolve(Array(10).fill(
  //     {
  //       businessLogo: "https://i.pravatar.cc",
  //     }
  //   ).map((each, index) => ({
  //     ...each,
  //     businessName: `Business ${index}`,
  //     earnings: 100,
  //     estimatedTime: Math.floor(Math.random() * 10),
  //     id: index,
  //     title: `Job ${index}`
  //   })))
  // })
};
