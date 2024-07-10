'use client';

import { Header } from '@/components';
import { useTranslations } from 'next-intl';
import { useRegistrationOptions } from '../../_hooks/use-registration-options';
import { useRouter } from 'next/navigation';

const HeaderPage = ({ method }) => {
  const t = useTranslations('refundMethod');
  const { data, setData } = useRegistrationOptions();
  const router = useRouter();

  if (method === 'cashless') return <Header hasBack title={t('cashLess')} />;
  if (method === 'bank-transfer') {
    const handleBack = () => {
      if (data[1].registrationInformation?.financialInstituteName) {
        setData('2', {
          financialInstituteName: '',
        });
      } else {
        router.back();
      }
    };
    return (
      <Header hasBack title={t('bankTransfer')} onHandleBack={handleBack} />
    );
  }

  return <Header hasBack title={t('creditCard')} />;
};

export { HeaderPage };
