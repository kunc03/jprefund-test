'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { ScanType } from '../_components';
import { FormScan } from '../form/form-scan';
import { cn } from '@/utils';
import { Button } from '@/components';
import { X } from 'lucide-react';

const ReceiptInformation = () => {
  const t = useTranslations('scan');
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const checkreceipt = searchParams.get('checkreceipt');
    if (!checkreceipt) {
      router.push('/scan');
    }
  }, [searchParams, router]);

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={cn('h-screen flex flex-col justify-between')}>
      <div className={cn('p-9 flex flex-col gap-5 mt-11')}>
        <h1
          className={cn(
            'text-1822 font-medium flex w-full items-center justify-center',
          )}
        >
          <span className="w-44 ">{t('manualInput')}</span>
        </h1>

        <FormScan searchParams={searchParams} />
      </div>

      <Button
        onClick={handleBack}
        className={cn(
          'absolute top-3 right-3 p-2 z-50 bg-transparent hover:bg-transparent',
        )}
      >
        <X size={28} className="cursor-pointer text-gray" />
      </Button>

      <ScanType />
    </div>
  );
};

export default ReceiptInformation;
