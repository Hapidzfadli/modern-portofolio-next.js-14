import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A simple API route that returns a status message
export function GET() {
  return NextResponse.json({ status: "success", message: "API is working!" });
}