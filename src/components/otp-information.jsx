'use client';

import { cn } from '@/utils';
import { Heading } from './heading';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

const OtpInformation = ({ type }) => {
  const t = useTranslations('register');
  const pathname = usePathname();

  const accountInform = pathname.includes('account-information');

  const boldContent = (
    <span className="font-bold" key={accountInform ? 'authCode' : 'verifyCode'}>
      {t(accountInform ? 'authCode' : 'verifyCode')}
    </span>
  );

  const emailInform = accountInform
    ? 'enterAuthCodeEmailAccountInform'
    : 'enterAuthCodeEmail';

  return (
    <Heading
      className={cn('mt-28.5 mb-17 text-center text-1522 font-normal')}
      key="otpInformation"
    >
      {type === 'email' &&
        t.rich(emailInform, {
          authCode: boldContent,
          verifyCode: boldContent,
        })}
      {type === 'phone' &&
        t.rich('enterAuthCodePhone', {
          authCode: boldContent,
          verifyCode: boldContent,
        })}
    </Heading>
  );
};

export { OtpInformation };
