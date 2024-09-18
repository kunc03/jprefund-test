import React from 'react';
import { getTranslations } from 'next-intl/server';
import { TakePortrait } from '../_components';
import { ButtonClose } from '@/components';
import Camera from './camera';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'passportInformation' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const TakePortraitView = () => {
  return (
    <div className="landscape relative min-h-dvh">
      <Camera />
      <TakePortrait />
      <ButtonClose path="face" />
    </div>
  );
};

export default TakePortraitView;
