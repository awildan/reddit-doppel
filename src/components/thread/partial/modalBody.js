'use client';
import { SUB_REDDIT } from '@/utils/constant';
import Image from 'next/image';
import React from 'react';
import { BiCommentDetail, BiDownvote, BiShare, BiUpvote } from 'react-icons/bi';
import dynamic from 'next/dynamic';
import Comment from '@/components/thread/partial/comment';
import { useThreadApi } from '@/api/hooks/useThreadApi';
import { Skeleton } from '@/components/skeleton';
import { timeFromNow } from '@/utils/time';
import { useVote } from '@/utils/hooks/useVote';
import { useRouter } from 'next/navigation';

const Editor = dynamic(() => import('../../editor'), {
  ssr: false,
});

export const ThreadDeTail = ({ threadId, isOpen, isPage = false }) => {
  const { isFetching, thread } = useThreadApi({ id: threadId, skip: !isOpen });
  const { vote, handleVote, colorDownVoted, colorUpVoted } = useVote(thread.detail?.ups);
  const router = useRouter();
  const bgBase = isPage ? 'bg-base-300' : 'bg-base-100';

  const handleClickDetail = () => {
    router.replace(`/r/${SUB_REDDIT}/comments/${threadId}`);
  };

  return isFetching && thread?.detail === null ? (
    <Skeleton withImg paragraph={3} />
  ) : (
    <div className="flex flex-col gap-4">
      {/* Section Thread */}
      <div className={`card card-compact mt-5 w-full ${bgBase} shadow-xl`}>
        <div className="card-body">
          <p>
            Posted by u/{thread.detail?.author} {timeFromNow(thread.detail?.created)} hours ago
          </p>
          <h2 className="card-title">{thread.detail?.title}</h2>
          <label className="badge badge-accent font-normal capitalize">
            {thread.detail?.link_flair_text}
          </label>
        </div>
        {thread.detail?.is_video && (
          <video
            preload="auto"
            controls
            src={thread.detail?.secure_media?.reddit_video?.fallback_url}
            className="h-full w-full"
          />
        )}
        {thread.detail?.media_metadata && thread.detail?.thumbnail !== 'self' && (
          <figure>
            <Image
              className="h-[480px] w-full"
              src={thread.detail?.thumbnail?.replaceAll('&amp;', '&')}
              width={720}
              height={480}
              alt="Shoes"
            />
          </figure>
        )}

        <div className="card-body flex-row justify-between">
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => handleVote('up')}
              className="btn btn-ghost btn-sm pl-1 pr-1 capitalize"
            >
              <BiUpvote size={28} color={colorUpVoted} />
            </button>
            <p className="text-base font-bold">{vote}</p>
            <button
              onClick={() => handleVote('down')}
              className="btn btn-ghost btn-sm pl-1 pr-1 capitalize"
            >
              <BiDownvote size={28} color={colorDownVoted} />
            </button>
            {!isPage && (
              <button onClick={handleClickDetail} className="btn btn-primary ml-2">
                open detail
              </button>
            )}
          </div>
          <div className="flex items-center justify-center gap-2">
            <label className="sla btn btn-ghost btn-sm pl-0 pr-0 capitalize">
              <BiCommentDetail size={24} />
              {thread.detail?.num_comments} Comments
            </label>
            <label className="btn btn-ghost btn-sm pl-0 pr-0 capitalize">
              <BiShare size={24} />
              Share
            </label>
          </div>
        </div>
      </div>

      {/* Section Input Comment */}
      <div className={`card card-compact ${bgBase} shadow-xl`}>
        <div className="card-body h-full min-h-max">
          <h2>Comment as AwiL</h2>
          <Editor />
          <div className="card-actions justify-end">
            <button className="btn btn-primary w-48 rounded-full">comment</button>
          </div>
        </div>
      </div>
      <div className="divider m-0 "></div>

      {/* Section List Comment */}
      <div className="flex flex-col gap-0">
        {thread.comments.length > 3 && !isPage
          ? thread.comments
              .slice(0, 3)
              .map((comment, index) => (
                <Comment key={`${index}_${comment?.data?.id}`} data={comment} isPage={isPage} />
              ))
          : thread.comments.map((comment, index) => {
              return (
                <Comment key={`${index}_${comment?.data?.id}`} data={comment} isPage={isPage} />
              );
            })}

        {!isPage && (
          <>
            <p>...</p>
            <div className="m-2 flex flex-row justify-center">
              <button onClick={handleClickDetail} className="btn btn-primary btn-wide rounded-full">
                open detail
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ThreadDeTail;
