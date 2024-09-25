'use client';

import { cn } from '@/utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';
import { ScanCamera } from './scan-camera';
import { ReceiptInformation } from './receipt-information';
import { ButtonClose } from '@/components';

const ScanType = () => {
  const t = useTranslations('scan');
  const [isClick, setIsClick] = useState(true);

  return (
    <>
      {isClick ? <ScanCamera /> : <ReceiptInformation />}

      <div
        className={cn(
          'flex h-73 w-full items-center justify-between bg-black',
          isClick && 'mt-[10%]',
        )}
      >
        <div
          className={cn(
            'flex w-1/2 items-center justify-center gap-3 text-white py-5 cursor-pointer',
            isClick && 'opacity-35',
          )}
          onClick={() => setIsClick(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsClick(true);
            }
          }}
          role="button"
          tabIndex={0}
        >
          <Image alt="logo" height={32} src="/images/qr.svg" width={32} />
          <p className="w-64 text-1317">{t('scanType')}</p>
        </div>

        <hr className={cn('h-38 w-[1px] bg-white')} />

        <div
          className={cn(
            'flex w-1/2 items-center justify-center gap-1 text-white py-5 cursor-pointer',
            !isClick && 'opacity-35',
          )}
          onClick={() => setIsClick(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsClick(false);
            }
          }}
          role="button"
          tabIndex={0}
        >
          <div className={cn('relative p-10')}>
            <Image
              alt="logo"
              height={58}
              src="/icons/x.svg"
              width={58}
              className="absolute bottom-0 right-0"
            />
            <Image alt="logo" height={32} src="/images/qr.svg" width={32} />
          </div>
          <p className="w-73 text-1317">{t('noCode')}</p>
        </div>
      </div>

      {!isClick ? <ButtonClose className="!text-gray" /> : <ButtonClose />}
    </>
  );
};

export { ScanType };
