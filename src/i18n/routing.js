import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'az', 'ru'],

  defaultLocale: 'az',
  localePrefix: 'as-needed',
  localeDetection: false
});