import Image from "next/image";
import hero_photo from "@/app/assets/hero-photo.webp";
import { data } from "@/app/metadata";

export default function Home() {
  return (
    <section className="pt-10 md:pt-16 lg:pt-24 pb-16">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <p className="text-[0.7rem] tracking-[0.32em] uppercase text-stone-500">
            {data.streetAddress}
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            Cuts. Colour. <em className="italic font-light">Care.</em>
          </h1>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-sm text-sm pt-2">
            <dt className="text-[0.65rem] tracking-[0.32em] uppercase text-stone-500">Hours</dt>
            <dd className="text-stone-800">Daily, 9–8</dd>
            <dt className="text-[0.65rem] tracking-[0.32em] uppercase text-stone-500">For</dt>
            <dd className="text-stone-800">Men · Women · Kids</dd>
            <dt className="text-[0.65rem] tracking-[0.32em] uppercase text-stone-500">Booking</dt>
            <dd className="text-stone-800">Walk-in or by phone</dd>
          </dl>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={data.tel}
              className="inline-flex items-center bg-stone-900 text-stone-50 text-xs tracking-[0.24em] uppercase px-6 py-4 hover:bg-stone-700 transition-colors"
            >
              Book by phone
            </a>
            <a
              href="/services"
              className="inline-flex items-center border border-stone-900 text-xs tracking-[0.24em] uppercase px-6 py-4 hover:bg-stone-900 hover:text-stone-50 transition-colors"
            >
              View services
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <Image
            src={hero_photo}
            alt="Interior of Nice Hair Salon in Mississauga"
            priority
            placeholder="blur"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
