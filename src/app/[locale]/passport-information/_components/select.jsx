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

const SelectOptions = ({ values, handleChange }) => {
  const [selectedPhoneArea, setSelectedPhoneArea] = useState('');

  return (
    <div className="w-full">
      <Select
        onValueChange={(value) => {
          setSelectedPhoneArea(value);
          handleChange(value);
        }}
      >
        <SelectTrigger
          className={cn(
            'text-1313 font-medium flex cursor-pointer items-center justify-between rounded-6 p-14 transition-colors focus:!outline-none focus:!ring-transparent h-13 relative',

            '!bg-white text-gray hover:!border-red border-gray-300 border',
          )}
          value={selectedPhoneArea}
        >
          <SelectValue placeholder={values[0]} />
          <ChevronDown size={24} className={cn('absolute right-3')} />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {values.map((value) => (
            <SelectItem value={value} key={value}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export { SelectOptions };
