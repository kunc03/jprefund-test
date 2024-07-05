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
      onClick={() =>
        router.push('/passport-information/photograph-certificate')
      }
      className={`${className} flex items-center justify-center border-2 border-red rounded-[7px] p-2 bg-white hover:bg-white-dark delay-1000 duration-1000`}
    >
      <span className="text-red flex gap-5 text-[16px] font-bold items-center">
        <Image
          src={'/icons/check-star.svg'}
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
