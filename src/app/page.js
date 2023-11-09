'use client';

import { useState } from 'react';
import Link from 'next/link';
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

export default function Home() {
  const [threadType, setThreadType] = useState('card'); // 'card' | 'classic' | 'compact'
  const [filter, setFilter] = useState('hot'); // 'hot' | 'top' | 'new'
  const { isCard } = checkType(threadType);
  const size = useWindowSize();
  const isMobile = size.width < 768;

  const { isFetching, threads } = useSubredditApi(filter);

  const handleChangeThreadType = (viewType) => {
    setThreadType(viewType);
  };

  const handleFilterThread = (filterType) => {
    console.log('filter', filterType);
    setFilter(filterType);
  };

  const cardWidth = isCard ? 'w-3/4' : 'w-full';
  const mobileWidth = isMobile ? 'w-full' : cardWidth;

  return (
    <main className="flex flex-col">
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
            {isFetching
              ? [...Array(3)].map((_, i) => <Skeleton key={i} />)
              : threads.map((thread, index) => (
                  <Thread type={threadType} data={thread.data} key={index} />
                ))}

            {/* Loading Part */}
          </div>
        </div>
      </div>
    </main>
  );
}
