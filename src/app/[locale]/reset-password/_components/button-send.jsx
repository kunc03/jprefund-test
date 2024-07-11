'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useFormRef } from '@/hooks';

const ButtonSend = () => {
  const t = useTranslations('resetPassword');
  const submitForm = useFormRef((state) => state.submitForm);

  const handleClick = () => {
    submitForm();
  };

  return (
    <Button
      className="mb-9 w-249 items-center justify-center"
      onClick={handleClick}
    >
      {t('send')}
    </Button>
  );
};

export { ButtonSend };
