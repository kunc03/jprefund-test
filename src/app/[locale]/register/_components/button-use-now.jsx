'use client';

import { Heading } from '@/components';
import { useAuth } from '@/hooks';
import { cn } from '@/utils';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const ButtonUseNow = () => {
  const t = useTranslations('register');
  const router = useRouter();
  const { onAuth } = useAuth();

  const handleUseNow = () => {
    const guestAuth = {
      status: 'guest',
      user: {},
    };
    onAuth(guestAuth);
    router.replace('/home');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleUseNow();
    }
  };

  return (
    <Heading className="mt-41 text-1722 font-normal text-gray">
      <div className="flex flex-col items-center text-1322">
        <span
          className={cn(
            'cursor-pointer font-bold underline underline-offset-[3px] decoration-1 text-1722',
          )}
          onClick={handleUseNow}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
          {t('tryNow')}
        </span>{' '}
        {t('useNowWithoutRegistering', { tryNow: '' })}
      </div>
    </Heading>
  );
};

export { ButtonUseNow };
