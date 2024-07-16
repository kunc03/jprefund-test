import { Header } from '@/components';
import { cn } from '@/utils';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'userTerms' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const UserTerms = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'userTerms' });

  return (
    <div className="flex min-h-dvh flex-col items-center">
      <Header hasBack title={t('title')} />

      <div className={cn('text-1425 flex flex-col gap-5 p-9 text-justify')}>
        <p>{t('content1')}</p>
        <p>{t('content2')}</p>
        <p>{t('content3')}</p>
        <p>{t('content4')}</p>
        <p>{t('content5')}</p>
        <p>{t('content6')}</p>
        <p>{t('content7')}</p>
        <p>{t('content8')}</p>
        <p>{t('content9')}</p>
        <p>{t('content10')}</p>
        <p>{t('content11')}</p>
      </div>
    </div>
  );
};

export default UserTerms;
