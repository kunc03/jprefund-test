'use client';

import { Header } from '@/components';
import { useTranslations } from 'next-intl';

const HeaderPage = ({ method }) => {
  const t = useTranslations('refundMethod');
  if (method === 'cashless') return <Header hasBack title={t('cashLess')} />;
  if (method === 'bank-transfer')
    return <Header hasBack title={t('bankTransfer')} />;

  return <Header hasBack title={t('creditCard')} />;
};

export { HeaderPage };
