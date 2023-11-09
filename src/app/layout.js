import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { BiShare } from 'react-icons/bi';
import { ScrollToTop } from '@/components/scrollToTop';
import Providers from './provider';
import { fetcher } from '@/api/fetcher';
import { SUB_REDDIT } from '@/utils/constant';

const inter = Inter({ subsets: ['latin'] });

export const generateMetadata = async () => {
  const { data } = await fetcher(`/r/${SUB_REDDIT}/about.json`);

  return {
    title: data.title,
    description: data.public_description,
  };
};

export const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Providers>{children}</Providers>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
