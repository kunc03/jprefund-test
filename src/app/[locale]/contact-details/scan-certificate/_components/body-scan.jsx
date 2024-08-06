'use client';

import { Heading } from '@/components';
import { cn } from '@/utils';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ScanCertificate } from '../../_components/scan-certificate';
import { ButtonCamera } from '../../_components';

const BodyScan = () => {
  const t = useTranslations('contactDetails');
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  console.log(capturedImage);

  return (
    <>
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
              'w-full px-2 text-center text-1422 font-medium text-white small:hidden',
            )}
          >
            {t('scanCertificateInstruction')}
          </Heading>
          <ButtonCamera form="certificate" captureImage={captureImage} />
        </div>
      </div>
      <ScanCertificate webcamRef={webcamRef} />
    </>
  );
};

export { BodyScan };
