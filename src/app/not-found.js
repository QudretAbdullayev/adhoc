import "@/assets/styles/main.scss";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const NotFound = async () => {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>

        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default NotFound