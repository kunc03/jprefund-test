'use client';

import React from 'react';
import { Button } from '@/components';
import { useTranslations } from 'next-intl';
import { useFormRef } from '@/hooks';

const ButtonSignIn = () => {
  const t = useTranslations('passwordSetting');
  const submitForm = useFormRef((state) => state.submitForm);

  const handleClick = () => {
    submitForm();
  };
  return (
    <Button
      className="mb-9 w-249 items-center justify-center"
      onClick={handleClick}
    >
      {t('signIn')}
    </Button>
  );
};

export { ButtonSignIn };
