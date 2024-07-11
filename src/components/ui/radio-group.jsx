'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/utils';

const RadioGroup = React.forwardRef(
  ({ className, label, description, ...props }, ref) => {
    return (
      <FormItem className="flex w-full flex-col gap-1.5">
        {label && (
          <FormLabel className="flex items-center text-2020 font-medium text-black">
            {label}
          </FormLabel>
        )}
        <div className="!mt-0 flex flex-1 flex-col">
          <FormControl>
            <RadioGroupPrimitive.Root
              className={cn('grid gap-2', className)}
              {...props}
              ref={ref}
            />
          </FormControl>

          <FormMessage className="mt-6 text-1217 font-normal text-red-error" />
        </div>
      </FormItem>
    );
  },
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef(
  ({ className, value, label, selectedValue, ...props }, ref) => {
    return (
      <FormControl>
        <div className="flex w-full flex-row items-center gap-16">
          <RadioGroupPrimitive.Item
            ref={ref}
            className={cn(
              'aspect-square size-22 rounded-full border border-gray-400 text-red focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-secondary',
              className,
            )}
            {...props}
            value={value}
          >
            <div className="flex items-center justify-center">
              <Circle
                className={cn(
                  'size-14',
                  selectedValue === value
                    ? 'fill-current text-current'
                    : 'fill-gray-400 text-gray-400',
                )}
              />
            </div>
          </RadioGroupPrimitive.Item>
          {label && (
            <FormLabel
              className={cn(
                'shrink-0 text-2020 font-medium',
                selectedValue !== '' ? ' text-black' : ' text-gray-400',
              )}
            >
              {label}
            </FormLabel>
          )}
        </div>
      </FormControl>
    );
  },
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
