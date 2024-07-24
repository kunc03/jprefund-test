import { Heading } from '@/components';
import { useTranslations } from 'next-intl';
import React from 'react';

const FormItem = ({ label, value }) => {
  const t = useTranslations('passportInformation');
  return (
    <div className="flex flex-col gap-2">
      <Heading level={5} className="text-1422 font-medium">
        {t(label)}
      </Heading>
      <p className="h-50 p-2 text-1616">{value}</p>
    </div>
  );
};

export default FormItem;
