'use client';

import { Header, Heading } from '@/components';
import { cn } from '@/utils';
import {
  AuthBottomDrawer,
  ButtonCamera,
  ButtonFilter,
  DetailBottomDrawer,
  FilterBottomDrawer,
  SummaryCard,
} from '../home/_components';
import { ContentUnKyc } from './_components';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const HomePage = ({ searchParams }) => {
  const t = useTranslations('home');
  const [isAuth, setIsAuth] = useState(false);

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
        <ContentUnKyc isAuth={isAuth} setIsAuth={setIsAuth} t={t} />
        <ButtonCamera />
      </div>
      <DetailBottomDrawer isOpen={searchParams.checkreceipt} />
      <FilterBottomDrawer />
      <AuthBottomDrawer />
    </>
  );
};

export default HomePage;
