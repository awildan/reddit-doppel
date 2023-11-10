'use client';
import ThreadDeTail from '@/components/thread/partial/modalBody';
import { useRouter, useParams } from 'next/navigation';
import { IoNotifications } from 'react-icons/io5';

export default function Page() {
  const router = useRouter();
  const params = useParams();

  return (
    <div className="flex justify-center">
      <div className="container flex h-screen items-start justify-center  pt-20">
        <div className="flex w-full flex-col">
          {/* Sub header Section */}
          <div className="card sticky top-16 z-20 h-20 w-full flex-row items-center justify-between bg-base-300 p-4">
            <div className="breadcrumbs text-sm">
              <ul>
                <li onClick={() => router.push('/')}>
                  <a>Home</a>
                </li>
                <li>Valorant</li>
              </ul>
            </div>
            <div className="flex gap-4">
              <button className="btn btn-outline rounded-full">join</button>
              <button className="btn btn-circle btn-outline rounded-full">
                <IoNotifications size={20} />
              </button>
            </div>
          </div>
          <div className="divider"></div>
          {/* Content */}
          <div className="p-3">
            <ThreadDeTail threadId={params?.id} isOpen isPage />
          </div>
        </div>
      </div>
    </div>
  );
}
