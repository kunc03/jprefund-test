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

const SelectOptions = ({ values, handleChange, defaultValue }) => {
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
            'text-1313 font-medium flex cursor-pointer items-center justify-between rounded-6 p-14 transition-colors focus:!outline-none focus:!ring-transparent h-13',

            '!bg-white text-gray hover:!border-red border-gray-300 border',
          )}
          value={selectedPhoneArea}
        >
          <SelectValue placeholder={defaultValue} />
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
