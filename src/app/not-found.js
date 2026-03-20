import "@/assets/styles/main.scss";
import GlobalCursor from "@/components/GlobalCursor/GlobalCursor";
import NotFoundPage from "@/modules/404Page";
import PageTransition from "@/modules/PageTransition/PageTransition";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const NotFound = async () => {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PageTransition />
          <GlobalCursor />
          <NotFoundPage />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default NotFound