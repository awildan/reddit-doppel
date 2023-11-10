import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { fetcher } from '@/api/fetcher';
import { SUB_REDDIT } from '@/utils/constant';

export const useSubredditApi = (filter = 'hot') => {
  const [after, setAfter] = useState('');

  const { data, isFetching } = useQuery({
    queryKey: ['threads', filter],
    queryFn: () => fetcher(`/r/${SUB_REDDIT}/${filter}.json`, { limit: 10, after }),
  });

  return {
    isFetching,
    threads: data?.data?.children || {},
  };
};
