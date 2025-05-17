import "@/app/globals.css";

import { SanityLive } from '@/sanity/lib/live'

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-[100dvw] min-h-[100vh] h-full flex flex-col relative items-center ">
      {children}
      <SanityLive />
    </div>
  )
}