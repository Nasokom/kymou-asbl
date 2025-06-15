import "@/app/globals.css";
import StudioBtn from '@/components/StudioBtn'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[--color1] dark">
      <body>{children}</body>
    </html>
  );
}