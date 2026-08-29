import type { Metadata } from "next";
import { Space_Grotesk, Kalam, Caveat } from "next/font/google";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail";
import Loader from "@/components/Loader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"],
});

const kalam = Kalam({
  subsets: ["latin"],
  variable: "--font-hand",
  weight: ["300", "400", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand-bold",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kashish Verma — Full-Stack Developer",
  description: "Portfolio of Kashish Verma, full-stack MERN developer and CS student.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.setAttribute('data-theme', localStorage.getItem('kv-theme') || 'dark');}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${kalam.variable} ${caveat.variable} font-body text-ink antialiased`}
      >
        <Loader />
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
