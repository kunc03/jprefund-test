'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useFormRef } from '@/hooks';

const ButtonLogin = () => {
  const t = useTranslations('login');
  const submitForm = useFormRef((state) => state.submitForm);

  const handleLoginClick = () => {
    submitForm();
  };

  return (
    <Button className="mb-9 w-249" onClick={handleLoginClick}>
      {t('login')}
    </Button>
  );
};

export { ButtonLogin };
