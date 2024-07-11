import { Header } from '@/components';
import { cn } from '@/utils';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'helpSupport' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const PrivacyPolicy = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'helpSupport' });

  return (
    <div className="flex min-h-dvh flex-col items-center">
      <Header hasBack title={t('privacyPolicy.title')} />

      <div className={cn('text-1425 flex flex-col gap-5 p-9 text-justify')}>
        <p>{t('privacyPolicy.content1')}</p>
        <p>{t('privacyPolicy.content2')}</p>
        <p>{t('privacyPolicy.content3')}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
