'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useFormRef } from '@/hooks';

const ButtonNext = () => {
  const t = useTranslations('register');
  const submitForm = useFormRef((state) => state.submitForm);

  const handleClick = () => {
    submitForm();
  };

  return (
    <Button className="mb-9 w-64" onClick={handleClick}>
      {t('next')}
    </Button>
  );
};

export { ButtonNext };
