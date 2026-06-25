interface BannerProps {
  phoneNumber: string;
  bookingUrl: string;
}

export default function Banner({ phoneNumber, bookingUrl }: BannerProps) {
  return (
    <div className="bg-stone-900 text-stone-300 text-center text-[0.7rem] tracking-[0.22em] uppercase py-3 px-4">
      <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-100 underline underline-offset-4 decoration-stone-500 hover:decoration-stone-100 transition-colors"
        >
          Book online
        </a>
        <span aria-hidden="true" className="text-stone-600">·</span>
        <a href={`tel:${phoneNumber}`} className="hover:text-stone-100 transition-colors">
          Call {phoneNumber}
        </a>
        <span aria-hidden="true" className="text-stone-600">·</span>
        <span>Walk-ins welcome</span>
      </p>
    </div>
  );
}
