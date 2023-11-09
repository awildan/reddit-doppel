import Image from 'next/image';
import { SiValorant } from 'react-icons/si';
import { IoNotifications } from 'react-icons/io5';

export const Hero = ({ bgImage = '', textImage = '' }) => {
  return (
    <div className="flex w-full flex-col bg-base-300 p-2">
      <div className="flex h-72 w-full items-center rounded-lg bg-[url('https://styles.redditmedia.com/t5_2dkvmc/styles/bannerBackgroundImage_2d0nrelhkkqb1.png')] bg-cover bg-center">
        <div className="ml-0 flex h-full items-center p-1 md:ml-10 md:p-10">
          <Image
            src="https://styles.redditmedia.com/t5_2dkvmc/styles/bannerPositionedImage_jcmkrvypkkqb1.png"
            className="m-"
            alt="reddit logo"
            width={381}
            height={60}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="container flex max-w-screen-xl items-center justify-between pt-2">
          <div className="flex gap-8">
            <div className="flex items-center gap-4 ">
              <SiValorant className="text-6xl" />
              <h1 className="text-2xl font-bold uppercase">valorant</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn btn-outline rounded-full">join</button>
              <button className="btn btn-circle btn-outline rounded-full">
                <IoNotifications size={20} />
              </button>
            </div>
          </div>
          <div>
            <button className="btn btn-outline rounded-full">Create a post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
