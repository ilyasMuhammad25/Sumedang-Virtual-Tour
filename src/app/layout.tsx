'use client';
import { useEffect } from 'react';
import { Providers } from './providers';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { Inter } from 'next/font/google';
import 'node_modules/react-modal-video/css/modal-video.css';
import '../styles/index.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Dynamically add Tawk.to script when component mounts
    const tawkToScript = document.createElement('script');
    tawkToScript.async = true;
    tawkToScript.src = 'https://embed.tawk.to/660359a3a0c6737bd1253364/1hpuhcbpf';
    tawkToScript.charset = 'UTF-8';
    tawkToScript.setAttribute('crossorigin', '*');
    document.body.appendChild(tawkToScript);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(tawkToScript);
    };
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
