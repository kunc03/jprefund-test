'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

const ButtonDelete = () => {
  const t = useTranslations('accountInformation');
  const handleClick = () => {};

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
