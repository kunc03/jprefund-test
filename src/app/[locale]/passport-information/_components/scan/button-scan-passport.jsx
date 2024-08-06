'use client';

import { Button } from '@/components';
import { cn } from '@/utils';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React from 'react';

const ButtonScanPassport = () => {
  const t = useTranslations('passportInformation');
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        router.push('/passport-information/photograph-passport');
      }}
      className={cn('px-5 mb-2 text-1515 text-white')}
    >
      {t('photographingPassport')}
    </Button>
  );
};

export { ButtonScanPassport };
