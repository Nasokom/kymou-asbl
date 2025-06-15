

//import { NextRequest } from 'next/server'
import { sanityFetch } from "@/sanity/lib/live"
import { SETTINGS_QUERY } from "@/sanity/lib/queries"

export async function GET(request) {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded?.split(',')[0] || request.ip || 'Unknown'
  const {data:devices} = await sanityFetch({query:SETTINGS_QUERY})
  let isStudioAllow = false

  devices.allowStudio.forEach(elt => {
    if(elt.ip === ip && elt.allow == true){
      isStudioAllow = true
    }
  })


  return new Response(JSON.stringify({ isAllow: isStudioAllow,ip }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
