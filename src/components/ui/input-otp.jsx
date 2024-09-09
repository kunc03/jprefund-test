/* eslint-disable import/named */
/* eslint-disable import/no-self-import */

'use client';

import * as React from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';
import { Dot } from 'lucide-react';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/utils';

const InputOTP = React.forwardRef(
  (
    {
      className,
      label = null,
      formClassName,
      containerClassName,
      hasForm = false,
      required = false,
      description = null,
      ...props
    },
    ref,
  ) => {
    const InputOtpComp = (
      <OTPInput
        ref={ref}
        containerClassName={cn(
          'flex items-center gap-2 has-[:disabled]:opacity-50',
          containerClassName,
        )}
        className={cn('disabled:cursor-not-allowed', className)}
        {...props}
      />
    );

    if (!hasForm) {
      return InputOtpComp;
    }

    return (
      <FormItem className={cn('flex gap-3 flex-col')}>
        {label && (
          <FormLabel className="shrink-0 text-1622">
            {label}
            {required && <span className="text-red">*</span>}
          </FormLabel>
        )}
        <div className="!mt-0 flex flex-1 flex-col ">
          <FormControl>{InputOtpComp}</FormControl>
          {description && (
            <FormDescription className="text-sm font-normal text-black">
              {description}
            </FormDescription>
          )}
          <FormMessage className="ml-28 mt-6 text-1217 font-normal text-red-error" />
        </div>
      </FormItem>
    );
  },
);
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
));
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex h-48 w-64 items-center justify-center border border-gray-500 text-sm transition-all rounded-4',
        isActive && 'z-10 ring-1 ring-red ring-offset-background',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-gray-50 duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React.forwardRef(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
