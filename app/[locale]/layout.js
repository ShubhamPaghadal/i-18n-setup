import { notFound } from "next/navigation";
 
const supportedLocales =[
  'en', 'fr', 'es', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ko',
  'ar', 'hi', 'bn', 'gu', 'ta', 'te', 'ml', 'mr', 'ur', 'tr',
  'fa', 'pl', 'uk', 'nl', 'sv', 'no', 'fi', 'da', 'cs', 'ro',
  'el', 'vi', 'th', 'id', 'ms', 'he', 'sr', 'hr', 'sk', 'sl',
  'bg', 'lt', 'lv', 'et'
];
const rtlLocales = ["ar", "he"];
 
export async function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}
 
export default function LocaleLayout({ children, params }) {
  const { locale } = params;
 
  if (!supportedLocales.includes(locale)) {
    notFound();
  }
 
  const isRtl = rtlLocales.includes(locale);
  const dir = isRtl ? "rtl" : "ltr";
 
  return (
    <html lang={locale} dir={dir}>
      <body>{children}</body>
    </html>
  );
}