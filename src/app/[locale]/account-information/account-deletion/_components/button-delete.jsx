'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const ButtonDelete = () => {
  const t = useTranslations('accountInformation');
  const router = useRouter();

  const handleClick = () => {
    router.push('/account-information/account-deletion/password-auth');
  };

  return (
    <Button
      className="mt-56 w-231 items-center justify-center"
      onClick={handleClick}
    >
      {t('accountDeletion')}
    </Button>
  );
};

export { ButtonDelete };
