// 'use client';
import React, { useRef } from 'react';
import { BiUpvote, BiDownvote } from 'react-icons/bi';
import Image from 'next/image';
import { ThreadAction } from '@/components/thread/partial/action';
import Summary from './partial/summary';
import { checkType } from '@/utils/checkViewtype';
import { EMPTY_IMAGE } from '@/utils/constant';

export const getPathNameFromUrl = (src) => src && new URL(decodeURIComponent(src))?.pathname;

export const Thread = ({ type, data }) => {
  const { isCard, isClassic, isCompact } = checkType(type);

  const handleClickThread = () => {
    console.log('click div');
  };

  const handleClickUpVote = () => {
    console.log('click up vote');
  };

  const classClassic = isCard ? 'card' : 'flex border-b-[1px] dark:border-b-gray-800';
  const thumbnail =
    data.thumbnail !== 'self' ? data.thumbnail.replaceAll('&amp;', '&') : EMPTY_IMAGE;
  return (
    <div
      className={`${classClassic} w-full cursor-pointer flex-row  bg-base-300 shadow-xl hover:bg-base-200`}
    >
      <div className="flex w-full">
        <div
          className={`flex ${
            isCompact ? 'w-52 flex-row items-center justify-around' : 'flex-col'
          } h-full items-center gap-2 border-r-[1px] border-r-gray-300 p-4 dark:border-r-gray-800`}
        >
          <button className="btn btn-ghost btn-xs" onClick={handleClickUpVote}>
            <BiUpvote size={22} />
          </button>
          <p className="text-sm font-semibold">{data.ups}</p>
          <button className="btn btn-ghost btn-sm">
            <BiDownvote size={22} />
          </button>
        </div>
        <div className="flex h-full w-full flex-col gap-2 p-4" onClick={handleClickThread}>
          {/* Section Resume */}
          <div className="flex flex-row gap-2">
            {isClassic && (
              <Image
                className="h-auto w-auto object-cover"
                src={thumbnail}
                alt="picture thread"
                width={100}
                height={100}
              />
            )}
            <div className={`flex ${isCompact ? 'w-full flex-row justify-between' : 'flex-col'}`}>
              <Summary type={type} data={data} />
              <ThreadAction isCompact={isCompact} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thread;
