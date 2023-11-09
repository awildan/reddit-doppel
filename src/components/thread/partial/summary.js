import { checkType } from '@/utils/checkViewtype';
import dayjs from 'dayjs';
import React from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const Summary = ({ data, type }) => {
  const { isCard, isCompact } = checkType(type);

  return (
    <>
      {isCard && (
        <p className="text-xs font-light">
          Posted by u/{data.author} {dayjs.unix(data.created).fromNow()} hour ago
        </p>
      )}
      <h2 className={`${isCompact && 'w-4/5'} text-lg font-semibold`}>
        {data.title}
        <span className="badge badge-warning ml-2 font-normal capitalize">
          {data.link_flair_text}
        </span>
        {!isCard && (
          <p className="text-xs font-light">
            Posted by u/{data.author} {dayjs.unix(data.created).fromNow()} hour ago
          </p>
        )}
      </h2>
      {isCard && (
        <>
          <p className="max-h-16 overflow-hidden text-ellipsis break-all text-justify">
            {data.selftext}
          </p>
          <p>...</p>
          {data.is_video && (
            <video
              preload="auto"
              controls
              src={data.media.reddit_video.fallback_url}
              className="h-full w-full"
            />
          )}
        </>
      )}
    </>
  );
};

export default Summary;
