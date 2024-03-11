import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { data } from '@/app/metadata'
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-stone-900">
        <Banner phoneNumber={data.phoneNumber} />
        <div className={`border-b-[25px] border-x-[12px] border-stone-900 md:border-x-[28px] ${roboto.className}`}>
          <div className='flex justify-center items-center min-h-screen bg-stone-50'>
            <div className="w-full min-h-screen max-w-[80rem] px-8 py-2 mx-auto">
              <div className="flex gap-10 flex-col">
                <Nav />
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}