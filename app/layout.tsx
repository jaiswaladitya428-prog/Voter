import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "AI-Powered Election Assistant | Empowering Your Vote",
  description: "A comprehensive civic guidance platform helping you navigate the election process with personalized AI assistance.",
  keywords: ["election", "voting", "voter registration", "AI assistant", "civic engagement"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main style={{ minHeight: "100vh", paddingTop: "6rem" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
