import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.url;
  console.log(url);

  if (url === (process.env.NEXT_PUBLIC_URL as string)) {
    return NextResponse.redirect(new URL("/videochat", url));
  } else {
    NextResponse.next();
  }
}
