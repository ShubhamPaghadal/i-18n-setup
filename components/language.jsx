'use client';
import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const path = usePathname();

  const changeLanguage = (lng) => {
    const newPath = '/' + lng + path.slice(3); // assumes /en/, /fr/, etc.
    router.push(newPath);
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() =>changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('fr')}>FR</button>
      <button onClick={() => changeLanguage('ar')}>AR</button>
      <button onClick={() => changeLanguage('hi')}>HI</button>
    </div>
  );
};

export default LanguageSwitcher;