import { useEffect, useState } from 'react';

export interface InfiniteScrollerProps<T> {
  callback: ({
    limit,
    offset,
  }: {
    limit: number;
    offset: number;
  }) => Promise<T[]>;
  limit: number;
  offset: number;
}
export const useInfiniteScroller = <T extends { id: number }>({
  callback,
  limit,
  offset,
}: InfiniteScrollerProps<T>): {
  response: T[];
  loading: boolean;
  error: boolean;
  hasMore: boolean;
} => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (hasMore && !error) {
      setLoading(true);
      setError(false);
      callback({ limit, offset })
        .then((res) => {
          const allItems = [...response, ...res];
          // Remove all duplicate items
          const uniqueItems = allItems.filter(
            (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
          );
          setResponse(uniqueItems);
          setHasMore(res.length >= limit);
        })
        .catch(() => {
          setError(true);
          setHasMore(false);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  return { loading, error, response, hasMore };
};
