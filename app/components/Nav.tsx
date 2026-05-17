import Link from "next/link";
import Logo from "./Logo";

export default function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-20 bg-stone-50/85 backdrop-blur-md border-b border-stone-200/70"
    >
      <div className="mx-auto w-full max-w-[88rem] px-6 md:px-10 lg:px-14 flex justify-between items-center py-5 md:py-7">
        <Logo />
        <ul className="flex flex-row gap-6 md:gap-10 text-[0.7rem] md:text-xs tracking-[0.28em] uppercase">
          <li>
            <Link href="/services" className="hover:text-stone-500 transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/store" className="hover:text-stone-500 transition-colors">
              Visit
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
