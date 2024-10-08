import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-red-light text-white hover:bg-red-light/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const Badge = ({ className, variant, ...props }) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
};

export { Badge, badgeVariants };
