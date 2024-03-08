import Nav from "@/app/components/Nav";
import hero_photo from "@/app/assets/hero-photo.webp"
import ImageContainer from "./components/ImageContainer";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex gap-10 flex-col">
      <Nav />
      <ImageContainer src={hero_photo} alt="" />
      <Footer />
    </div>
  );
}
