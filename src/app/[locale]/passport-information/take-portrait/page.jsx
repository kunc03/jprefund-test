import React from 'react';
import { Heading } from '@/components';
import { TakePortrait } from '../_components/take-portrait-scan';
import { ButtonCamera } from '../_components/button-camera';
import { getTranslations } from 'next-intl/server';

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

        <div className="relative flex h-[200px] w-full flex-col items-center justify-center bg-black px-7 py-[2rem]">
          <Heading className="mb-28 w-full max-w-301 text-center text-1422 font-medium text-white">
            {t('takePortraitInstruction')}
          </Heading>
          <ButtonCamera form="photo" />
        </div>
      </div>
      <TakePortrait />
    </div>
  );
};

export default TakePortraitView;
