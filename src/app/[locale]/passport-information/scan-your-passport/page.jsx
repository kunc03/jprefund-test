'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Heading } from '@/components';
import { useTranslations } from 'next-intl';
import { PassportScan } from '../_components/passport-scan';

const ScanYourPassport = () => {
  const router = useRouter();
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
          {t('scanYourPassport')}
        </Heading>
      </div>
      <PassportScan />
    </div>
  );
};

export default ScanYourPassport;
