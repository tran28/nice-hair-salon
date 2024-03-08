"use client";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { data } from '@/app/metadata'
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Logo from "./components/Logo";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <Head>
        <title>{data.title}</title>
        <meta name='description' content={data.description} />
      </Head>
      <body className={`border-y-[25px] border-x-[12px] border-stone-900 bg-stone-900 md:border-x-[28px] ${roboto.className}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}>
            <div className='flex justify-center items-center min-h-screen bg-stone-50'>
              <div className="w-full min-h-screen max-w-[80rem] px-8 py-2 mx-auto">
                {children}
              </div>
            </div>

            <motion.div
              className="absolute top-0 left-0 w-full h-screen bg-stone-50 origin-top z-20"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <div className="flex min-h-screen w-full justify-center items-center">
                <Logo />
              </div>
            </motion.div>

            <motion.div
              className="absolute top-0 left-0 w-full h-screen bg-stone-50 origin-top z-20"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <div className="flex min-h-screen w-full justify-center items-center">
                <Logo />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </body>
    </html>

  );
}
