'use client';

import { formatDateSimple, formatMonthOnly } from '@/utils';
import { Heading } from './heading';
import { PurchaseItemCard } from './purchase-item-card';
import { usePathname } from 'next/navigation';

const PurchaseItemSection = ({ date, items, setIsUnKyc, isAuth }) => {
  const pathname = usePathname();

  const transactionRecord = pathname.includes('transaction-record');

  return (
    <section key={date} className="w-full px-3">
      <Heading
        level={1}
        className="my-1 w-full text-center text-1522  font-medium"
      >
        {transactionRecord
          ? formatDateSimple(date)
          : `${formatMonthOnly(date)}.`}
      </Heading>
      <div className="mt-3 flex w-full flex-col gap-3">
        {items.map((item) => {
          return (
            <PurchaseItemCard
              setIsUnKyc={setIsUnKyc}
              key={item.id}
              item={item}
              isAuth={isAuth}
            />
          );
        })}
      </div>
    </section>
  );
};

export { PurchaseItemSection };
