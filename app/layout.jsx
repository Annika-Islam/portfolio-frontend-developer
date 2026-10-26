import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Annika Akter — Frontend Developer",
  description:
    "Personal portfolio of Annika Akter, a Frontend Developer crafting performant, modern web applications with React and Next.js.",
  keywords: ["Frontend Developer", "React", "Next.js", "Portfolio", "Annika Akter"],
  authors: [{ name: "Annika Akter" }],
  openGraph: {
    title: "Annika Akter — Frontend Developer",
    description: "Building performant, modern web apps with React & Next.js.",
    type: "website"
  }
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