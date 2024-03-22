import hero_photo from "@/app/assets/hero-photo.webp";
import ImageContainer from "./components/ImageContainer";

export default function Home() {
  return (   
      <ImageContainer src={hero_photo} alt="Nice Hair Salon" />
  );
}
