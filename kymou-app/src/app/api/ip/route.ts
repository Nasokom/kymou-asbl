

import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded?.split(',')[0] || request.ip || 'Unknown'

  return new Response(JSON.stringify({ ip }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
