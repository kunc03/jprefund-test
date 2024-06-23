import React from 'react';
import Image from 'next/image';
import { Heading } from '@/components/heading';

const StoreInformation = ({ imageSrc, storeName, storeAdd }) => {
  return (
    <div className="flex flex-row gap-3 justify-center items-center">
      <div className="shrink-0 min-w-[38px] min-h-[38px]">
        <Image src={imageSrc} alt={storeName} width={38} height={38} />
      </div>

      <div>
        <Heading level={2} className="font-bold text-.5md text-gray">
          {storeName}
        </Heading>
        <p className="text-gray font-normal text-.5sm">{storeAdd}</p>
      </div>
    </div>
  );
};

export { StoreInformation };
