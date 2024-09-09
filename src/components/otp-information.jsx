'use client';

import { cn } from '@/utils';
import { Heading } from './heading';
import { useTranslations } from 'next-intl';

const OtpInformation = ({ type }) => {
  const t = useTranslations('register');

  return (
    <Heading
      className={cn('mt-28.5 mb-17 text-center text-1522 font-normal')}
      key="verifyCodeSend"
    >
      {type === 'email' &&
        t.rich('enterAuthCodeEmail', {
          authCode: (
            <span className="font-bold" key="authCodeEmail">
              {t('authCode')}
            </span>
          ),
        })}
      {type === 'phone' &&
        t.rich('enterAuthCodePhone', {
          authCode: (
            <span className="font-bold" key="authCodePhone">
              {t('authCode')}
            </span>
          ),
        })}
    </Heading>
  );
};

export { OtpInformation };
