'use client';

import { useDrawer } from '@/hooks';
import Image from 'next/image';
import { cn } from '@/utils';

const ButtonFilter = ({ hasBack = false }) => {
  const { setIsOpen } = useDrawer();

  return (
    <div
      className={cn(
        '',
        hasBack ? 'items-center justify-start' : 'items-center justify-between',
      )}
    >
      {!hasBack && (
        <div className="absolute right-2.5">
          <Image
            alt="filter-button"
            className="cursor-pointer"
            height={24}
            src="/icons/triple-dot.svg"
            width={24}
            onClick={() => setIsOpen(true)}
          />
        </div>
      )}
    </div>
  );
};

export { ButtonFilter };
