import React from 'react';
import {
  BiUpvote,
  BiDownvote,
  BiCommentDetail,
  BiShare,
  BiBookmark,
  BiBookmarks,
} from 'react-icons/bi';
import Image from 'next/image';

export const Thread = ({ type }) => {
  const isClassic = type === 'classic';

  const classClassic = isClassic
    ? 'w-full flex border-b-[1px] dark:border-b-gray-800'
    : 'w-3/4 card';
  return (
    <div
      className={`${classClassic} cursor-pointer flex-row  bg-base-300 shadow-xl hover:bg-base-200 `}
    >
      <div className="flex">
        <div className="first-letter: flex h-full flex-col items-center gap-2 border-r-[1px] border-r-gray-300 p-4 dark:border-r-gray-800">
          <button className="btn btn-outline btn-sm">
            <BiUpvote />
          </button>
          <p className="font-semibold">120</p>
          <button className="btn btn-outline btn-sm">
            <BiDownvote />
          </button>
        </div>
        <div className="flex h-full flex-1 flex-col gap-2 p-4">
          <p className="text-xs font-light">Posted by u/Awil 8 hour ago</p>
          <h2 className="text-lg font-semibold">
            New movie is released!{' '}
            <span className="badge badge-warning font-normal capitalize">Gameplay</span>
          </h2>
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt voluptatum sequi
            earum, corrupti provident ad quae obcaecati, laudantium architecto accusamus veritatis
            nulla est facilis?
          </p>
          <Image src="https://placehold.co/800x400.svg" alt="user logo" width={800} height={400} />
          <div className="mt-4 flex gap-4">
            <button className="btn btn-ghost btn-sm pl-0 pr-0 capitalize">
              <BiCommentDetail size={24} />
              30 Comments
            </button>
            <button className="btn btn-ghost btn-sm pl-0 pr-0 capitalize">
              <BiShare size={24} />
              Share
            </button>
            <button className="btn btn-ghost btn-sm pl-0 pr-0 capitalize">
              <BiBookmark size={24} />
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thread;
