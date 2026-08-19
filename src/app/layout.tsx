import type { Metadata } from "next";
import { Outfit, Inter, Fira_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-fira-sans",
});

export const metadata: Metadata = {
  title: "Iceback",
  description: "Get cashback on your purchases & turn it into climate impact.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${firaSans.variable}`}>
      <body className="font-sans relative min-h-screen">
        {/* Background glow components */}
        <div className="ambient-glow glow-1 top-0 left-[10%] w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(0,242,254,0.08)_0%,rgba(0,0,0,0)_70%)]"></div>
        <div className="ambient-glow glow-2 top-[35%] right-[5%] w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(79,172,254,0.08)_0%,rgba(0,0,0,0)_70%)]"></div>
        <div className="ambient-glow glow-3 top-[75%] left-[5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,230,118,0.06)_0%,rgba(0,0,0,0)_70%)]"></div>
        {children}
      </body>
    </html>
  );
}
