'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components';

import { useTranslations } from 'next-intl';
import { cn } from '@/utils';
import { useState } from 'react';
import { FormEmail } from './form-email';
import { FormPhone } from './form-phone';
import { FormPassword } from './form-password';

const AccountInformationAccordion = ({
  id,
  label,
  inputValue,
  isMasking = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('accountInformation');

  return (
    <Accordion
      type="single"
      collapsible
      className="ml-23 w-full"
      onValueChange={(value) => setIsOpen(value !== '')}
    >
      <AccordionItem
        value={`${label}-${id}`}
        className="!border-b border-b-gray-400 py-24 pr-18"
      >
        <AccordionTrigger className="flex w-full cursor-default flex-row items-center justify-between">
          <div className="flex grow flex-col items-start gap-10">
            <p className="text-1314 font-normal text-gray-150">{t(label)}</p>
            <p
              className={cn(
                'text-1414 font-medium text-black',
                isMasking && 'masked-password',
              )}
            >
              {inputValue}
            </p>
          </div>
          {!isOpen && (
            <div className="!h-fit !w-68 cursor-pointer rounded-11 bg-red !px-3 !py-4.5 text-1313 !font-semibold !text-white ">
              {t('change')}
            </div>
          )}
          {isOpen && (
            <div className="cursor-pointer !px-3 !py-4.5 text-1313 !font-semibold text-gray">
              {t('cancel')}
            </div>
          )}
        </AccordionTrigger>
        <AccordionContent className="! w-full py-20 md:max-w-md">
          <div className="mr-23 rounded-6 border-1.5 border-red p-18">
            {label === 'email' && <FormEmail />}
            {label === 'phone' && <FormPhone />}
            {label === 'password' && <FormPassword />}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export { AccountInformationAccordion };
