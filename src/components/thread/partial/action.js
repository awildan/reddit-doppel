import React from 'react';
import { BiCommentDetail, BiShare, BiBookmark, BiBookmarks } from 'react-icons/bi';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';

export const ThreadAction = ({ isCompact = false, data }) => {
  const onComment = (e) => {
    e.stopPropagation();
    console.log('click comment');
  };
  return (
    <div className="mt-4 flex items-center gap-2">
      <button onClick={onComment} className="btn btn-ghost btn-sm pl-0 pr-0 capitalize">
        <BiCommentDetail size={24} />
        {data.num_comments} {!isCompact && 'Comments'}
      </button>
      {isCompact && (
        <div className="dropdown dropdown-end dropdown-bottom">
          <label tabIndex={0} className="btn btn-sm m-1">
            <IoEllipsisHorizontalSharp />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box z-[1] w-max bg-base-100 p-2 shadow"
          >
            <li>
              <a>
                <BiShare size={24} />
                Share
              </a>
            </li>
            <li>
              <a>
                <BiBookmark size={24} />
                Save
              </a>
            </li>
          </ul>
        </div>
      )}
      {!isCompact && (
        <>
          <button className="btn btn-ghost btn-sm pl-0 pr-0 capitalize">
            <BiShare size={24} />
            Share
          </button>
          <button className="btn btn-ghost btn-sm pl-0 pr-0 capitalize">
            <BiBookmark size={24} />
            Save
          </button>
        </>
      )}
    </div>
  );
};
