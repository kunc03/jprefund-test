/* eslint-disable react/button-has-type */

'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const ButtonCertificate = ({ className }) => {
  const t = useTranslations('contactDetails');
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/contact-details/scan-certificate')}
      className={`${className} flex items-center justify-center rounded-[7px] border-2 border-red bg-white p-2 delay-1000 duration-1000 hover:bg-white-dark`}
    >
      <span className="flex items-center gap-5 text-[16px] font-bold text-red">
        <Image
          src="/icons/check-star.svg"
          width={32}
          height={32}
          alt="scan certificate"
        />
        {t('photograph')}
      </span>
    </button>
  );
};

export default ButtonCertificate;
