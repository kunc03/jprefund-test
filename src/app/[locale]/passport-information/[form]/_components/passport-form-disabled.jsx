'use client';

import { cn } from '@/utils';
import FormItem from './form-item';

const PassportFormDisabled = ({ isForm }) => {
  const keys = Object.keys(isForm);

  return (
    <div className={cn('flex flex-col gap-1 w-full')}>
      {keys.map((key) => (
        <div key={key} className="">
          <FormItem label={key} value={isForm[key]} />
        </div>
      ))}
    </div>
  );
};

export { PassportFormDisabled };
