import { NextResponse } from "next/server"

// The flashcards page is a static file in /public, so env values cannot be
// inlined at build time and have to be fetched at runtime instead.
export const dynamic = "force-dynamic"

export function GET() {
  const apiBaseUrl = (process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || "").trim()

  return NextResponse.json(
    { apiBaseUrl: apiBaseUrl.replace(/\/+$/, "") },
    { headers: { "Cache-Control": "no-store" } },
  )
}
