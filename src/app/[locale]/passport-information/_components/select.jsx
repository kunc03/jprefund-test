/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */

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
import React, { useEffect, useState } from 'react';

const SelectOptions = ({ values, className, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState('');

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        className={cn(
          'w-full text-1313 font-medium flex cursor-pointer items-center justify-between rounded p-14 transition-colors focus:!outline-none focus:!ring-transparent h-[50px] relative',
          className,
          '!bg-white text-gray hover:!border-red border-gray-300 border',
        )}
      >
        {isSelected || values[0]}
        <ChevronDown
          size={24}
          className={cn(
            'absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-105',
            isOpen && 'rotate-180',
          )}
        />
      </button>
      {isOpen && (
        <ul className="mt-1 overflow-y-auto focus:!outline-none focus:!ring-transparent">
          {values?.map((value, index) => (
            <li
              key={index}
              className={cn(
                'text-1313 font-medium flex cursor-pointer items-center justify-between rounded-4 p-14 transition-colors mb-1',
                'hover:border-red focus:border-red bg-white text-gray border',
              )}
              onClick={() => {
                if (value !== isSelected) {
                  setIsSelected(value);
                  setIsOpen(false);
                  handleChange(value);
                }
              }}
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { SelectOptions };
