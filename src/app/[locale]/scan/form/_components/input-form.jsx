/* eslint-disable no-unused-vars */

'use client';

import { Heading, Input } from '@/components';
import { cn } from '@/utils';
import React from 'react';

const InputForm = ({
  t,
  defaultValue,
  label,
  placeholder,
  type,
  className,
  value,
  symbol,
  onChange,
}) => {
  return (
    <div className="relative flex flex-col gap-1">
      <Heading level={5} className="text-1422 font-medium">
        {t(label)}
      </Heading>

      <Input
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        type={type}
        className={cn(
          'h-50 text-gray border-gray-300 border !rounded-6 pr-43 focus:!border-red',
          className,
        )}
      />
      <span className="absolute text-2020 font-medium bottom-[14.5px] right-3 text-gray">
        円
      </span>
    </div>
  );
};

export { InputForm };
