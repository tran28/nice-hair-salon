import Image from "next/image";
import hero_photo from "@/app/assets/hero-photo.webp";
import { data } from "@/app/metadata";

export default function Home() {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24 pb-20">
      <div className="max-w-4xl flex flex-col gap-7">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em]">
          Cuts. Colour.{" "}
          <em className="italic font-normal text-stone-500">Care.</em>
        </h1>
        <div className="flex flex-wrap gap-3">
          <a
            href={data.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid"
          >
            Book online
          </a>
          <a href={data.tel} className="btn-ghost">
            Book by phone
          </a>
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <Image
          src={hero_photo}
          alt="Interior of Nice Hair Salon in Mississauga"
          priority
          placeholder="blur"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="mt-8 flex flex-col gap-4 max-w-md md:flex-row md:max-w-2xl md:items-baseline md:justify-between md:gap-12">
        <p className="font-display text-xl md:text-2xl leading-tight tracking-[-0.01em] text-stone-800">
          A Mississauga hair salon
          <span className="text-stone-400"> — for everyone.</span>
        </p>
        <dl className="flex flex-col gap-1.5 text-sm shrink-0">
          <div className="flex gap-3">
            <dt className="eyebrow w-14 pt-px">Cuts</dt>
            <dd className="text-stone-700">Men · Women · Kids</dd>
          </div>
          <div className="flex gap-3">
            <dt className="eyebrow w-14 pt-px">Hours</dt>
            <dd className="text-stone-700">9 AM to 8 PM</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
