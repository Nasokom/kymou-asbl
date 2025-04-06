import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kymou asbl",
  description: "Kymou web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#eceddc]">
      <body className={inter.className}>
        <Navbar/>
        <Suspense fallback={<p>loading</p>}>
          {children}
        </Suspense>
        </body>
    </html>
  );
}
