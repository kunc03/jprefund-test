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
import { useTranslations } from 'next-intl';
import React from 'react';

const SelectOptions = ({ values, placeholder, t, className }) => {
  const [isValue, setIsValue] = React.useState('');

  const handleChange = (value) => {
    setIsValue(value);
  };

  return (
    <Select className="w-full ">
      <SelectTrigger
        className={cn(
          'text-1313 font-medium flex cursor-pointer items-center justify-between rounded p-14 transition-colors focus:!outline-none focus:!ring-transparent h-[50px] relative',
          className,
          '!bg-white text-gray hover:!border-red border-gray-300 border',
        )}
      >
        <SelectValue placeholder={values[0]} />
        <span
          className={cn(
            'absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-105',
          )}
        >
          <ChevronDown size={24} />
        </span>
      </SelectTrigger>

      <SelectContent className="bg-white focus:!outline-none focus:!ring-transparent">
        {values.map((value, index) => (
          <SelectItem
            key={index}
            className={cn(
              'text-1313 font-medium flex cursor-pointer items-center justify-between rounded-4 p-14 transition-colors mb-1',
              'hover:border-red focus:border-red bg-white text-gray border',
            )}
            value={value}
          >
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { SelectOptions };
