import { AVATAR_IMAGE } from '@/utils/constant';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <nav className="navbar fixed z-10 bg-base-300">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl normal-case hover:bg-transparent" href="/">
          <Image src="/reddit.svg" alt="reddit logo" width={32} height={32} />
          D-Reddit
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="input join-item w-24 rounded-full md:w-auto "
        />
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="avatar btn btn-ghost">
            <div className="w-10 rounded">
              <Image src={AVATAR_IMAGE} alt="user logo" width={32} height={32} quality={100} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
