import { Header, Heading } from '@/components';
import { cn } from '@/utils';
import { getTranslations } from 'next-intl/server';
import {
  AuthBottomDrawer,
  ButtonCamera,
  ButtonFilter,
  DetailBottomDrawer,
  FilterBottomDrawer,
  SummaryCard,
} from '../_components';
import { ContentUnKyc } from './_components';

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
              <p
                className={cn(
                  'grow text-center text-1822 medium:text-1722 small:text-1422',
                )}
              >
                {t('recordOfTaxFreePurchases')}
              </p>
              <ButtonFilter className="shrink-0" />
            </div>
          </Heading>
          <div
            className={cn(
              'inline-flex w-full py-12 gap-7 bg-white px-1 overflow-x-auto whitespace-nowrap',
            )}
          >
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
        <ContentUnKyc status="refundApplication" />
        <ButtonCamera />
      </div>
      <DetailBottomDrawer isOpen={searchParams.checkreceipt} />
      <FilterBottomDrawer />
      <AuthBottomDrawer />
    </>
  );
};

export default HomePage;
