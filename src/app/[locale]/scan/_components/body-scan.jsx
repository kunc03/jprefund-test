'use client';

import { Heading } from '@/components';
import { cn } from '@/utils';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { QrScan } from './qr-scan';
import { ButtonSend } from './button-send';

const BodyScan = () => {
  const t = useTranslations('scan');
  const qrBoxEl = useRef(null);

  return (
    <div className="landscape relative min-h-dvh">
      <div className="camera-landscape absolute inset-x-0 top-5 z-20 flex h-dvh flex-col items-center justify-between">
        <Heading className="text-center text-1822 font-medium text-white">
          {t('receiptScan')}
        </Heading>

        <div ref={qrBoxEl} className={cn('overlay px-2 mb-2')}>
          <Image
            alt="Qr Frame"
            className="centered-image"
            height={250}
            src="/images/qr-frame.svg"
            width={336}
            priority
          />
        </div>

        <div
          className={cn(
            'flex w-full flex-col items-center justify-center bg-black px-7 pt-43 pb-65',
          )}
        >
          <div
            className={cn(
              'flex flex-col w-full max-w-xs items-center justify-center gap-3',
            )}
          >
            <ButtonSend />
            <Heading
              className={cn(
                'w-full max-w-258 text-center text-1626 font-medium text-white',
              )}
            >
              {t('qrAlert')}
            </Heading>
          </div>
        </div>
      </div>

      <QrScan qrBoxEl={qrBoxEl} />
    </div>
  );
};

export { BodyScan };
