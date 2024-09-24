'use client';

import React from 'react';
import { QrScan } from './qr-scan';
import { Heading } from '@/components';
import { cn } from '@/utils';
import Image from 'next/image';
import { ButtonSend } from './button-send';
import { useTranslations } from 'next-intl';

const ScanCamera = () => {
  const t = useTranslations('scan');

  return (
    <>
      <Heading className="w-full pt-46 text-center text-1918 font-medium text-white">
        {t('receiptScan')}
      </Heading>
      <div className={cn('overlay h-full w-full')}>
        <div
          className={cn(
            'bg-gray-container w-full max-w-324 max-h-324 flex flex-col items-center p-15',
          )}
        >
          <Image
            alt="Qr Frame"
            className={cn('centered-camera absolute z-30 h-auto w-auto')}
            height={260}
            src="/images/qr-frame.svg"
            width={350}
            priority
          />
          <QrScan />
        </div>
      </div>
      <div
        className={cn(
          'relative flex w-full flex-col items-center justify-center px-7 pt-4 gap-5',
        )}
      >
        <ButtonSend />
        <Heading
          className={cn(
            'w-full max-w-258 text-center text-1616 font-medium text-white',
          )}
        >
          {t('qrAlert')}
        </Heading>
      </div>
    </>
  );
};

export { ScanCamera };
