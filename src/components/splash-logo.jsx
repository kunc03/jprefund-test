'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Heading } from './heading';
import { Logo } from './logo';
import { useTranslations } from 'next-intl';

const SplashLogo = () => {
  const router = useRouter();
  const t = useTranslations('home');
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/register');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <Logo width={309.65} height={68} className="h-68 w-309.65" />
      <Heading
        className="mt-14  w-full px-77 text-center text-2437 font-medium"
        key="enjoyJapanRefundService"
      >
        {t('enjoyJapanRefundService')}
      </Heading>
    </>
  );
};

export { SplashLogo };
