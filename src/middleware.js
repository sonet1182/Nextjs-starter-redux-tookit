import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  if (1 == 1) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
    matcher: ["/profile/:path*"]
}

