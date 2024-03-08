'use client';
import Nav from "@/app/components/Nav";
import Footer from "../components/Footer";
import ImageContainer from "../components/ImageContainer";
import store_photo from '@/app/assets/store-photo.webp';
import { motion } from "framer-motion";

export default function store() {
  return (
    <motion.div
      className="flex gap-10 flex-col"
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.1,
        duration: 0.75,
      }}>
      <Nav />
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">Hours of Operation</h1>
        <div className="text-lg font-light flex flex-row gap-4">
          <p>Monday to Sunday</p>
          <p>9 a.m. to 8 p.m.</p>
        </div>
      </div>
      <ImageContainer src={store_photo} alt="" />
      <Footer />
    </motion.div>
  );
}
