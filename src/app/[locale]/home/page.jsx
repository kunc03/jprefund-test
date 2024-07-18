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
            <div className="mt-12 flex items-center justify-between gap-2 px-2.5">
              <p className="grow text-center text-1822 small:text-1422">
                {t('recordOfTaxFreePurchases')}
              </p>
              <ButtonFilter className="shrink-0" />
            </div>
          </Heading>
          <div
            className={cn(
              'flex flex-row items-center justify-center py-2 gap-7 bg-white px-1 overflow-x-auto',
            )}
          >
            {/* Ganjelan Scrolling */}
            {/* Dont erase */}
            <div className="h-[10px] w-[15px] text-white small:flex medium:hidden">
              Abc
            </div>
            <SummaryCard
              number={99999999}
              title={t('refundApplication')}
              status="refundApplication"
            />
            <SummaryCard
              number={99999999}
              title={t('remittanceProcedureCompleted')}
              status="remittanceProcedureCompleted"
            />
            <SummaryCard
              number={99999999}
              title={t('nonRefundable')}
              status="nonRefundable"
            />
          </div>
        </div>
        <AdvancePreparation />
        <Content />
        <ButtonCamera />
      </div>
      <DetailBottomDrawer isOpen={searchParams.checkreceipt} />
      <FilterBottomDrawer />
      <AuthBottomDrawer />
    </>
  );
};

export default HomePage;
