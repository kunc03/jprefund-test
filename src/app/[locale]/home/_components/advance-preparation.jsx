'use client';

import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const AdvancePreparation = () => {
  const t = useTranslations('home');
  const handleOnClick = () => {};

  return (
    <div
      className="mt-3 flex h-9 cursor-pointer items-center justify-center gap-3 bg-gray-110 text-white"
      aria-hidden="true"
      onClick={() => {
        handleOnClick();
      }}
      role="button"
      tabIndex="0"
    >
      <Image alt="info" height={20} src="/images/info.svg" width={20} />
      <span className="text-1414 font-medium">
        {t('preparationHasNotBeenCompleted')}
      </span>
      <ChevronRight />
    </div>
  );
};

export { AdvancePreparation };
