interface BannerProps {
  phoneNumber: string;
}

export default function Banner({ phoneNumber }: BannerProps) {
  return (
    <div className="bg-stone-900 text-stone-100 text-center text-xs tracking-[0.18em] uppercase py-3 px-4">
      <p>
        Walk-ins welcome OR{" "}
        <a href={`tel:${phoneNumber}`} className="underline underline-offset-4 hover:text-white">
          Call {phoneNumber}
        </a>{" "}
        to book
      </p>
    </div>
  );
}
