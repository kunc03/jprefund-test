'use client';

import { Heading } from '@/components';
import { cn } from '@/utils';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ButtonCamera, PassportScan } from '../../_components';

const BodyScan = () => {
  const webcamRef = useRef(null);
  const t = useTranslations('passportInformation');
  const [capturedImage, setCapturedImage] = useState(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  console.log(capturedImage);
  return (
    <>
      <div className="camera-landscape absolute inset-x-0 top-0 z-20 flex h-dvh flex-col items-center justify-between">
        <Heading className="pt-9 text-center text-1822 font-medium text-white">
          {t('photographingPassport')}
        </Heading>

        <div className="overlay">
          <Image
            src="/images/scan-passport.svg"
            width={265}
            height={250}
            alt="Passport Image"
            className={cn('centered-image w-[60%]')}
          />
        </div>

        <div
          className={cn(
            'relative flex w-full flex-col items-center justify-center px-7 py-4',
          )}
        >
          <Heading
            className={cn(
              'w-full px-2 text-center text-1422 font-medium text-white',
            )}
          >
            {t('photoInstruction')}
          </Heading>
          <ButtonCamera form="passport" captureImage={captureImage} />
        </div>
      </div>
      <PassportScan webcamRef={webcamRef} />
    </>
  );
};

export { BodyScan };
