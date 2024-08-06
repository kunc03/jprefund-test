import React from 'react';
import { Heading } from '@/components';
import { ScanCertificate } from '../_components/scan-certificate';
import { ButtonCamera } from '../_components';
import { getTranslations } from 'next-intl/server';
import { cn } from '@/utils';
import Image from 'next/image';

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
      <div className="camera-landscape absolute inset-x-0 top-5 z-20 flex h-dvh flex-col items-center justify-between">
        <Heading className="text-center text-1822 font-medium text-white">
          {t('photograph')}
        </Heading>

        <div className="overlay">
          <Image
            className="centered-image"
            alt="Qr Frame"
            height={260}
            src="/icons/certif-scan.svg"
            width={300}
            priority
          />
        </div>

        <div
          className={cn(
            'relative flex w-full flex-col items-center justify-center px-7 py-5',
          )}
        >
          <Heading
            className={cn(
              'w-full px-2 text-center text-1422 font-medium text-white',
            )}
          >
            {t('scanCertificateInstruction')}
          </Heading>
          <ButtonCamera form="certificate" />
        </div>
      </div>
      <ScanCertificate />
    </div>
  );
};

export default ScanCertificatePage;
