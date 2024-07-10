/* eslint-disable react/button-has-type */

'use client';

import { Button } from '@/components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const ButtonRecognition = ({ t }) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push('/passport-information/take-portrait')}
      className="flex items-center justify-center rounded-[7px] border-[1.5px] border-red bg-white py-2 delay-1000 duration-1000 hover:bg-white-dark"
    >
      <span className="flex items-center gap-5 text-[16px] font-bold text-red">
        <Image
          src="/icons/scan-face.svg"
          width={32}
          height={32}
          alt="passport"
        />
        {t('useFaceRecognition')}
      </span>
    </Button>
  );
};

export { ButtonRecognition };
