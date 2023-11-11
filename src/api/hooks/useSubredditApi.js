import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { fetcher } from '@/api/fetcher';
import { SUB_REDDIT } from '@/utils/constant';

export const useSubredditApi = (filter = 'hot') => {
  const [params, setParams] = useState({ limit: 15, count: 1, after: '' });
  const [threads, setThreads] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('hot');

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['threads', filter, params.after],
    queryFn: () => fetcher(`/r/${SUB_REDDIT}/${filter}.json`, params),
  });

  useEffect(() => {
    if (data?.data?.children && filter === currentFilter) {
      setThreads((prev) => [...prev, ...(data?.data?.children || [])]);
    } else if (filter !== currentFilter) {
      setCurrentFilter(filter);
      setThreads(data?.data?.children || []);
    }
  }, [currentFilter, data?.data?.children, filter]);

  return {
    isLoading: isFetching || isLoading,
    threads,
    setParams,
    after: data?.data?.after || '',
    before: data?.data?.before || null,
  };
};
