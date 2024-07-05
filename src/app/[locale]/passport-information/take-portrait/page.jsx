'use client';

import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Heading } from '@/components';
import { useTranslations } from 'next-intl';
import { TakePortrait } from '../_components/take-portrait-scan';
import { ButtonCamera } from '../_components/button-camera';

const TakePortraitView = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('passportInformation');

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push('/passport-information/form');
    }, 4000);

    return () => clearTimeout(redirectTimeout);
  }, []);
  return (
    <div className="relative min-h-dvh">
      <div className="absolute inset-x-0 top-0 z-20 flex h-dvh flex-col items-center justify-between">
        <Heading className="pt-9 text-center text-1822 font-medium text-white">
          {t('takePortrait')}
        </Heading>

        <div className="flex w-full flex-col items-center justify-center bg-black px-7 py-[2rem] relative h-[236px]">
          <Heading className="mb-[7rem] w-full max-w-301 text-center text-1422 font-medium text-white">
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
