import { getTranslations } from 'next-intl/server';

import { Header, Heading } from '@/components';

import {
  ButtonCamera,
  DetailBottomDrawer,
  SummaryCard,
  AdvancePreparation,
  Content,
} from './_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Home = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return (
    <>
      <Header />
      <Heading className="text-center text-lg font-medium">
        {t('recordOfTaxFreePurchases')}
      </Heading>
      <div className="flex flex-row items-center justify-center gap-7 px-2.5 pt-3.5">
        <SummaryCard
          number={46520}
          title={t('refundApplication')}
          status="refundApplication"
        />
        <SummaryCard
          title={t('remittanceProcedureCompleted')}
          status="remittanceProcedureCompleted"
        />
        <SummaryCard title={t('nonRefundable')} status="nonRefundable" />
      </div>
      <AdvancePreparation />

      <Content />

      <ButtonCamera />

      <DetailBottomDrawer />
    </>
  );
};

export default Home;
