import { sanityFetch } from "@/sanity/lib/live"
import { SETTINGS_QUERY } from "@/sanity/lib/queries"
//import { ipAddress } from '@vercel/functions'

export async function GET(request) {
  try {
    const forwarded = request.headers.get('x-forwarded-for')
<<<<<<< HEAD
    //const x = ipAddress(request)
    // const { geo, ip } = await request
    const ip = forwarded?.split(',')[0].trim() || 'Unknown'
=======
      const ip = ipAddress(req)
    //const ip = forwarded?.split(',')[0].trim() || 'Unknown'
>>>>>>> parent of e67b3d7 (Revert "Update route.js")
    const { data: devices } = await sanityFetch({ query: SETTINGS_QUERY })

    let isStudioAllow = false

    if (Array.isArray(devices?.allowStudio)) {
      for (const elt of devices.allowStudio) {
        if (elt.ip === ip && elt.allow === true) {
          isStudioAllow = true
          break
        }
      }
    }

<<<<<<< HEAD
    return new Response(JSON.stringify({ isAllow: isStudioAllow, ip}), {
=======
    return new Response(JSON.stringify({ isAllow: isStudioAllow, ip ,geo}), {
>>>>>>> parent of e67b3d7 (Revert "Update route.js")
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error("Error in /api/ip:", error)
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
