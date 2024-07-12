import Image from 'next/image';
import React from 'react';

import { Heading } from '@/components/heading';
import { cn } from '@/utils';

const StoreInformation = ({ imageSrc, storeName, storeAdd }) => {
  return (
    <div className={cn('flex flex-row gap-2 items-center')}>
      <Image
        alt={storeName}
        height={38}
        src={imageSrc}
        width={38}
        className={cn('rounded-4 min-h-35 min-w-35 shrink-0')}
      />

      <div>
        <Heading className="text-1620.8 font-bold text-gray" level={2}>
          {storeName}
        </Heading>
        <p className="text-1215.6 font-normal text-gray">{storeAdd}</p>
      </div>
    </div>
  );
};

export { StoreInformation };
