import Image, { StaticImageData } from "next/image";
import photo1 from "@/app/assets/photo1.webp";
import photo2 from "@/app/assets/photo2.webp";
import photo3 from "@/app/assets/photo3.webp";
import photo4 from "@/app/assets/photo4.webp";
import photo5 from "@/app/assets/photo5.webp";
import photo6 from "@/app/assets/photo6.webp";
import photo7 from "@/app/assets/photo7.webp";
import photo8 from "@/app/assets/photo8.webp";
import photo9 from "@/app/assets/photo9.webp";
import { data } from "@/app/metadata";

const images: { src: StaticImageData; alt: string }[] = [
  { src: photo1, alt: "Fresh haircut styled at Nice Hair Salon" },
  { src: photo2, alt: "Hair colour treatment at Nice Hair Salon" },
  { src: photo3, alt: "Highlights styled at Nice Hair Salon Mississauga" },
  { src: photo4, alt: "Bridal updo by Nice Hair Salon" },
  { src: photo5, alt: "Long layered cut by Nice Hair Salon" },
  { src: photo6, alt: "Hair styling at Nice Hair Salon" },
  { src: photo7, alt: "Salon work by Nice Hair Salon Mississauga" },
  { src: photo8, alt: "Hair finish at Nice Hair Salon" },
  { src: photo9, alt: "Styled look at Nice Hair Salon Mississauga" },
];

export default function Gallery() {
  return (
    <section aria-label="Gallery" className="w-full">
      <a
        href={data.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Nice Hair Salon Instagram in a new tab"
        className="block group"
      >
        <div className="grid grid-cols-3 md:grid-cols-9 gap-[2px]">
          {images.map((img, i) => (
            <div key={i} className="aspect-square relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 33vw, 11vw"
                quality={60}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </a>
    </section>
  );
}
