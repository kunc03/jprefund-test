import { getTranslations } from 'next-intl/server';

import { Header, Heading } from '@/components';

import {
  ButtonCamera,
  DetailBottomDrawer,
  SummaryCard,
  AdvancePreparation,
  Content,
  FilterBottomDrawer,
  ButtonFilter,
  AuthBottomDrawer,
} from './_components';
import { cn } from '@/utils';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const HomePage = async ({ params, searchParams }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return (
    <>
      <div className="relative flex min-h-dvh flex-col">
        <div className="border-b border-b-gray-500 bg-white">
          <Header />
          <Heading className="bg-white text-center text-lg font-medium ">
            <div className="relative mt-12 flex items-center justify-between gap-2 px-2.5">
              <p
                className={cn(
                  'grow text-center text-1822 medium:text-1722 small:text-1422',
                )}
              >
                {t('taxFreePurchases')}
              </p>
              <ButtonFilter className="shrink-0" />
            </div>
          </Heading>
          <div
            className={cn('grid grid-cols-3 w-full py-12 gap-6 bg-white px-1')}
          >
            <SummaryCard
              number={9999999}
              title={t('transactionRecord')}
              status="transactionRecord"
            />
            <SummaryCard
              number={9999999}
              title={t('completedRemittance')}
              status="completedRemittance"
            />
            <SummaryCard
              number={9999999}
              title={t('nonRefundable')}
              status="nonRefundable"
            />
          </div>
        </div>
        <AdvancePreparation />
        <Content />
        <ButtonCamera />
        <AuthBottomDrawer />
      </div>
      <DetailBottomDrawer isOpen={searchParams.checkreceipt} />
      <FilterBottomDrawer />
    </>
  );
};

export default HomePage;
