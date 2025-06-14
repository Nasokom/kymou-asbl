import "@/app/globals.css";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { SanityLive } from '@/sanity/lib/live'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Suspense } from 'react';
import { sanityFetch } from "@/sanity/lib/live";
import {BLOG_LENGTH_QUERY} from '@/sanity/lib/queries'

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const {data:data} = await sanityFetch({query:BLOG_LENGTH_QUERY})

  return (
    <div className="w-[100dvw] min-h-[100vh] flex flex-col relative items-center ">
       <Navbar blog={data}/>
       <Suspense fallback={<p>ewwf</p>}>
          {children}
       </Suspense>
      <Footer blog={data}/>
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </div>
  )
}