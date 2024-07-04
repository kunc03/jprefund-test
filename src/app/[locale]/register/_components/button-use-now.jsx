'use client';

import { Heading } from '@/components';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const ButtonUseNow = () => {
  const t = useTranslations('register');
  const router = useRouter();

  const handleUseNow = () => {
    router.replace('/home');
  };

  return (
    <Heading className="mt-41 text-1722 font-normal">
      {t.rich('useNowWithoutRegistering', {
        useNow: (
          <span
            className="cursor-pointer font-bold underline"
            onClick={handleUseNow}
            key="useNow"
            role="button"
            tabIndex="0"
            aria-hidden="true"
          >
            {t('useNow')}
          </span>
        ),
      })}
    </Heading>
  );
};

export { ButtonUseNow };
