'use client';

import { cn } from '@/utils';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const StatusForm = ({ form }) => {
  const t = useTranslations('passportInformation');
  const [bgColor, setBgColor] = useState('');
  const [textStatus, setTextStatus] = useState('');

  useEffect(() => {
    if (form === 'not-complete' || form === 'form') {
      setBgColor('bg-gray');
      setTextStatus(t('notComplete'));
    } else if (form === 'pending') {
      setBgColor('bg-orange');
      setTextStatus(t('pending'));
    } else if (form === 'problem') {
      setBgColor('bg-red-error');
      setTextStatus(t('problem'));
    } else if (form === 'complete') {
      setBgColor('bg-blue');
      setTextStatus(t('complete'));
    }
  }, [form, t]);

  return (
    <div className={cn('text-center w-full py-4 text-white', bgColor)}>
      <span>{textStatus}</span>
    </div>
  );
};

export { StatusForm };
