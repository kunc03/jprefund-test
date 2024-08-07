'use client';

import { Heading } from '@/components';
import { cn } from '@/utils';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ButtonCamera, TakePortrait } from '../../_components';

const BodyScan = () => {
  const t = useTranslations('passportInformation');
  const webcamRef = useRef(null);
  const [, setCapturedImage] = useState(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  //   console.log(capturedImage);

  return (
    <>
      <div className="camera-landscape absolute inset-x-0 top-0 z-20 flex h-dvh flex-col items-center justify-between">
        <Heading className="pt-9 text-center text-1822 font-medium text-white">
          {t('takePortrait')}
        </Heading>

        <div className="overlay">
          <Image
            alt="face Frame"
            height={298}
            src="/images/face-frame.svg"
            width={360}
            priority
            className="centered-image"
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
            {t('takePortraitInstruction')}
          </Heading>
          <ButtonCamera form="face" captureImage={captureImage} />
        </div>
      </div>
      <TakePortrait webcamRef={webcamRef} />
    </>
  );
};

export { BodyScan };
