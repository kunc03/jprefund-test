'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useFormLogin } from '../_hooks/use-form-login';

const ButtonLogin = () => {
  const t = useTranslations('login');
  const submitForm = useFormLogin((state) => state.submitForm);

  const handleLoginClick = () => {
    submitForm();
  };

  return (
    <Button className="mb-9 w-64" onClick={handleLoginClick}>
      {t('login')}
    </Button>
  );
};

export { ButtonLogin };
