import { Noto_Sans_JP } from 'next/font/google';
import '@/styles/global.css';
import { cn } from '@/utils/cn';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const RootLayout = async ({ children, params }) => {
  const locale = params.locale;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
          'min-h-dvh bg-white/30 antialiased flex flex-col items-center',
          inter.className,
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className="min-h-dvh w-full relative max-w-md overflow-hidden bg-white">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
