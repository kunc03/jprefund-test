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
import React from 'react';

const OPTIONS = [
  { value: 'submitted', label: 'submitted' },
  { value: 'jcApproval', label: 'jcApproval' },
  { value: 'storeApproval', label: 'storeApproval' },
  { value: 'endDate', label: 'endDate' },
];
const StatusOption = ({ t, selectedDate, isSelected, handleChange }) => {
  const [isValue, setIsValue] = React.useState('');

  return (
    <Select
      onValueChange={(value) => {
        setIsValue(value);
        handleChange(value);
      }}
      className="w-full"
    >
      <SelectTrigger
        className={cn(
          'text-1313 font-medium flex cursor-pointer items-center justify-between rounded p-14 transition-colors focus:!outline-none focus:!ring-transparent h-12 relative',

          !selectedDate && 'text-gray-50',
          isSelected
            ? 'bg-red text-white'
            : '!bg-white-dark text-gray hover:!border-red border-gray-300 border',
        )}
        classNameIcon={cn(isSelected && 'text-white')}
      >
        <SelectValue placeholder="---">
          {!isSelected ? '---' : t(isValue)}
        </SelectValue>
      </SelectTrigger>

      <SelectContent
        className="bg-white focus:!outline-none focus:!ring-transparent"
        isInsideModal
      >
        {OPTIONS.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {t(item.label)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { StatusOption };
