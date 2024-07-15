import { Header } from '@/components';
import { cn } from '@/utils';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'helpSupport' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const UserTerms = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'helpSupport' });

  return (
    <div className="flex min-h-dvh flex-col items-center">
      <Header hasBack title={t('userTerms.title')} />

      <div className={cn('text-1425 flex flex-col gap-5 p-9 text-justify')}>
        <p>{t('userTerms.content1')}</p>
        <p>{t('userTerms.content2')}</p>
        <p>{t('userTerms.content3')}</p>
        <p>{t('userTerms.content4')}</p>
        <p>{t('userTerms.content5')}</p>
        <p>{t('userTerms.content6')}</p>
        <p>{t('userTerms.content7')}</p>
        <p>{t('userTerms.content8')}</p>
        <p>{t('userTerms.content9')}</p>
        <p>{t('userTerms.content10')}</p>
        <p>{t('userTerms.content11')}</p>
      </div>
    </div>
  );
};

export default UserTerms;
