import { getTranslations } from 'next-intl/server';
import {
  ContentCreditCard,
  ContentBankTransfer,
  HeaderPage,
  ContentCashLess,
} from './_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'refundMethod' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Register = async ({ params }) => {
  const { method } = params;

  return (
    <div className="flex min-h-dvh w-full flex-col items-center">
      <HeaderPage method={method} />
      <div className="flex w-full grow flex-col items-center justify-center">
        {method === 'credit-card' && <ContentCreditCard />}
        {method === 'bank-transfer' && <ContentBankTransfer />}
        {method === 'cashless' && <ContentCashLess />}
      </div>
    </div>
  );
};

export default Register;
