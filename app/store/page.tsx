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
    <section className="pt-16 md:pt-20 lg:pt-24 pb-20">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 flex flex-col gap-10">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em]">
            Come say{" "}
            <em className="italic font-normal text-stone-500">hello.</em>
          </h1>

          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <p className="eyebrow">Address</p>
              <address className="not-italic text-lg leading-relaxed">
                {data.streetAddress}
                <br />
                {data.city}, {data.region} {data.postalCode}
              </address>
            </div>

            <div className="flex flex-col gap-2">
              <p className="eyebrow">Hours</p>
              <p className="text-lg">{data.hoursReadable}</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="eyebrow">Phone</p>
              <a href={data.tel} className="text-lg hover:text-stone-500 transition-colors">
                {data.phoneNumber}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={data.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid self-start"
            >
              Book online
            </a>
            <p className="text-sm text-stone-500">
              Or call ahead — walk-ins always welcome.
            </p>
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
