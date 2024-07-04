'use client';

import React, { use, useEffect } from 'react';
import { PassportScan } from '../_components/passport-scan';
import { usePathname, useRouter } from 'next/navigation';
import { Heading } from '@/components';
import { useTranslations } from 'next-intl';
import { Circle } from 'lucide-react';

// const handleTakePhoto = ({ router }) => {
//   router.push('/passport-information/take-portrait');
// };

const ScanPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('passportInformation');

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push('/passport-information/form');
    }, 4000);

    return () => clearTimeout(redirectTimeout);
  }, []);

  // const handleClick = () => {
  //   if (type === 'photo') handleTakePhoto({ router });
  // };

  return (
    <div className="relative min-h-dvh">
      {pathname === '/passport-information/scan-your-passport' ? (
        <>
          <div className="absolute inset-x-0 top-0 z-20 flex h-dvh flex-col items-center justify-between">
            <Heading className="pt-9 text-center text-1822 font-medium text-white">
              {t('scanYourPassport')}
            </Heading>
          </div>
          <PassportScan />
        </>
      ) : (
        <div className="absolute inset-x-0 top-0 z-20 flex h-dvh flex-col items-center justify-between">
          <Heading className="pt-9 text-center text-1822 font-medium text-white">
            {t('takePortrait')}
          </Heading>

          <div className="flex w-full flex-col items-center justify-center bg-black px-7 py-[2rem] relative h-[236px]">
            <Heading className="mb-[7rem] w-full max-w-301 text-center text-1422 font-medium text-white">
              {t('takePortraitInstruction')}
            </Heading>
            <button
              // onClick={handleClick}
              className="absolute bottom-[60px] w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center"
            >
              <Circle className="text-black" size={62} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScanPage;
