import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import { Playfair_Display } from "next/font/google";
import "./components/NavBar.css"; // Import your CSS file for styling
import "./components/Gallery.css"; // Import your CSS file for styling
import BootstrapProvider from "./components/BootstrapProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and bold weights
  variable: "--font-playfair",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Personal Website",
  description: "Welcome to my portfolio and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}>
        <BootstrapProvider>
          <Navbar />
          <main className="p-6">{children}</main>
        </BootstrapProvider>
      </body>
    </html>
  );
}