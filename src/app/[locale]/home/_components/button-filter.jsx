'use client';

import { useDrawer } from '@/hooks';
import Image from 'next/image';
import { cn } from '@/utils';

const ButtonFilter = ({ className, hasBack = false }) => {
  const { setIsOpen } = useDrawer();

  return (
    <div
      className={cn(
        className,
        hasBack ? 'items-center justify-start' : 'items-center justify-between',
      )}
    >
      {!hasBack && (
        <div className={cn('absolute top-0 right-2.5 p-10 cursor-pointer')}>
          <Image
            alt="filter-button"
            className="size-auto"
            height={4}
            src="/icons/triple-dot.svg"
            width={20}
            onClick={() => setIsOpen(true)}
          />
        </div>
      )}
    </div>
  );
};

export { ButtonFilter };
