import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "StudyScroll — A better kind of rabbit hole",
  description: "Turn your course material into a daily learning feed.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
