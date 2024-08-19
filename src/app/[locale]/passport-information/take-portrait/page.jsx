import React from 'react';
import { getTranslations } from 'next-intl/server';
import { ButtonCamera, TakePortrait } from '../_components';
import { ButtonClose, Heading } from '@/components';
import { cn } from '@/utils';
import Image from 'next/image';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'passportInformation' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const TakePortraitView = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'passportInformation' });

  return (
    <div className="landscape relative min-h-dvh">
      <div className="camera-landscape absolute inset-x-0 top-0 z-20 flex h-dvh flex-col items-center justify-between">
        <Heading className="w-full bg-black/50 pb-29 pt-46 text-center text-1918 font-medium text-white backdrop-blur-sm">
          {t('photographFace')}
        </Heading>

        <div className={cn('overlay px-2 h-full')}>
          <div
            className={cn('absolute w-full h-full flex flex-col items-center')}
          >
            <div className={cn('w-full h-full bg-black/50 backdrop-blur-sm')} />
            <div className={cn('bg-gray-container w-full')}>
              <div
                className={cn(
                  'bg-gray-cam w-[50%] h-full bg-black/50 backdrop-blur-sm',
                )}
              />
              <Image
                alt="Qr Frame"
                className={cn('centered-camera mx-2 my-5 h-auto')}
                height={381.77}
                src="/images/face-frame.svg"
                width={302.96}
                priority
              />
              <div
                className={cn(
                  'bg-gray-cam w-[50%] h-full bg-black/50 backdrop-blur-sm',
                )}
              />
            </div>
            <div className={cn('w-full h-full bg-black/50 backdrop-blur-sm')} />
          </div>
        </div>

        <div
          className={cn(
            'relative flex w-full flex-col items-center justify-center px-7 py-4 bg-black/50 backdrop-blur-sm',
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
      <ButtonClose path="face" />
    </div>
  );
};

export default TakePortraitView;
