'use client';

import { Heading } from '@/components';
import { cn } from '@/utils';
import Image from 'next/image';
import React, { useState } from 'react';
import { ButtonCamera, PassportScan } from '../_components';
import { useTranslations } from 'next-intl';

const Camera = () => {
  const t = useTranslations('passportInformation');
  const [isClick, setIsClick] = useState(false);
  return (
    <div className="camera-landscape absolute inset-x-0 top-0 z-20 flex h-dvh flex-col items-center justify-between overflow-y-auto bg-black/50 backdrop-blur-md">
      <Heading className="flex min-h-[10%] w-full items-center justify-center text-1918 font-medium text-white ">
        {t('captureYourPassport')}
      </Heading>

      <div className={cn('overlay px-2 h-full')}>
        <div
          className={cn('absolute w-full h-full flex flex-col items-center')}
        >
          <div className={cn('bg-gray-container w-full')}>
            <Image
              alt="Qr Frame"
              className={cn('centered-camera absolute z-30 px-7 py-1')}
              height={428}
              src="/images/scan-passport.svg"
              width={336}
              priority
            />
            <PassportScan isClick={isClick} form="passport" />
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
          {t('photoInstruction')}
        </Heading>
        <ButtonCamera setIsClick={setIsClick} />
      </div>
    </div>
  );
};

export default Camera;
