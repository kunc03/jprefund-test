'use client';

import { useTranslations } from 'next-intl';
import { Button, Heading } from '@/components';
import { useEffect, useState } from 'react';
import { InputForm } from './_components/input-form';
import { InputDate } from './_components/input-date';
import { cn } from '@/utils';
import Link from 'next/link';

const FormScan = () => {
  const t = useTranslations('scan');

  const defaultValue = {
    transactionDate: '1997.9.25',
    totalTransaction: '7201',
  };

  const [isForm, setIsForm] = useState({
    transactionDate: defaultValue.transactionDate,
    totalTransaction: defaultValue.totalTransaction,
  });

  useEffect(() => {
    setIsForm((prevForm) => ({
      ...prevForm,
      totalTransaction: Number(
        prevForm.totalTransaction.replace(/,/g, ''),
      ).toLocaleString('en-US'),
    }));
  }, []);

  const handleSelectedDate = (date) => {
    setIsForm((old) => {
      return { ...old, transactionDate: date };
    });
  };

  const handleTotalTransaction = (e) => {
    const value = e.target.value.replace(/,/g, '');
    const numericValue = parseFloat(value);

    // Format the value only if it's a valid number
    const formattedValue = !Number.isNaN(numericValue)
      ? numericValue.toLocaleString('en-US')
      : '';

    setIsForm((prevForm) => ({
      ...prevForm,
      totalTransaction: formattedValue,
    }));
  };

  return (
    <div className={cn('flex flex-col gap-9 justify-center items-center')}>
      <div className={cn('w-full flex flex-col gap-5 text-gray')}>
        <div className="flex flex-col gap-1">
          <Heading level={5} className="text-1422 font-medium">
            {t('transactionDate')}
          </Heading>

          <InputDate
            selectedDate={isForm.transactionDate}
            label={t('transactionDate')}
            defaultValue={defaultValue.transactionDate}
            onHandleSelected={handleSelectedDate}
            filter={isForm}
          />
        </div>

        <InputForm
          t={t}
          label="totalTransactionAmount"
          // placeholder={t('totalTransactionAmount')}
          value={isForm.totalTransaction}
          onChange={handleTotalTransaction}
          type="text"
          className={cn('text-2020 font-medium text-end')}
        />
      </div>

      <Button
        key="submit"
        className={cn('!h-42 !shrink-0 !px-14 !py-13 w-[168px]')}
      >
        <Link
          href={{
            pathname: '/home',
            query: { checkreceipt: 'submit' },
          }}
        >
          {t('submit')}
        </Link>
      </Button>
    </div>
  );
};

export { FormScan };
