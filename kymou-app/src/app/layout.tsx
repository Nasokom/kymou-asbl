import "@/app/globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[--bgColor1]">
      <head>
        <meta name="google-site-verification" content="lHihm2ES16N0zTRUD6lCbnAQS_SrnI_LnrnxI6yrh-o" />
      </head>
      <body>{children}</body>
    </html>
  );
} 