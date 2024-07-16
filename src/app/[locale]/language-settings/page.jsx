import { Header } from '@/components';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import { SelectLanguage } from './_components/select-language';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'languageSettings' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const PrivacyPolicy = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'languageSettings' });

  return (
    <div className="flex min-h-dvh flex-col items-center bg-white">
      <Header hasBack title={t('title')} />

      <SelectLanguage />
    </div>
  );
};

export default PrivacyPolicy;
