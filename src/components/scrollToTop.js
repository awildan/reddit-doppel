'use client';
import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const isBrowser = () => typeof window !== 'undefined';
    if (!isBrowser) return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const classVisible = isVisible ? 'opacity-100 ' : 'opacity-0 ';
  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={handleScroll}
        className={`${classVisible}
        btn btn-circle btn-warning btn-outline
        inline-flex items-center`}
      >
        <BiArrowFromBottom size={28} />
      </button>
    </div>
  );
};
