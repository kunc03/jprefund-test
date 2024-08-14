import '@/styles/global.css';

import { Noto_Sans_JP as notoSansJp } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { cn } from '@/utils';
import { Transition } from '@/components';

const inter = notoSansJp({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'JPRefund',
  description: 'JPRefund Website',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  userScalable: false,
  shrinkToFit: 'no',
};

const RootLayout = async ({ children, params }) => {
  const { locale } = params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          'min-h-dvh bg-white md:bg-gray-400 antialiased flex flex-col items-center',
          inter.variable,
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className="relative min-h-dvh w-full max-w-md overflow-hidden bg-white-dark">
            <Transition>{children}</Transition>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
