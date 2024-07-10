import Image from 'next/image';
import React from 'react';

import { Heading } from '@/components/heading';

const StoreInformation = ({ imageSrc, storeName, storeAdd }) => {
  return (
    <div className="flex flex-row gap-3">
      <Image
        alt={storeName}
        height={38}
        src={imageSrc}
        width={38}
        className="min-h-38 min-w-38 shrink-0"
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
