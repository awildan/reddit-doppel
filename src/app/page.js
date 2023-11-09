'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { MdOutlineNewReleases } from 'react-icons/md';
import { BsFire } from 'react-icons/bs';
import { GiPodium } from 'react-icons/gi';
import {
  MdOutlineViewAgenda,
  MdOutlineViewStream,
  MdOutlineViewHeadline,
  MdArrowDropDown,
} from 'react-icons/md';
import Hero from '@/components/hero';
import Thread from '@/components/thread';
import { Skeleton } from '@/components/skeleton';

export default function Home() {
  const [threadType, setThreadType] = useState('card');

  const handleChangeThreadType = (type) => {
    console.log('type', type);
    setThreadType(type);
  };
  return (
    <main className="flex flex-col">
      <Hero />
      <div className="m-5 flex items-center justify-center">
        <div className="container flex max-w-screen-xl flex-col  items-center justify-center">
          <div className="card h-20 w-3/4 flex-row items-center justify-between bg-base-300 p-4 shadow-xl">
            {/* Sorting Part */}
            <div className="flex gap-4">
              <button className="btn btn-outline btn-active rounded-full">
                <BsFire size={22} /> hot
              </button>
              <button className="btn btn-outline rounded-full">
                <MdOutlineNewReleases size={22} />
                new
              </button>
              <button className="btn btn-outline rounded-full">
                <GiPodium size={22} /> top
              </button>
            </div>

            {/* Change View Part */}
            <div className="flex">
              <div className="dropdo dropdown dropdown-end dropdown-bottom">
                <label tabIndex={0} className="btn m-1">
                  <MdOutlineViewAgenda /> <MdArrowDropDown />
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content rounded-box z-[1] w-max bg-base-100 p-2 shadow"
                >
                  <li onClick={() => handleChangeThreadType('card')}>
                    <a>
                      <MdOutlineViewAgenda />
                      Card
                    </a>
                  </li>
                  <li onClick={() => handleChangeThreadType('classic')}>
                    <a>
                      <MdOutlineViewStream /> Classic
                    </a>
                  </li>
                  <li>
                    <a>
                      <MdOutlineViewHeadline /> Compact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="divider"></div>

          {/* List Thread Part */}
          <div className={`${threadType === 'card' && 'gap-4'} flex flex-col items-center`}>
            <Thread type={threadType} />
            <Thread type={threadType} />
            <Thread type={threadType} />

            {/* Loading Part */}
            <Skeleton />
          </div>
        </div>
      </div>
    </main>
  );
}
