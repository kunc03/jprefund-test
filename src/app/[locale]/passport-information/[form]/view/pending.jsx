/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FaceRecognition } from '../_components';
import { cn } from '@/utils';
import { useRouter } from 'next/navigation';
import { PassportFormDisabled } from '../_components/passport-form-disabled';

const Pending = ({ form, isForm }) => {
  const t = useTranslations('passportInformation');
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push('/passport-information/problem');
    }, 5000);

    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div
      className={cn(
        'flex w-full grow flex-col items-center justify-center gap-22 px-28 pt-28 pb-108',
      )}
    >
      <PassportFormDisabled t={t} isForm={isForm} />

      <FaceRecognition t={t} form={form} />
    </div>
  );
};

export { Pending };
