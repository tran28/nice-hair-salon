import type { Metadata } from "next";

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
    <section className="pt-12 md:pt-20 pb-16 max-w-3xl">
      <p className="text-[0.7rem] tracking-[0.32em] uppercase text-stone-500 mb-4">
        Menu
      </p>
      <h1 className="font-display text-5xl md:text-6xl tracking-tight mb-3">
        Services
      </h1>
      <p className="text-stone-600 mb-12 md:mb-16 max-w-xl leading-relaxed">
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
              <span className="font-display text-xl md:text-2xl tracking-tight">
                {s.name}
              </span>
              {s.subtitle && (
                <span className="block text-sm text-stone-500 italic mt-1">
                  {s.subtitle}
                </span>
              )}
            </dt>
            <dd className="font-sans text-sm md:text-base text-stone-700 tabular-nums whitespace-nowrap">
              {s.price}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
