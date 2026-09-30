import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "@/styles/classical.css";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "404 — Chris Cox",
};

export default function GlobalNotFound() {
  return (
    <html lang="nl" className={`${cormorantGaramond.variable} ${lora.variable}`}>
      <body>
        <main className="shell" style={{ paddingTop: 96, textAlign: "center" }}>
          <h1 style={{ fontWeight: 400, fontSize: 54, margin: 0 }}>404</h1>
          <p>
            Deze pagina bestaat niet. <Link href="/">Terug naar de homepage</Link>
          </p>
          <p lang="en">
            This page does not exist. <Link href="/en">Back to the homepage</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
