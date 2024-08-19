import React from 'react';
import { getTranslations } from 'next-intl/server';
// import { BodyScan } from './_components/body-scan';
import { Heading } from '@/components';
import { cn } from '@/utils';
import { ButtonCamera, ScanCertificate } from '../_components';
import Image from 'next/image';
import { ButtonClose } from '@/components/button-close';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'contactDetails' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const ScanCertificatePage = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'contactDetails' });

  return (
    <div className="landscape relative min-h-dvh">
      <div className="camera-landscape absolute inset-x-0 top-0 z-20 flex h-dvh flex-col items-center justify-between">
        <Heading className="w-full pb-24 pt-46 text-center text-1918 font-medium text-white bg-black/50 backdrop-blur-sm">
          {t('photographCertificate')}
        </Heading>

        <div className={cn('overlay px-2 h-full')}>
          <div
            className={cn('absolute w-full h-full flex flex-col items-center')}
          >
            <div className={cn('w-full h-full bg-black/50 backdrop-blur-sm')} />
            <div className={cn('bg-gray-container w-full')}>
              <div
                className={cn(
                  'bg-gray-cam w-full h-full bg-black/50 backdrop-blur-sm',
                )}
              />
              <Image
                alt="Qr Frame"
                className={cn('centered-camera -m-3 z-30 h-auto w-auto')}
                height={260}
                src="/icons/certif-scan.svg"
                width={350}
                priority
              />
              <div
                className={cn(
                  'bg-gray-cam w-full h-full bg-black/50 backdrop-blur-sm',
                )}
              />
            </div>
            <div className={cn('w-full h-full bg-black/50 backdrop-blur-sm')} />
          </div>
        </div>

        <div
          className={cn(
            'relative flex w-full flex-col items-center justify-center px-7 py-5 bg-black/50 backdrop-blur-sm',
          )}
        >
          <Heading
            className={cn(
              'w-full px-2 text-center text-1422 font-medium text-white small:hidden',
            )}
          >
            {t('scanCertificateInstruction')}
          </Heading>
          <ButtonCamera form="certificate" />
        </div>
      </div>
      <ScanCertificate />
      <ButtonClose path="certificate" />
    </div>
  );
};

export default ScanCertificatePage;
