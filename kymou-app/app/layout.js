import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/global/Navbar";
import { Suspense } from "react";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
import { getBlogPosts } from "@/utils/actions";


export const metadata = {
  title: "Kymou asbl",
  description: "Site web de l'association Kymou-Asbl, decouvrez les projets de l'assoctaion",
//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: false,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     }
// }
}

export default async function RootLayout({ children }) {

  const blogPost = await getBlogPosts()

  return (
    <html lang="en" className="bg-[--color1]">
      <Head>
      <meta name="google-site-verification" content="4VHbOuvyxkMPrmqoVd5xPWHVRe_y6d0khtbrCcdiCTY" />
      </Head>
      <body>
          {children}
        </body>
    </html>
  );
}
