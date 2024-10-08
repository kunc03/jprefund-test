import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import appConfig from '@/app.config';

const config = async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!appConfig.i18n.locales.includes(locale)) notFound();

  return {
    messages: (await import(`./locales/${locale}.json`)).default,
  };
};

export default getRequestConfig(config);
