import { NextResponse } from "next/server";

const locales = [
  'en', 'fr', 'es', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ko',
  'ar', 'hi', 'bn', 'gu', 'ta', 'te', 'ml', 'mr', 'ur', 'tr',
  'fa', 'pl', 'uk', 'nl', 'sv', 'no', 'fi', 'da', 'cs', 'ro',
  'el', 'vi', 'th', 'id', 'ms', 'he', 'sr', 'hr', 'sk', 'sl',
  'bg', 'lt', 'lv', 'et'
];

// ✅ List of valid sub-paths per language
const validRoutes = {
  ar: ['/', '/about', '/contact'],
  en: ['/', '/about', '/services'],
 
  // add others as needed
};

function getLocale(request) {
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameLocale) return pathnameLocale;

  const cookieLocale = request.cookies.get("lang")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  return "en"; // fallback
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/locales") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const locale = getLocale(request);

  const hasLang = locales.some(
    (lng) => pathname.startsWith(`/${lng}/`) || pathname === `/${lng}`
  );

  // ✅ Check for invalid subroute
  if (hasLang) {
    const lng = pathname.split('/')[1];
    const subPath = pathname.slice(lng.length + 1) || '/'; // e.g., /ar/a → a

    const isValid = validRoutes[lng]?.includes('/' + subPath) || subPath === '/';
    if (!isValid) {
      const redirectUrl = new URL(`/${lng}`, request.url);
      return NextResponse.redirect(redirectUrl);
    }

    // ✅ set cookie if valid
    const response = NextResponse.next();
    response.cookies.set("i18next", lng, {
      maxAge: 60 * 60 * 24 * 365,
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
    return response;
  }

  // ✅ No language prefix, redirect with detected or cookie language
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  const response = NextResponse.redirect(newUrl);
  response.cookies.set("i18next", locale, {
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: [
    "/((?!_next|api|locales|favicon.ico|.*\\.).*)",
  ],
};
