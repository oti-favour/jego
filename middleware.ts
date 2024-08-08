import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  if (!req.auth) {
    return NextResponse.redirect(new URL("/auth/signin", req.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/investors/:path*",
    // "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
