import PageTransition from "@/components/PageTransition";import "./globals.css";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "WALRUOP | Luxury Fashion & Creative Portfolio",
  description:
    "WALRUOP is a luxury fashion and creative portfolio showcasing editorial work, style, and visual storytelling.",
  keywords: [
    "WALRUOP",
    "fashion",
    "model portfolio",
    "luxury fashion",
    "creative studio"
  ],
  creator: "WALRUOP",
  icons: {
    icon: "/brand/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${serif.className} ${sans.className}`}>
  <PageTransition>
    {children}
  </PageTransition>

  <Footer />
</body>