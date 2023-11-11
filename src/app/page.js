'use client';

import { useEffect, useRef, useState } from 'react';
import { MdOutlineNewReleases } from 'react-icons/md';
import { BsFire } from 'react-icons/bs';
import { GiPodium } from 'react-icons/gi';
import Hero from '@/components/hero';
import Thread from '@/components/thread/thread';
import { Skeleton } from '@/components/skeleton';
import { checkType } from '@/utils/checkViewtype';
import { useWindowSize } from '@/utils/hooks/useWindowSize';
import { useSubredditApi } from '@/api/hooks/useSubredditApi';
import { DropdownView } from '@/components/dropdownView';
import debounce from 'lodash/debounce';

export default function Home() {
  const [threadType, setThreadType] = useState('card'); // 'card' | 'classic' | 'compact'
  const [filter, setFilter] = useState('hot'); // 'hot' | 'top' | 'new'
  const [isViewed, setIsViewed] = useState(false);

  const { isLoading, threads, setParams, after } = useSubredditApi(filter);

  const { isCard } = checkType(threadType);
  const size = useWindowSize();
  const isMobile = size.width < 768;
  const mainRef = useRef(null);

  const handleChangeThreadType = (viewType) => {
    setThreadType(viewType);
  };

  const handleFilterThread = (filterType) => {
    setFilter(filterType);
  };

  const handleScroll = () => {
    if (mainRef.current && typeof window !== 'undefined') {
      const container = mainRef.current;
      const { bottom } = container.getBoundingClientRect();
      const { innerHeight } = window;

      setIsViewed(Math.floor(bottom - 1) <= innerHeight);
    }
  };

  useEffect(() => {
    const handleDebouncedScroll = debounce(() => handleScroll(), 400);
    window.addEventListener('scroll', handleDebouncedScroll);
    return () => {
      window.removeEventListener('scroll', handleDebouncedScroll);
    };
  }, []);

  useEffect(() => {
    if (isViewed && !isLoading) {
      setParams((prev) => ({
        ...prev,
        after,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isViewed]);

  const cardWidth = isCard ? 'w-3/4' : 'w-full';
  const mobileWidth = isMobile ? 'w-full' : cardWidth;

  return (
    <main className="flex flex-col" ref={mainRef}>
      <Hero />
      <div className="m-5 flex items-center justify-center">
        <div className="container flex max-w-screen-xl flex-col  items-center justify-center">
          {/* Part Control Thread */}
          <div
            className={`${mobileWidth} card h-20  flex-row items-center justify-between bg-base-300 p-4 shadow-xl`}
          >
            {/* Part Sorting */}
            <div className="flex gap-4">
              <button
                onClick={() => handleFilterThread('hot')}
                className={`btn-filter ${filter === 'hot' && 'btn-active'}`}
              >
                <BsFire size={22} /> hot
              </button>
              <button
                onClick={() => handleFilterThread('new')}
                className={`btn-filter ${filter === 'new' && 'btn-active'}`}
              >
                <MdOutlineNewReleases size={22} />
                new
              </button>
              <button
                onClick={() => handleFilterThread('top')}
                className={`btn-filter ${filter === 'top' && 'btn-active'}`}
              >
                <GiPodium size={22} /> top
              </button>
            </div>

            {/* Part Change View */}
            <DropdownView handleChangeType={handleChangeThreadType} currentType={threadType} />
          </div>
          <div className="divider"></div>

          {/* List Thread Part */}
          <div
            className={`${mobileWidth} ${isCard ? 'gap-4' : 'w-full'} flex flex-col items-center`}
          >
            {threads?.map((thread, index) => (
              <Thread type={threadType} data={thread.data} key={index} />
            ))}

            {isLoading && <Skeleton paragraph={threads?.length > 0 ? 1 : 3} />}
          </div>
        </div>
      </div>
    </main>
  );
}
