import Image, { StaticImageData } from "next/image";
import photo1 from "@/app/assets/photo1.webp";
import photo2 from "@/app/assets/photo2.webp";
import photo3 from "@/app/assets/photo3.webp";
import photo4 from "@/app/assets/photo4.webp";
import photo5 from "@/app/assets/photo5.webp";
import photo6 from "@/app/assets/photo6.webp";
import photo8 from "@/app/assets/photo8.webp";
import photo9 from "@/app/assets/photo9.webp";
import { data } from "@/app/metadata";

// Portrait shots only (3:4) so nothing is cropped — the landscape
// room photo is intentionally left out to keep the grid consistent.
const images: { src: StaticImageData; alt: string }[] = [
  { src: photo1, alt: "Fresh haircut styled at Nice Hair Salon" },
  { src: photo2, alt: "Hair colour treatment at Nice Hair Salon" },
  { src: photo3, alt: "Highlights styled at Nice Hair Salon Mississauga" },
  { src: photo4, alt: "Bridal updo by Nice Hair Salon" },
  { src: photo5, alt: "Long layered cut by Nice Hair Salon" },
  { src: photo6, alt: "Hair styling at Nice Hair Salon" },
  { src: photo8, alt: "Hair finish at Nice Hair Salon" },
  { src: photo9, alt: "Styled look at Nice Hair Salon Mississauga" },
];

export default function Gallery() {
  return (
    <section aria-label="Gallery" className="w-full flex flex-col gap-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3">
        {images.map((img, i) => (
          <div key={i} className="aspect-[3/4] relative overflow-hidden bg-stone-100">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              quality={72}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <a
        href={data.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="eyebrow self-center hover:text-stone-900 transition-colors"
      >
        More on Instagram
      </a>
    </section>
  );
}
