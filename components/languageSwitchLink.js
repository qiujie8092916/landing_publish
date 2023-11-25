import languageDetector from "../lib/languageDetector";
import i18nextConfig from "../next-i18next.config";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

export const LanguageSwitchLink = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const { locales, defaultLocale } = i18nextConfig.i18n;

  const currentLanguage = i18n.language;

  const pName = router.query.locale || currentLanguage || defaultLocale;

  const to =
    locales.indexOf(pName) + 1 < locales.length
      ? locales[locales.indexOf(pName) + 1]
      : locales[0];

  return (
    <Link href={to} onClick={() => languageDetector.cache(to)}>
      <button>🌐{' '}{pName.toUpperCase()}</button>
    </Link>
  );
};
