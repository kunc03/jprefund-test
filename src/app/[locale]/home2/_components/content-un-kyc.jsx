'use client';

import { Heading, PurchaseItemSection } from '@/components';
import { cn, isObjectEmpty } from '@/utils';
import { useEffect, useState } from 'react';
import { DisabledDialog } from './disabled-dialog';
import { useActiveSummary } from '../../home/_hooks/use-active-summary';
import { AdvancePreparation } from '../../home/_components';

const EmptyState = ({ t }) => (
  <div className="mx-auto flex size-full grow flex-col gap-2  md:max-w-xs">
    <div className="mt-14 flex shrink-0 flex-col items-center justify-center gap-2">
      <Heading className={cn('text-lg text-center font-bold small:text-1422')}>
        {t('noTaxExemptionRecordsSaved')}
      </Heading>
      <Heading
        className="w-210 max-w-210 text-center text-1422 font-medium small:text-1222"
        level="3"
      >
        {t('voucherQrCodePleaseScan')}
      </Heading>
    </div>
    <div className="relative mb-80 flex grow flex-col items-center small:h-[2.5rem]">
      <div className="w-0.5 grow bg-gray-400" />
      <div className="-mt-1 size-0 border-x-8 border-t-8 border-x-transparent border-t-gray-400" />
    </div>
  </div>
);

const ContentUnKyc = ({ t, setIsAuth, isAuth }) => {
  const { selectedData } = useActiveSummary();
  const { selectedValue } = useActiveSummary();
  const [isUnKyc, setIsUnKyc] = useState(null);
  const [resetUnKyc, setResetUnKyc] = useState(true);

  useEffect(() => {
    // Set isUnKyc to true only when selectedData is not empty
    if (resetUnKyc && !isObjectEmpty(selectedValue)) {
      setIsUnKyc(true);
      setResetUnKyc(false);
    }
  }, [selectedValue, resetUnKyc]);

  useEffect(() => {
    // Reset isUnKyc to false when isAuth becomes true
    if (isAuth) {
      setIsUnKyc(false);
    }
  }, [isAuth]);

  return (
    <>
      {!isAuth && (
        <div
          className=""
          onClick={() => setIsAuth(true)}
          role="button"
          aria-hidden="true"
        >
          <AdvancePreparation />
        </div>
      )}

      <section className="flex grow flex-col flex-wrap">
        {isObjectEmpty(selectedData) && <EmptyState t={t} />}
        {!isObjectEmpty(selectedData) && (
          <div
            className={cn(
              'flex pb-2 flex-1 flex-col items-center overflow-y-auto',
            )}
          >
            {Object.entries(selectedData).map(([date, items]) => {
              return (
                <PurchaseItemSection
                  date={date}
                  items={items}
                  key={date}
                  setIsUnKyc={setIsUnKyc}
                  isAuth={isAuth}
                />
              );
            })}
          </div>
        )}
      </section>
      <DisabledDialog isOpen={isAuth} label="receiptHaveBeenAuthenticated" />
      <DisabledDialog
        isOpen={isUnKyc && !isAuth}
        label="disableItemNotification"
      />
    </>
  );
};

export { ContentUnKyc };
