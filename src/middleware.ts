import { NextRequest, NextResponse } from "next/server";
import { AUTH_TOKEN } from "./service/axios/httpClient";

export async function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const token = cookies.get(AUTH_TOKEN)?.value;
  // const isPublicRoute =
  //   PUBLIC_ROUTE.find((route) =>
  //     nextUrl.pathname.startsWith(`/${locale}/${route}`)
  //   ) ||
  //   !PRIVATE_USER_ROUTE.find((route) => nextUrl.pathname.includes(`${route}`));
  // if (!isPublicRoute && !token) {
  //   return NextResponse.redirect(new URL(`/${locale}/${Login}`, nextUrl));
  // }
  // const isLogin = nextUrl.pathname.startsWith(`/${locale}/${Login}`);
  if (token) {
    return NextResponse.redirect(new URL(`/user-management`, nextUrl));
  } else {
    return NextResponse.redirect(new URL(`/login`, nextUrl));
  }
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/"],
};
