import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Suspense } from "react";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kymou asbl",
  description: "Kymou web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[--color1] ">
      <body className={`${inter.className} w-[100dvw] min-h-[100vh] h-full flex flex-col relative items-center `}>
        <Navbar/>
        <Suspense fallback={<p>loading</p>}>
          {children}
        </Suspense>
        <Footer/>
        </body>
    </html>
  );
}
