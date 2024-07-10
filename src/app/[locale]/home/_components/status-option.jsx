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

const StatusOption = ({ t, filter }) => {
  const [isValue, setIsValue] = React.useState('');

  const handleChange = (value) => {
    setIsValue(value);
  };

  return (
    <Select className="w-full ">
      <SelectTrigger
        className={cn(
          'text-1313 font-medium flex cursor-pointer items-center justify-between rounded p-14 transition-colors focus:!outline-none focus:!ring-transparent h-12 relative',

          '!bg-white-dark text-gray hover:!border-red border-gray-300 border',
        )}
      >
        <SelectValue placeholder={t('placeholder.status')} />
        <span
          className={cn(
            'absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-105',
          )}
        >
          <ChevronDown size={24} />
        </span>
      </SelectTrigger>

      <SelectContent className="bg-white focus:!outline-none focus:!ring-transparent">
        <SelectItem
          className={cn(
            'text-1313 font-medium flex cursor-pointer items-center justify-between rounded-4 p-14 transition-colors mb-1',
            'hover:border-red bg-white-dark text-gray border',
          )}
          value="submitted"
        >
          {t('submitted')}
        </SelectItem>
        <SelectItem
          className={cn(
            'text-1313 font-medium flex cursor-pointer items-center justify-between rounded-4 p-14 transition-colors mb-1',
            ' hover:border-red bg-white-dark text-gray border',
          )}
          value="jcApproval"
        >
          {t('jcApproval')}
        </SelectItem>
        <SelectItem
          className={cn(
            'text-1313 font-medium flex cursor-pointer items-center justify-between rounded-4 p-14 transition-colors mb-1',
            ' hover:border-red bg-white-dark text-gray border',
          )}
          value="storeApproval"
        >
          {t('storeApproval')}
        </SelectItem>
        <SelectItem
          className={cn(
            'text-1313 font-medium flex cursor-pointer items-center justify-between rounded-4 p-14 transition-colors',
            ' hover:border-red bg-white-dark text-gray border',
          )}
          value="endDate"
        >
          {t('endDate')}
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export { StatusOption };
