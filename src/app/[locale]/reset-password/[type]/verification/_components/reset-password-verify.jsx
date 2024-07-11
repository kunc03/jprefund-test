'use client';

import { Heading } from '@/components';
import { cn } from '@/utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

const ResetPasswordVerify = () => {
  const t = useTranslations('resetPassword');
  const pathname = usePathname();

  const verifications = {
    emails: {
      sendUrl: t('resetEmailSendToYou'),
      clickOnUrl: t('clickOnUrlInEmail'),
      example: 'example@mail.com',
      instruction: t('emailInstruction'),
      image: '/icons/mail.svg',
    },
    phones: {
      sendUrl: t('resetSmsSendToYou'),
      clickOnUrl: t('clickOnUrlInSms'),
      example: '090-0000-0000',
      instruction: t('smsInstruction'),
      image: '/icons/sms.svg',
    },
  };

  const isEmailPath = pathname.includes('/email');
  const verify = isEmailPath ? verifications.emails : verifications.phones;

  return (
    <div className={cn('flex flex-col justify-center ')}>
      {/* <h1 className="text-center">{verify.sendUrl}</h1> */}
      <Heading
        className="my-28.5 text-center text-2122 font-medium"
        key="createAccount"
      >
        {verify.sendUrl}
      </Heading>
      <div
        className={cn(
          'flex flex-col gap-28 items-center justify-center text-center px-16',
        )}
      >
        <div className={cn('flex flex-col items-center justify-center gap-3')}>
          <Image src={verify.image} width={51} height={54.6} alt="icon" />
          <p className={cn('text-1320 font-medium')}>{verify.example}</p>
          <p className={cn('text-1420 font-medium')}>{verify.clickOnUrl}</p>
        </div>
        <p className={cn('text-1320')}>{t('expiresUrl')}</p>
        <p className={cn('text-1116 flex justify-center text-center')}>
          <span className="w-72">{verify.instruction}</span>
        </p>
      </div>
    </div>
  );
};

export { ResetPasswordVerify };
