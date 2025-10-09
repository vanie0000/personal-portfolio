import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shraavani Jha | Portfolio",
  description: "Personal portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      {/* 👈 Forces dark mode */}
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
