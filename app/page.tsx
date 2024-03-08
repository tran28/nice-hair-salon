'use client';
import hero_photo from "@/app/assets/hero-photo.webp";
import ImageContainer from "./components/ImageContainer";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function Home() {
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
      <ImageContainer src={hero_photo} alt="" />
      <Footer />
    </motion.div>
  );
}
