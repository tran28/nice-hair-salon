import Link from "next/link";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Nice Hair Salon — home"
      className="group inline-block"
    >
      {/* Navy sign panel — reproduces the storefront sign */}
      <span
        className={`inline-flex flex-col items-start bg-brand-navy rounded-sm shadow-sm leading-none transition-all duration-300 ${
          compact ? "px-1.5 py-0.5" : "px-3 py-2"
        }`}
      >
        <span className={`flex items-baseline transition-all duration-300 ${compact ? "gap-1" : "gap-1.5"}`}>
          {/* Red "Nice Hair" with a white outline, like the painted lettering */}
          <span
            className={`font-sans font-extrabold tracking-tight text-brand-red [paint-order:stroke_fill] [text-shadow:0_1px_1.5px_rgba(0,0,0,0.35)] transition-all duration-300 ${
              compact
                ? "text-sm md:text-base [-webkit-text-stroke:1px_#f5f5f4]"
                : "text-2xl md:text-3xl [-webkit-text-stroke:1.5px_#f5f5f4]"
            }`}
          >
            Nice Hair
          </span>
          {/* Stylized "Salon" script beside the wordmark, like the sign */}
          <span
            className={`font-display italic font-normal text-stone-100 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)] transition-all duration-300 ${
              compact ? "text-[0.6rem] md:text-[0.7rem]" : "text-sm md:text-base"
            }`}
          >
            Salon
          </span>
        </span>
        {/* White underline from the sign */}
        <span
          aria-hidden="true"
          className={`h-px w-full bg-stone-100/90 transition-all duration-300 ${
            compact ? "mt-0.5" : "mt-1"
          }`}
        />
      </span>
    </Link>
  );
}
