"use client";

import { useCallback } from "react";
import { useLanguageStore } from "../context/LanguageContext";
import en from "../locales/en.json";
import uz from "../locales/uz.json";

type TranslationKeys = typeof en;

const translations: Record<string, TranslationKeys> = {
  en,
  uz,
};

export function useTranslation() {
  const { language } = useLanguageStore();

  const t = useCallback(
    (key: string): any => {
      const keys = key.split(".");
      let value: any = translations[language] || translations["en"];

      for (const k of keys) {
        value = value?.[k];
      }

      return value || key;
    },
    [language]
  );

  return { t, language };
}
