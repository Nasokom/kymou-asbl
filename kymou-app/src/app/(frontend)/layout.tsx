import "@/app/globals.css";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { SanityLive } from '@/sanity/lib/live'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Suspense } from 'react';
import { sanityFetch } from "@/sanity/lib/live";
import {BLOG_LENGTH_QUERY,SETTINGS_QUERY} from '@/sanity/lib/queries'
 import StudioBtn from "@/components/StudioBtn";


export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

      const baseUrl = process.env.VERCEL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

  const {data:data} = await sanityFetch({query:BLOG_LENGTH_QUERY})
let isStudioAllowed = false;

//Allowing studio link for website administrator
try {
  const d = await fetch(baseUrl + '/api/ip');
  if (d.ok) {
    const ipData = await d.json();
    isStudioAllowed = await ipData?.isAllow ?? false;
  } else {
    console.warn('/api/ip responded with status:', d.status);
  }
} catch (e) {
  console.error('Failed to fetch /api/ip:', e);
}


  return (
    <div className="w-[100dvw] min-h-[100vh] flex flex-col relative items-center ">
      
       <Navbar blog={data}/>
       <p>{JSON.stringify(isStudioAllowed)}</p>
       {/* Maybe change this shitty loading ? */}
       <Suspense fallback={<p>ewwf</p>}>
          {children}
       </Suspense>
      <Footer blog={data}/>
      <SanityLive />
      {(await draftMode()).isEnabled ?(
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      ) :
      await isStudioAllowed ? <StudioBtn/> : null
      }



    </div>
  )
}