'use client';

import { Heading } from '@/components';
import { useTranslations } from 'next-intl';

const ContentCreditCard = () => {
  const t = useTranslations('refundMethod');
  return (
    <div className="w-full bg-red px-29">
      <Heading>{t('chooseYourService')}</Heading>
    </div>
  );
};

export { ContentCreditCard };
