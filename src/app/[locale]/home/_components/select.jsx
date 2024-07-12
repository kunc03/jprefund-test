/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */

'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components';
import { cn } from '@/utils';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const SelectOptions = ({
  t,
  values,
  handleChange,
  selectedDate,
  isSelected,
}) => {
  const [selectedStatus, setSelectedStatus] = useState('');

  return (
    <div className="w-full">
      <Select
        onValueChange={(value) => {
          setSelectedStatus(value);
          handleChange(selectedStatus);
        }}
      >
        <SelectTrigger
          className={cn(
            'text-1616 font-medium flex cursor-pointer items-center justify-between rounded-6 p-14 transition-colors focus:!outline-none focus:!ring-transparent h-12',
            !selectedDate && 'text-gray-50',
            isSelected
              ? 'bg-red text-white'
              : '!bg-white-dark text-gray hover:!border-red border-gray-300 border',
          )}
          classNameIcon={cn(isSelected && 'text-white')}
        >
          <SelectValue>{isSelected ? t(selectedStatus) : '---'}</SelectValue>
        </SelectTrigger>
        <SelectContent isInsideModal className="bg-white">
          {values.map((value) => (
            <SelectItem value={value} key={value}>
              {t(value)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export { SelectOptions };
