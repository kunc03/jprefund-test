import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-21 text-1515 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-gray-400 disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-red text-white hover:bg-red/90',
        floating:
          'rounded-full bg-red text-white shadow-floating hover:bg-red/90',
        outline:
          'border border-red bg-white text-red hover:bg-red hover:text-white',
      },
      size: {
        default: 'h-11 px-5 py-3.5',
        floating: 'size-52',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
