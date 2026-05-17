import type { Metadata } from "next";
import Image from "next/image";
import store_photo from "@/app/assets/store-photo.webp";
import { data } from "@/app/metadata";

export const metadata: Metadata = {
  title: "Visit Us",
  description: `Nice Hair Salon is located at ${data.location}. Open ${data.hoursReadable}. Walk-ins welcome.`,
  alternates: { canonical: "/store" },
};

export default function Store() {
  return (
    <section className="pt-12 md:pt-20 pb-16">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <p className="text-[0.7rem] tracking-[0.32em] uppercase text-stone-500 mb-4">
              Visit
            </p>
            <h1 className="font-display text-5xl md:text-6xl tracking-tight">
              Come say hello.
            </h1>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[0.7rem] tracking-[0.32em] uppercase text-stone-500">
              Address
            </p>
            <address className="not-italic text-lg leading-relaxed">
              {data.streetAddress}
              <br />
              {data.city}, {data.region} {data.postalCode}
            </address>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[0.7rem] tracking-[0.32em] uppercase text-stone-500">
              Hours
            </p>
            <p className="text-lg">{data.hoursReadable}</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[0.7rem] tracking-[0.32em] uppercase text-stone-500">
              Phone
            </p>
            <a href={data.tel} className="text-lg underline underline-offset-4 hover:text-stone-500">
              {data.phoneNumber}
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Image
            src={store_photo}
            alt={`Storefront of ${data.title} on ${data.streetAddress}`}
            placeholder="blur"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
