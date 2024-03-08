"use client";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { data } from '@/app/metadata'
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Variants } from 'framer-motion';


const roboto = Roboto_Condensed({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const pageTransition: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <html lang="en">
      <head>
        <title>{data.title}</title>
        <meta name='description' content={data.description} />
      </head>
      <body className={`border-y-[25px] border-x-[12px] border-stone-900 bg-stone-900 md:border-x-[28px] ${roboto.className}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            transition={{ duration: 0.5 }}>
            <div className='flex justify-center items-center min-h-screen bg-stone-50'>
              <div className="w-full min-h-screen max-w-[80rem] px-8 py-2 mx-auto">
                <motion.div
                  className="flex gap-10 flex-col"
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.75 }}>
                  <Nav />
                  {children}
                  <Footer />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </body>
    </html>

  );
}
