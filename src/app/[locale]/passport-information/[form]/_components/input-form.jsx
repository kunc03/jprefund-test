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
  onChange,
}) => {
  return (
    <>
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
          'h-56 text-gray border-gray-300 border !rounded-6 focus:!border-red hover:!border-red',
          className,
        )}
      />
    </>
  );
};

export default InputForm;
