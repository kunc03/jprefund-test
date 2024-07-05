'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const ButtonRecognition = ({ t }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/passport-information/take-portrait')}
      className="flex items-center justify-center border-[1.5px] border-red rounded-[7px] py-2 bg-white w-[70%] hover:bg-white-dark delay-1000 duration-1000"
    >
      <span className="text-red flex gap-5 text-[16px] font-bold items-center">
        <Image
          src={'/icons/scan-face.svg'}
          width={32}
          height={32}
          alt="passport"
        />
        {t('useFaceRecognition')}
      </span>
    </button>
  );
};

export default ButtonRecognition;
