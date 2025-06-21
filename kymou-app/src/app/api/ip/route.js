import { sanityFetch } from "@/sanity/lib/live"
import { SETTINGS_QUERY } from "@/sanity/lib/queries"

export async function GET(request) {
  try {
    const forwarded = request.headers.get('x-forwarded-for')
    //const x = ipAddress(request)
    // const { geo, ip } = await request
    const ip = forwarded?.split(',')[0].trim() || 'Unknown'
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

    return new Response(JSON.stringify({ isAllow: isStudioAllow, ip}), {
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
