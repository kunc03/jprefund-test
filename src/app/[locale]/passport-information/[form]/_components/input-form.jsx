/* eslint-disable no-unused-vars */

'use client';

import { Heading, Input } from '@/components';
import { cn } from '@/utils';
import React, { useState } from 'react';

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
  const [inputValue, setInputValue] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

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
          'h-[50px] text-gray border-gray-300 border rounded-[6px] focus:!border-red hover:!border-red',
          className,
        )}
      />
    </>
  );
};

export default InputForm;
