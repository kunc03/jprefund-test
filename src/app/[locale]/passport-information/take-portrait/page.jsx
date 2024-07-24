import React from 'react';
import { Heading } from '@/components';
import { TakePortrait } from '../_components/take-portrait-scan';
import { ButtonCamera } from '../_components/button-camera';
import { getTranslations } from 'next-intl/server';
import { cn } from '@/utils';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'passportInformation' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const TakePortraitView = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'passportInformation' });

  return (
    <div className="relative min-h-dvh">
      <div className="absolute inset-x-0 top-0 z-20 flex h-dvh flex-col items-center justify-between">
        <Heading className="pt-9 text-center text-1822 font-medium text-white">
          {t('takePortrait')}
        </Heading>

        <div
          className={cn(
            'relative flex w-full flex-col items-center justify-center px-7 py-5 mb-5',
          )}
        >
          <Heading
            className={cn(
              'w-full px-2 text-center text-1422 font-medium text-white',
            )}
          >
            {t('takePortraitInstruction')}
          </Heading>
          <ButtonCamera form="face" />
        </div>
      </div>
      <TakePortrait />
    </div>
  );
};

export default TakePortraitView;
