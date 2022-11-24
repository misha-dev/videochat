import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.url;

  if (url === (process.env.NEXT_PUBLIC_URL as string) + "test") {
    return NextResponse.redirect(new URL("/", url));
  } else {
    NextResponse.next();
  }
}
