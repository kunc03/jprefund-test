'use client';

import { Button } from '@/components';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React from 'react';

const ButtonScanPassport = () => {
  const t = useTranslations('passportInformation');
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        router.push('/passport-information/scan-your-passport');
      }}
      className="w-249"
    >
      {t('scanYourPassport')}
    </Button>
  );
};

export { ButtonScanPassport };
