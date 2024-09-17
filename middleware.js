import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Redirect authenticated users away from login or sign-up page
  if (token && (pathname === "/login" || pathname === "/sign-up")) {
    return NextResponse.redirect(new URL("/my-account", req.url));
  }

  // Allow access if the user is authenticated or requesting login/sign-up page
  if (token || pathname === "/login" || pathname === "/sign-up") {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to the login page for protected routes
  if (!token && pathname !== "/login" && pathname !== "/sign-up") {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/my-account", "/my-cart", "/checkout", "/login", "/sign-up"],
};
