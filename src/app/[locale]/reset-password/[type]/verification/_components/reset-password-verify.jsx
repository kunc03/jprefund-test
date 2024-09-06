'use client';

import { Heading } from '@/components';
import { cn } from '@/utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const ResetPasswordVerify = () => {
  const t = useTranslations('resetPassword');
  const pathname = usePathname();
  const router = useRouter();

  const verifications = {
    emails: {
      sendUrl: t('resetEmailSendToYou'),
      clickOnUrl: t('clickOnUrlInEmail'),
      example: 'example@mail.com',
      instructionHead: t('emailInstruction.head'),
      instruction1: t('emailInstruction.1'),
      instruction2: t('emailInstruction.2'),
      instruction3: t('emailInstruction.3'),
      instructionFoot: t('emailInstruction.foot'),
      image: '/icons/mail.svg',
    },
    phones: {
      sendUrl: t('resetSmsSendToYou'),
      clickOnUrl: t('clickOnUrlInSms'),
      example: '090-0000-0000',
      instructionHead: t('smsInstruction.head'),
      instruction1: t('smsInstruction.1'),
      instruction2: t('smsInstruction.2'),
      instruction3: t('smsInstruction.3'),
      instructionFoot: t('smsInstruction.foot'),
      image: '/icons/sms.svg',
    },
  };

  const isEmailPath = pathname.includes('/email');
  const verify = isEmailPath ? verifications.emails : verifications.phones;

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push('/reset-password/resetting');
    }, 4000);

    return () => clearTimeout(redirectTimeout);
  }, [router]);

  return (
    <div className={cn('flex flex-col justify-center')}>
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
        <div className={cn('text-1116 text-start flex flex-col gap-3')}>
          <p>{verify.instructionHead}</p>
          <p className="flex flex-col">
            <span>1. {verify.instruction1}</span>
            <span>2. {verify.instruction2}</span>
            <span>3. {verify.instruction3}</span>
          </p>
          <p>{verify.instructionFoot}</p>
        </div>
      </div>
    </div>
  );
};

export { ResetPasswordVerify };
