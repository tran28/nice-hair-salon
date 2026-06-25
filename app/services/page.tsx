import type { Metadata } from "next";
import { data } from "@/app/metadata";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Haircuts from $20, perms from $90, colour from $90, highlights from $140, bridal makeup and updos from $55 at Nice Hair Salon in Mississauga.",
  alternates: { canonical: "/services" },
};

const services = [
  { name: "Haircut", price: "$20+" },
  { name: "Perm", subtitle: "Permanent wave", price: "$90+" },
  { name: "Straightening", price: "$150+" },
  { name: "Colour", price: "$90+" },
  { name: "Highlights", price: "$140+" },
  { name: "Shampoo", price: "$15+" },
  { name: "Makeup & Updo", subtitle: "Bridal & special occasion", price: "$55+" },
  { name: "Cosmetic Tattoo", subtitle: "Eyebrows, eyelids, lips", price: "Inquire" },
];

export default function Services() {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24 pb-20 max-w-3xl">
      <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] mb-6">
        For all your needs.
      </h1>
      <p className="text-stone-500 mb-12 md:mb-16 max-w-md leading-relaxed">
        Prices start from the listed amount and may vary by length, density,
        and complexity.
      </p>
      <dl className="divide-y divide-stone-200 border-t border-stone-200">
        {services.map((s) => (
          <div
            key={s.name}
            className="flex justify-between items-baseline gap-6 py-5"
          >
            <dt className="flex-1">
              <span className="font-display text-xl md:text-2xl tracking-[-0.01em]">
                {s.name}
              </span>
              {s.subtitle && (
                <span className="block text-sm text-stone-500 italic mt-1">
                  {s.subtitle}
                </span>
              )}
            </dt>
            <dd className="font-sans text-sm text-stone-600 tabular-nums whitespace-nowrap">
              {s.price}
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-16 md:mt-20 flex flex-col gap-6">
        <p className="font-display text-2xl md:text-3xl tracking-[-0.02em] leading-[1.1] max-w-lg">
          Book your appointment online today.
        </p>
        <a
          href={data.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-solid self-start"
        >
          Book online
        </a>
      </div>
    </section>
  );
}
