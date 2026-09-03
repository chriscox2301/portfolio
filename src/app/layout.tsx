import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "@/styles/classical.css";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const description =
  "Front-end developer with a backend habit — HBO-ICT student at Zuyd Hogeschool in Heerlen, building interfaces people can actually use.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Chris Cox — Front-end developer",
  description,
  openGraph: {
    title: "Chris Cox — Front-end developer",
    description,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${lora.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
