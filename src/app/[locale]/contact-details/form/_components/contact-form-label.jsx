'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const FormLabel = () => {
  const t = useTranslations('contactDetails');
  const pathname = usePathname();
  const completed = pathname === '/contact-details/completed';
  const notComplete = pathname === '/contact-details/not-complete';

  return (
    <div
      className={`${completed && 'bg-blue'} ${notComplete && 'bg-gray-110'} flex h-38 w-full items-center justify-center text-1414 font-medium text-white`}
    >
      {completed && t('completed')}
      {notComplete && t('not-complete')}
    </div>
  );
};

export { FormLabel };
