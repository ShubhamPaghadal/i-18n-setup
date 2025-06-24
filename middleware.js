import { NextResponse } from "next/server";
 
const locales = [
  'en', 'fr', 'es', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ko',
  'ar', 'hi', 'bn', 'gu', 'ta', 'te', 'ml', 'mr', 'ur', 'tr',
  'fa', 'pl', 'uk', 'nl', 'sv', 'no', 'fi', 'da', 'cs', 'ro',
  'el', 'vi', 'th', 'id', 'ms', 'he', 'sr', 'hr', 'sk', 'sl',
  'bg', 'lt', 'lv', 'et'
];
// const defaultLocale = "en";
 
function getLocale(request) {
  // Check if locale is in URL
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
 
  if (pathnameLocale) return pathnameLocale;
 
  // Check cookie first
  const cookieLocale = request.cookies.get("i18next")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }
 
  // // Negotiate based on Accept-Language header
  // const acceptLanguage = request.headers.get("accept-language");
  // if (acceptLanguage) {
  //   try {
  //     const headers = { "accept-language": acceptLanguage };
  //   } catch (error) {
  //     console.warn("Error matching locale:", error);
  //   }
  // }
 
  // return defaultLocale;
}
 
export function middleware(request) {
  // console.log("🌍 Middleware called for:", request.nextUrl.pathname);
 
  const pathname = request.nextUrl.pathname;
 
  // Skip middleware for specific paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/locales") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }
 
  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
 
  if (pathnameHasLocale) {
    // Extract locale from pathname and set cookie
    const locale = pathname.split("/")[1];
    const response = NextResponse.next();
    response.cookies.set("i18next", locale, {
      maxAge: 60 * 60 * 24 * 365,
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
    return response;
  }
 
  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  // console.log(`🔄 Redirecting to: ${newUrl.pathname}`);
 
  const response = NextResponse.redirect(newUrl);
  response.cookies.set("i18next", locale, {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
 
  return response;
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc.)
    "/((?!_next|api|locales|favicon.ico|.*\\.).*)",
  ],
};