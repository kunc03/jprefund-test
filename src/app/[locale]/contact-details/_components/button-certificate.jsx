/* eslint-disable react/button-has-type */

'use client';

import { Button } from '@/components';
import { cn } from '@/utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const ButtonCertificate = ({ className }) => {
  const t = useTranslations('contactDetails');
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push('/contact-details/scan-certificate')}
      className={cn(
        `flex items-center rounded-6 border-2 border-red bg-white p-2 hover:bg-white-dark text-1618 small:text-1212 font-bold text-red gap-2 px-2`,
        className,
      )}
    >
      <Image
        src="/icons/check-star.svg"
        width={32}
        height={32}
        alt="scan certificate"
      />
      {t('photograph')}
    </Button>
  );
};

export { ButtonCertificate };
