import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hacker News",
  description: "Top stories from Hacker News",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f6f6ef] text-sm text-black antialiased`}
      >
        <div className="max-w-3xl mx-auto">
          <header className="bg-[#ff6600] px-2 py-1 flex items-center gap-2">
            <span className="font-bold text-white text-base border border-white px-1 leading-tight">
              Y
            </span>
            <nav className="flex flex-wrap gap-x-3 gap-y-1 text-white text-xs font-medium">
              <a href="/" className="font-bold hover:underline">
                Hacker News
              </a>
              <span>|</span>
              <a href="/" className="hover:underline">new</a>
              <a href="/" className="hover:underline">past</a>
              <a href="/" className="hover:underline">comments</a>
              <a href="/" className="hover:underline">ask</a>
              <a href="/" className="hover:underline">show</a>
              <a href="/" className="hover:underline">jobs</a>
            </nav>
          </header>
          {children}
          <footer className="text-center text-[#828282] text-xs py-4 border-t border-[#ff6600] mt-4">
            <a href="https://news.ycombinator.com" className="hover:underline">
              Hacker News
            </a>{" "}
            clone — powered by the{" "}
            <a
              href="https://github.com/HackerNews/API"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              official HN API
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
