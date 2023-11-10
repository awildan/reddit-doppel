import { AVATAR_IMAGE } from '@/utils/constant';
import { timeFromNow } from '@/utils/time';
import Image from 'next/image';
import React from 'react';
import { BiCommentDetail, BiUpvote, BiDownvote } from 'react-icons/bi';

export const Comment = ({ data, isPage = false }) => {
  const { data: comment } = data || {};

  const bgBase = isPage ? 'bg-base-300' : 'bg-base-100';
  return (
    <div className={`flex flex-row gap-2 rounded-none ${bgBase} p-3`}>
      <div className="avatar flex flex-col">
        <div className="w-8 rounded">
          <Image src={AVATAR_IMAGE} width={40} height={40} alt="Tailwind-CSS-Avatar-component" />
        </div>
      </div>
      <div className="comment flex flex-col gap-1">
        <p className="text-xs font-light">
          Posted by u/{comment?.author} <span> · {timeFromNow(comment?.created)} hours ago</span>
        </p>
        <p className="text-sm font-medium">{comment?.body}</p>

        {/* Section Action */}
        <div className="action flex flex-row items-center gap-1">
          <button className="btn btn-ghost btn-sm pl-0 pr-0 capitalize">
            <BiUpvote size={18} />
          </button>
          <p className="text-xs font-bold">{comment?.ups}</p>
          <button className="btn btn-ghost btn-sm pl-0 pr-0 capitalize">
            <BiDownvote size={18} />
          </button>

          <button className="btn btn-ghost btn-sm pl-0 pr-0 text-xs capitalize opacity-60">
            <BiCommentDetail size={18} />
            Reply
          </button>
          <button className="btn btn-ghost btn-sm pl-0 pr-0 text-xs capitalize opacity-60">
            Share
          </button>
        </div>
        {!!comment?.replies &&
          comment.replies?.data?.children?.map((reply, index) => (
            <Comment key={`${index}_${reply?.data?.id}`} data={reply} isPage={isPage} />
          ))}
      </div>
    </div>
  );
};

export default Comment;
