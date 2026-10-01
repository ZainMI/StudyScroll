import type { Metadata, Viewport } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
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
