'use client';

import { Heading, PurchaseItemSection } from '@/components';
import { useTranslations } from 'next-intl';
import { useActiveSummary } from '../_hooks/use-active-summary';
import { isObjectEmpty } from '@/utils';

const EmptyState = ({ t }) => (
  <div className="mx-auto size-full flex-1 flex-col gap-2 pb-6 md:max-w-xs ">
    <div className="mt-14 flex shrink-0 flex-col items-center justify-center gap-2">
      <Heading className="text-lg font-bold small:text-1422">
        {t('noTaxExemptionRecordsSaved')}
      </Heading>
      <Heading
        className="w-210 max-w-210 text-center text-1422 font-medium small:text-1222"
        level="3"
      >
        {t('voucherQrCodePleaseScan')}
      </Heading>
    </div>
    <div className="relative flex h-[calc(100dvh-30rem)] flex-col items-center small:h-[2.5rem] ">
      <div className="w-0.5 grow bg-gray-400" />
      <div className="-mt-1 size-0 border-x-8 border-t-8 border-x-transparent border-t-gray-400" />
    </div>
  </div>
);

const Content = () => {
  const t = useTranslations('home');
  const { selectedData } = useActiveSummary();

  return (
    <section className="flex h-[calc(100dvh-230px)] flex-wrap pb-77">
      {isObjectEmpty(selectedData) && <EmptyState t={t} />}
      {!isObjectEmpty(selectedData) && (
        <div className="flex h-full flex-1 flex-col items-center overflow-y-auto">
          {Object.entries(selectedData).map(([date, items]) => (
            <PurchaseItemSection date={date} items={items} key={date} />
          ))}
        </div>
      )}
    </section>
  );
};

export { Content };
