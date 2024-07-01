import * as React from 'react';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/utils';

const Input = React.forwardRef(
  (
    {
      hasForm = false,
      disabled = false,
      required = false,
      label = null,
      pre = null,
      suf = null,
      description = null,
      labelClassName,
      className,
      type,
      ...props
    },
    ref,
  ) => {
    const PreInputComp = <div className="px-3">{pre}</div>;
    const SufInputComp = <div className="px-3">{suf}</div>;

    const InputComp = (
      <input
        ref={ref}
        autoComplete="off"
        autoCorrect="off"
        className={cn(
          'flex w-full bg-white px-2.5 rounded-sm py-18 text-1613 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:font-medium placeholder:text-1613 placeholder:text-gray-300 disabled:cursor-not-allowed disabled:text-white focus-visible:outline-none focus-visible:ring-offset-0 ',
          className,
        )}
        disabled={disabled}
        type={type}
        {...props}
      />
    );

    if (!hasForm) {
      return InputComp;
    }

    return (
      <FormItem className={cn('flex w-full gap-3 flex-col ')}>
        {label && (
          <FormLabel className="shrink-0 text-1622">
            {label}
            {required && <span className="text-red">*</span>}
          </FormLabel>
        )}
        <div className="!mt-0 flex flex-1 flex-col ">
          <div
            className={cn(
              'flex flex-1 items-center focus-within:ring-1 focus-within:ring-red border-gray-300 focus-within:rounded-sm bg-white',
              disabled ? 'cursor-not-allowed' : '',
            )}
          >
            {pre && PreInputComp}
            <FormControl>{InputComp}</FormControl>
            {suf && SufInputComp}
          </div>
          {description && (
            <FormDescription className="text-sm font-normal text-black">
              {description}
            </FormDescription>
          )}
          <FormMessage className={cn('text-sm font-normal', 'text-red')} />
        </div>
      </FormItem>
    );
  },
);
Input.displayName = 'Input';

export { Input };
