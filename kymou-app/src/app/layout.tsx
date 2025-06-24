import "@/app/globals.css";
import Head from 'next/head'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[--bgColor1]">
      <Head>
        <meta name="google-site-verification" content="lHihm2ES16N0zTRUD6lCbnAQS_SrnI_LnrnxI6yrh-o" />
      </Head>
      <body>{children}</body>
    </html>
  );
} 