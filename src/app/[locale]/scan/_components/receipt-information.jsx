'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { FormScan } from '../form/form-scan';
import { cn } from '@/utils';

const ReceiptInformation = () => {
  const t = useTranslations('scan');

  return (
    <div
      className={cn('h-full w-full flex flex-col justify-between bg-gray-50')}
    >
      <div className={cn('p-9 flex flex-col gap-5 mt-11')}>
        <h1
          className={cn(
            'text-1822 font-medium flex w-full items-center justify-center',
          )}
        >
          <span className="w-44 ">{t('manualInput')}</span>
        </h1>

        <FormScan />
      </div>
    </div>
  );
};

export { ReceiptInformation };
