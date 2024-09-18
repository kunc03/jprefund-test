'use client';

import { Heading } from '@/components';
import { cn } from '@/utils';
import Image from 'next/image';
import React, { useState } from 'react';
import { ButtonCamera, TakePortrait } from '../_components';
import { useTranslations } from 'next-intl';

const Camera = () => {
  const t = useTranslations('passportInformation');
  const [isClick, setIsClick] = useState(false);
  return (
    <div className="camera-landscape absolute inset-x-0 top-0 z-20 flex h-dvh flex-col items-center justify-between bg-black/50 backdrop-blur-md">
      <Heading className="w-full pb-29 pt-46 text-center text-1918 font-medium text-white">
        {t('photographFace')}
      </Heading>

      <div className={cn('overlay px-2 h-full')}>
        <div
          className={cn('absolute w-full h-full flex flex-col items-center')}
        >
          <div className={cn('bg-gray-container w-full max-h-423')}>
            <Image
              alt="Qr Frame"
              className={cn('centered-camera absolute z-30 px-2 py-5')}
              height={381.77}
              src="/images/face-frame.svg"
              width={302.96}
              priority
            />
            <TakePortrait isClick={isClick} form="face" />
          </div>
        </div>
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
          {t('takePortraitInstruction')}
        </Heading>
        <ButtonCamera setIsClick={setIsClick} />
      </div>
    </div>
  );
};

export default Camera;
