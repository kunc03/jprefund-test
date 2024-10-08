'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/utils';

const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const Select = ({
  children,
  hasForm = false,
  isRequired = false,
  isResponsive,
  containerClassName,
  label,
  labelClassName,
  description,
  error,
  ...props
}) => {
  const SelectComp = (
    <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>
  );

  if (!hasForm) return SelectComp;

  return (
    <FormItem className="flex w-full flex-col gap-3">
      {label && (
        <FormLabel className="shrink-0 text-1622">
          {label}
          {isRequired && <span className="text-red">*</span>}
        </FormLabel>
      )}
      <div className="!mt-0 flex flex-1 flex-col">
        {SelectComp}
        {description && (
          <FormDescription className="text-sm font-normal text-black">
            {description}
          </FormDescription>
        )}
        <FormMessage className="mt-6 text-1217 font-normal text-red-error" />
      </div>
    </FormItem>
  );
};
Select.displayName = SelectPrimitive.Root.displayName;

const SelectTrigger = React.forwardRef(
  (
    { value, className, classNameIcon, children, hasForm = false, ...props },
    ref,
  ) => {
    const SelectTriggerComp = (
      <SelectPrimitive.Trigger
        ref={ref}
        className={cn(
          'bg-white flex w-full items-center justify-between rounded-md border border-gray-300  text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-red disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 h-50 px-14 py-18',
          className,
          value && '!border-gray-300',
        )}
        {...props}
      >
        {children}
        <SelectPrimitive.Icon asChild>
          <ChevronDown
            className={cn('size-16 font-medium text-gray', classNameIcon)}
          />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    );

    if (!hasForm) {
      return SelectTriggerComp;
    }

    return <FormControl>{SelectTriggerComp}</FormControl>;
  },
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollUpButton
      ref={ref}
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronUp className="size-16 text-gray" />
    </SelectPrimitive.ScrollUpButton>
  ),
);
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollDownButton
      ref={ref}
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronDown className="size-16" />
    </SelectPrimitive.ScrollDownButton>
  ),
);
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef(
  (
    {
      className,
      children,
      position = 'popper',
      isInsideModal = false,
      ...props
    },
    ref,
  ) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-white',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className,
          isInsideModal ? 'z-50' : 'z-30',
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  ),
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none bg-white focus:bg-white-dark focus:text-black hover:bg-white-dark data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  ),
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
