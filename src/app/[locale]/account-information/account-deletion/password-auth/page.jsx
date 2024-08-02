'use client';

import { Header } from '@/components';
import { cn } from '@/utils';
import { useTranslations } from 'next-intl';
import { FormPassword } from '../_components/form-password';
import { useState } from 'react';
import { ConfirmDialog, SuccessDialog } from '../_components';

const PasswordAuth = () => {
  const t = useTranslations('accountInformation');
  const [isConfirm, setIsConfirm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="flex min-h-dvh flex-col">
      <div className={cn('flex w-full grow flex-col items-center')}>
        <Header hasBack title={t('accountDeletion')} />

        <div
          className={cn(
            'flex flex-col gap-28 px-36 items-center justify-between py-9 text-gray',
          )}
        >
          <h1 className={cn('text-1623 font-bold text-justify')}>
            {t('passwordAuth')}
          </h1>
          <p className="text-1423">{t('toEnsureTheSafe')}</p>

          <FormPassword setIsConfirm={setIsConfirm} />
        </div>
      </div>
      <ConfirmDialog
        isConfirm={isConfirm}
        setIsConfirm={setIsConfirm}
        setIsSuccess={setIsSuccess}
      />
      <SuccessDialog isOpen={isSuccess} />
    </div>
  );
};

export default PasswordAuth;
