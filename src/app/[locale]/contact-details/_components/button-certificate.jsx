'use client';

import { cn } from '@/utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ButtonReshoot } from './button-reshoot';

const ButtonCertificate = ({ className, sParam }) => {
  const t = useTranslations('contactDetails');
  return (
    <>
      <div
        className={cn(
          'w-full py-10 rounded-6 flex justify-center items-center bg-white border border-gray-300',
        )}
      >
        {sParam === 'sc' ? (
          <Image
            src="images/certif.svg"
            width={243.86}
            height={152.78}
            alt="certif image"
          />
        ) : (
          <Link
            href="/contact-details/scan-certificate"
            className={`${className} flex items-center justify-center rounded-[7px] border-2 border-red bg-white p-2 delay-1000 duration-1000 hover:bg-white-dark`}
          >
            <span className="flex items-center gap-5 text-1618 font-bold text-red">
              {t('photograph')}
            </span>
          </Link>
        )}
      </div>
      {sParam === 'sc' && (
        <ButtonReshoot path="/contact-details/scan-certificate" />
      )}
    </>
  );
};

export { ButtonCertificate };
