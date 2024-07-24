/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { FaceRecognition } from '../_components';
import { cn } from '@/utils';
import { PassportFormDisabled } from '../_components/passport-form-disabled';
import { ErrorDialog } from '../_components/error-dialog';

const Problem = ({ form, isForm }) => {
  const t = useTranslations('passportInformation');
  const pathname = usePathname();
  const router = useRouter();

  const [isSuccess, setIsSuccess] = useState(true);

  useEffect(() => {
    setIsSuccess(false);
  });

  return (
    <>
      <div className="mt-2 flex flex-col items-center justify-center text-1422 font-medium text-red">
        <p>{t('problemMessage1')}</p>
        <p>{t('problemMessage2')}</p>
        <p>{t('problemMessage3')}</p>
      </div>
      <div className="flex w-full grow flex-col items-center justify-center gap-22 px-28 py-20">
        <PassportFormDisabled isForm={isForm} />

        <FaceRecognition t={t} form={form} />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-[54px] pb-54">
        {pathname === '/passport-information/form' ? (
          <Button className={cn('w-173')} disabled>
            {t('send')}
          </Button>
        ) : (
          <Button
            onClick={() => router.push('/passport-information/complete')}
            className={cn('w-173')}
          >
            {t('send')}
          </Button>
        )}
      </div>
      <ErrorDialog isOpen={isSuccess} />
    </>
  );
};

export { Problem };
