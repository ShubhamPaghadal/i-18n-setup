"use client";
 
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import "@/lib/i18n";
import LanguageSwitcher from "../../components/language.jsx";
 
export default function Page() {
  const { t, i18n } = useTranslation("translation");
  const { locale } = useParams();
  const [ready, setReady] = useState(false);
 
  useEffect(() => {
    const load = async () => {
      await i18n.changeLanguage(locale);
      await i18n.loadNamespaces("translation");
      setReady(true);
    };

    load();
  }, [locale]);
  console.log('Language', t("BANNER_TITLE"))
 
  if (!ready) return <p>Loading translation...</p>;
 
  return (
    <div className="text-center mt-10">
      <h1>{t("BANNER_TITLE")}</h1>
      <LanguageSwitcher/>
    </div>
  );
}