import { NextRequest, NextResponse } from "next/server"
// @ts-ignore
export const GET = (req: NextRequest) => {
  return NextResponse.json({ status: "ok" })
}
