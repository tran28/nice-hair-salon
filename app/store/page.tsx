import Nav from "@/app/components/Nav";
import Footer from "../components/Footer";
import ImageContainer from "../components/ImageContainer";
import store_photo from '@/app/assets/store-photo.webp'

export default function store() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">Hours of Operation</h1>
        <div className="text-lg font-light flex flex-row gap-4">
          <p>Monday to Sunday</p>
          <p>9 a.m. to 8 p.m.</p>
        </div>
      </div>
      <ImageContainer src={store_photo} alt="" />
    </>
  );
}
