/* eslint-disable no-unused-vars */

'use client';

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components';
import { cn } from '@/utils';
import { ChevronDown } from 'lucide-react';
import React from 'react';

const StatusOption = ({ t, filter, values }) => {
  const [isValue, setIsValue] = React.useState('');

  const handleChange = (value) => {
    setIsValue(value);
  };

  return (
    <Select className="w-full">
      <SelectTrigger
        className={cn(
          'text-1313 font-medium flex cursor-pointer items-center justify-between rounded p-14 transition-colors focus:!outline-none focus:!ring-transparent h-12',

          '!bg-white-dark text-gray hover:!border-red border-gray-300 border',
        )}
      >
        <SelectValue placeholder={t('placeholder.status')} />
      </SelectTrigger>

      <SelectContent isInsideModal className={cn('bg-white ')}>
        {values.map((value) => (
          <SelectItem
            className={cn(
              'text-1313 font-medium flex cursor-pointer items-center justify-between rounded-4 p-14 transition-colors mb-1',
              'hover:border-red bg-white-dark text-gray border',
            )}
            value={value}
            key={value}
          >
            {t(value)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { StatusOption };
