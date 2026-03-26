import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/scrolToTop";
import AnnouncementBar from "@/components/ui/announcement";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Doctor Clinic Jaipur",
  description: "Doctor Clinic Jaipur",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" scroll = "smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnnouncementBar />
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
