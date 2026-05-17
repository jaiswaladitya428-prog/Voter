import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AIAssistantChat from "@/components/AIAssistantChat";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Election Assistance & Voter Education",
  description: "AI-powered voter education and election assistance platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">
        <nav className="bg-blue-800 text-white p-4 shadow-md sticky top-0 z-40">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <a href="/" className="font-bold text-xl flex items-center gap-2">
              <span className="text-2xl">🗳️</span> VoterAssist
            </a>
            <div className="flex items-center gap-6 text-sm font-medium">
              <a href="/about" className="hover:text-blue-200 transition-colors">About</a>
              <a href="/voting-guide" className="hover:text-blue-200 transition-colors">Guide</a>
              <a href="/voter-id" className="hover:text-blue-200 transition-colors">Voter ID</a>
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
        <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8">
          {children}
        </main>
        <AIAssistantChat />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'hi,bn,ta,te,mr,gu,kn,pa',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `
          }}
        />
        <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async />
      </body>
    </html>
  );
}
