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
}) => {
  return (
    <>
      <Heading level={5} className="text-1422 font-medium">
        {t(label)}
      </Heading>

      <Input
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={type}
        className={cn(
          'h-[50px] text-gray border-gray-300 border rounded-[4px] focus:!border-red hover:!border-red',
          className,
        )}
      />
    </>
  );
};

export default InputForm;
