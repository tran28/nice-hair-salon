"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { data } from "@/app/metadata";

const links = [
  { href: "/services", label: "Services" },
  { href: "/store", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Shrink once the user scrolls roughly past the announcement banner.
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape, and lock scroll while it's open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      aria-label="Primary"
      className={`sticky top-0 z-30 border-b transition-all duration-300 ${
        scrolled || open
          ? "bg-cream/95 backdrop-blur-lg border-stone-300/80 shadow-md shadow-stone-900/[0.04]"
          : "bg-cream/75 backdrop-blur-md border-stone-200/70"
      }`}
    >
      <div
        className={`mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "py-2" : "py-6 md:py-8"
        }`}
      >
        <Logo compact={scrolled} />

        {/* Desktop nav */}
        <div className="hidden md:flex flex-row items-center gap-8">
          <div className="flex items-center gap-7 text-[0.7rem] font-medium tracking-[0.2em] uppercase">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link text-stone-500 hover:text-stone-900 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <span aria-hidden="true" className="h-4 w-px bg-stone-300" />
          <a
            href={data.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2 bg-brand-navy text-stone-50 text-[0.7rem] font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:bg-brand-navy/90 ${
              scrolled ? "px-5 py-2.5" : "px-6 py-3"
            }`}
          >
            Book
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-red transition-transform duration-300 group-hover:scale-125" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden relative h-6 w-7 flex flex-col justify-center items-end gap-[5px]"
        >
          <span
            className={`block h-px bg-stone-900 transition-all duration-300 ${
              open ? "w-6 translate-y-[6px] rotate-45" : "w-6"
            }`}
          />
          <span
            className={`block h-px bg-stone-900 transition-all duration-300 ${
              open ? "opacity-0" : "w-4"
            }`}
          />
          <span
            className={`block h-px bg-stone-900 transition-all duration-300 ${
              open ? "w-6 -translate-y-[6px] -rotate-45" : "w-5"
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-8 pt-3">
          <p className="eyebrow mb-4">Menu</p>
          <ul className="flex flex-col border-t border-stone-200/70">
            {links.map((l, i) => (
              <li key={l.href} className="border-b border-stone-200/70">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
                  className={`flex items-baseline justify-between py-5 font-display text-3xl tracking-tight text-ink hover:text-stone-500 transition-all duration-300 ${
                    open ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
                  }`}
                >
                  {l.label}
                  <span className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-stone-400">
                    0{i + 1}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={data.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${100 + links.length * 60}ms` : "0ms" }}
            className={`mt-6 flex items-center justify-center gap-2 bg-brand-navy text-stone-50 text-xs tracking-[0.24em] uppercase px-6 py-4 hover:bg-brand-navy/90 transition-all duration-300 ${
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            Book online
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-red" />
          </a>
        </div>
      </div>
    </nav>
  );
}
