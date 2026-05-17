import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { data } from "@/app/metadata";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(data.siteUrl),
  title: {
    default: `${data.title} — Mississauga Hair Salon`,
    template: `%s — ${data.title}`,
  },
  description: data.description,
  keywords: [
    "hair salon Mississauga",
    "haircut Mississauga",
    "hair colour Mississauga",
    "perm Mississauga",
    "balayage Mississauga",
    "bridal hair Mississauga",
    "Cawthra Rd salon",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: data.siteUrl,
    siteName: data.title,
    title: `${data.title} — Mississauga Hair Salon`,
    description: data.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${data.title} — Mississauga Hair Salon`,
    description: data.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: data.title,
  description: data.shortDescription,
  url: data.siteUrl,
  telephone: data.phoneNumber,
  image: `${data.siteUrl}/icon.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: data.streetAddress,
    addressLocality: data.city,
    addressRegion: data.region,
    postalCode: data.postalCode,
    addressCountry: data.country,
  },
  openingHours: data.hours,
  sameAs: [data.facebook, data.instagram],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-stone-50 text-stone-900 font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Banner phoneNumber={data.phoneNumber} />
        <Nav />
        <div className="mx-auto w-full max-w-[88rem] px-6 md:px-10 lg:px-14">
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
