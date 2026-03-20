import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from "next-intl/server";
import "@/assets/styles/main.scss";
import { fetchData } from '@/utils/httpService';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';
import Toaster from '@/modules/B2BPage/components/Toast/Toast';
import GlobalCursor from '@/components/GlobalCursor/GlobalCursor';

export const viewport = {
  initialScale: 1.0,
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: "no"
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

import PageTransition from '@/modules/PageTransition/PageTransition';
import ConditionalStickyButtons from '@/components/ConditionalStickyButtons/ConditionalStickyButtons';

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);


  // const [socialResult] = await Promise.allSettled([
  //   fetchData("", locale),
  // ]);

  // const socialData = socialResult.status === "fulfilled" ? socialResult.value : null;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <PageTransition />
          <GlobalCursor />
          <Toaster />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <ConditionalStickyButtons />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}