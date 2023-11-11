'use client';
import React, { useState } from 'react';
import { BiUpvote, BiDownvote } from 'react-icons/bi';
import Image from 'next/image';
import { ThreadAction } from '@/components/thread/partial/action';
import Summary from './partial/summary';
import { checkType } from '@/utils/checkViewtype';
import { THUMBNAIL } from '@/utils/constant';
import ModalThread from './partial/modal';
import { useVote } from '@/utils/hooks/useVote';

export const Thread = ({ type, data }) => {
  const { isCard, isClassic, isCompact } = checkType(type);
  const [isShow, setIsShow] = useState(false);
  const { vote, handleVote, isUpVoted, colorDownVoted, colorUpVoted } = useVote(data.ups);

  const handleClickThread = () => {
    setIsShow(true);
  };

  const handleClickComment = () => {
    setIsShow(true);
  };

  const classClassic = isCard ? 'card' : 'flex border-b-[1px] dark:border-b-gray-800';

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
          <button className="btn btn-ghost btn-xs" onClick={() => handleVote('up')}>
            <BiUpvote size={22} color={colorUpVoted} />
          </button>
          <p className="text-sm font-semibold">{vote}</p>
          <button onClick={() => handleVote('down')} className="btn btn-ghost btn-sm">
            <BiDownvote size={22} color={colorDownVoted} />
          </button>
        </div>
        <div className="flex h-full w-full flex-col gap-2 p-4" onClick={handleClickThread}>
          {/* Section Resume */}
          <div className="flex flex-row gap-2">
            {isClassic && (
              <Image
                className="h-auto w-auto object-cover"
                src={THUMBNAIL(data.thumbnail)}
                alt="picture thread"
                width={100}
                height={100}
                priority
              />
            )}
            <div className={`flex ${isCompact ? 'w-full flex-row justify-between' : 'flex-col'}`}>
              <Summary type={type} data={data} />
              <ThreadAction isCompact={isCompact} data={data} handleComment={handleClickComment} />
            </div>
          </div>
        </div>
      </div>
      <ModalThread onClose={() => setIsShow(false)} threadId={data.id} isOpen={isShow} />
    </div>
  );
};

export default Thread;
