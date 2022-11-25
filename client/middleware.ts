import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.url;
  const name = req.cookies._parsed.get("name");
  if (url === (process.env.NEXT_PUBLIC_URL as string) && !name) {
    return NextResponse.redirect(new URL("/register", url));
  } else {
    NextResponse.next();
  }
}
