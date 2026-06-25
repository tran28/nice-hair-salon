import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Nice Hair Salon — home"
      className="group inline-flex flex-col leading-none"
    >
      <span className="font-display text-2xl md:text-3xl font-light tracking-tight italic">
        Nice Hair
      </span>
      <span className="hidden sm:block font-sans text-[0.65rem] md:text-xs tracking-[0.32em] uppercase text-stone-600 group-hover:text-stone-900 transition-colors mt-1">
        Salon · Mississauga
      </span>
    </Link>
  );
}
