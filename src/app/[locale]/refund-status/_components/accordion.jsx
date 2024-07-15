'use client';

import {
  Accordion as UIAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components';

import { useState } from 'react';
import Image from 'next/image';

const Accordion = ({ label, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <UIAccordion
      type="single"
      collapsible
      className="w-full"
      onValueChange={(value) => setIsOpen(value !== '')}
    >
      <AccordionItem
        value={`${label}`}
        className="!border-b border-b-gray-400 bg-white"
      >
        <AccordionTrigger className="flex w-full cursor-default flex-row px-18 py-24">
          <p className="flex-1 text-start text-1521 font-medium text-gray">
            {label}
          </p>
          {!isOpen && (
            <Image
              src="/icons/plus.svg"
              width={16}
              height={2}
              alt="close"
              className="cursor-pointer"
            />
          )}
          {isOpen && (
            <Image
              src="/icons/minus.svg"
              width={16}
              height={16}
              alt="plus"
              className="cursor-pointer"
            />
          )}
        </AccordionTrigger>
        <AccordionContent className="! w-full bg-gray-80 px-18 py-20 md:max-w-md">
          <p className="text-start text-1422 font-normal text-black">
            {content}
          </p>
        </AccordionContent>
      </AccordionItem>
    </UIAccordion>
  );
};

export { Accordion };
