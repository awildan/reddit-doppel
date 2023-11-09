import { checkType } from '@/utils/checkViewtype';
import React from 'react';
import {
  MdOutlineViewAgenda,
  MdOutlineViewStream,
  MdOutlineViewHeadline,
  MdArrowDropDown,
} from 'react-icons/md';

const LabelView = ({ type = 'card' }) => {
  const { isCard, isClassic, isCompact } = checkType(type);
  if (isCard) return <MdOutlineViewAgenda />;
  if (isClassic) return <MdOutlineViewStream />;
  if (isCompact) return <MdOutlineViewHeadline />;
};

export const DropdownView = ({ handleChangeType, currentType }) => {
  return (
    <div className="flex">
      <div className="dropdown dropdown-end dropdown-bottom">
        <label tabIndex={0} className="btn m-1 gap-0 rounded-full">
          <LabelView type={currentType} />
          <MdArrowDropDown />
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content rounded-box z-[1] w-max bg-base-100 p-2 shadow"
        >
          <li onClick={() => handleChangeType('card')}>
            <a>
              <MdOutlineViewAgenda />
              Card
            </a>
          </li>
          <li onClick={() => handleChangeType('classic')}>
            <a>
              <MdOutlineViewStream /> Classic
            </a>
          </li>
          <li onClick={() => handleChangeType('compact')}>
            <a>
              <MdOutlineViewHeadline /> Compact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
