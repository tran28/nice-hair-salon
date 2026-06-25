import { data } from "@/app/metadata";
import Gallery from "./Gallery";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-20 mt-28 mb-16 lg:mt-36">
      <Gallery />

      <div className="border-t border-stone-200 pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-stone-500">
        <address className="not-italic leading-relaxed">
          {data.streetAddress}, {data.city} ·{" "}
          <a href={data.tel} className="hover:text-stone-900 transition-colors">{data.phoneNumber}</a>
        </address>
        <div className="flex gap-6 text-xs tracking-[0.24em] uppercase">
          <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors">Instagram</a>
          <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
