import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/api/fetcher';
import { SUB_REDDIT } from '@/utils/constant';

export const useThreadApi = ({ id, skip = true }) => {
  const { data, isFetching } = useQuery({
    queryKey: ['thread-detail', id],
    queryFn: () => fetcher(`/r/${SUB_REDDIT}/comments/${id}.json`),
    enabled: id && !skip,
  });

  return {
    isFetching,
    thread: {
      detail: data?.[0]?.data?.children?.[0]?.data || null,
      comments: data?.[1]?.data?.children || [],
    },
  };
};
