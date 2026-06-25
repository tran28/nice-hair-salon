import Link from "next/link";
import Logo from "./Logo";
import { data } from "@/app/metadata";

export default function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-20 bg-cream/80 backdrop-blur-md border-b border-stone-200/60"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12 flex justify-between items-center py-5 md:py-7">
        <Logo />
        <ul className="flex flex-row items-center gap-4 md:gap-10 text-[0.7rem] md:text-xs tracking-[0.18em] md:tracking-[0.28em] uppercase">
          <li>
            <Link href="/services" className="text-stone-700 hover:text-stone-900 transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/store" className="text-stone-700 hover:text-stone-900 transition-colors">
              Visit
            </Link>
          </li>
          <li>
            <a
              href={data.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-stone-900 text-stone-50 px-3.5 py-2 md:px-5 md:py-3 transition-all duration-300 hover:bg-stone-700 hover:-translate-y-px hover:shadow-lg hover:shadow-stone-900/10"
            >
              Book
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
