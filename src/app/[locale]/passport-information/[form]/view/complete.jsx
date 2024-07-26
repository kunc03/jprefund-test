/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useTranslations } from 'next-intl';
import { FaceRecognition } from '../_components';
import { cn } from '@/utils';
import { PassportFormDisabled } from '../_components/passport-form-disabled';

const Complete = ({ form, isForm }) => {
  const t = useTranslations('passportInformation');

  return (
    <div
      className={cn(
        'flex w-full grow flex-col items-center justify-center px-28 pt-28 pb-108',
      )}
    >
      <PassportFormDisabled isForm={isForm} />

      <FaceRecognition t={t} form={form} />
    </div>
  );
};

export { Complete };
