'use client';

import { Heading } from '@/components/heading';
import { useActiveSummary } from '../_hooks/use-active-summary';
import { cn, formatNumber, formatDateSimple } from '@/utils';
import { useEffect } from 'react';
import dataDummy from '@/dummy-data.json';

const SummaryCard = ({ title, number = 0, className, status }) => {
  const { selectedValue, onSelected, onFetching } = useActiveSummary();

  const handleOnClick = () => {
    onSelected(status);
  };

  useEffect(() => {
    if (selectedValue === status) {
      const filteredData = dataDummy
        .filter((item) => item.status === status)
        .reduce((acc, item) => {
          const dateOnly = formatDateSimple(item.date);
          if (!acc[dateOnly]) {
            acc[dateOnly] = [];
          }
          acc[dateOnly].push(item);
          return acc;
        }, {});

      const sorted = Object.keys(filteredData)
        .sort((a, b) => new Date(b) - new Date(a))
        .reduce((acc, date) => {
          acc[date] = filteredData[date];
          return acc;
        }, {});

      onFetching(sorted);
    }
  }, [selectedValue, status, onFetching]);

  const isActive = selectedValue === status;

  return (
    <div
      className={cn(
        'py-1 px-2.5 h-68 rounded-lg flex flex-col justify-between cursor-pointer w-full text-white outline-none',
        !isActive && 'bg-gray-500',
        isActive && status === 'refundApplication' && 'bg-orange',
        isActive && status === 'remittanceProcedureCompleted' && 'bg-blue',
        isActive && status === 'nonRefundable' && 'bg-red-dark',
        className,
      )}
      aria-hidden="true"
      onClick={() => {
        handleOnClick();
      }}
      role="button"
      tabIndex="0"
    >
      <Heading className="text-1012 font-bold" level={5}>
        {title}
      </Heading>
      <Heading className="text-right text-lg  font-bold" level={1}>
        {formatNumber(number, true)}
      </Heading>
    </div>
  );
};

export { SummaryCard };
