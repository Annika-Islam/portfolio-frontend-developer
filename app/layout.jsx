import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    default: "Annika Akter | Frontend Developer",
    template: "%s | Annika Akter",
  },
  description:
    "Explore the portfolio of Annika Akter, a frontend developer building responsive, polished web experiences with React, Next.js, and modern UI design.",
  applicationName: "Annika Akter Portfolio",
  robots: { index: true, follow: true },
  keywords: [
    "Annika Akter",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Web Development Portfolio",
  ],
  authors: [{ name: "Annika Akter" }],
  openGraph: {
    title: "Annika Akter | Frontend Developer",
    description: "Responsive, thoughtful web experiences built with React and Next.js.",
    siteName: "Annika Akter Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Annika Akter | Frontend Developer",
    description: "Responsive, thoughtful web experiences built with React and Next.js.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0f] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
