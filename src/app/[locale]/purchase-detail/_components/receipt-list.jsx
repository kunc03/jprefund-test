'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Heading,
} from '@/components';
import { StatusReceipt } from './status-receipt';
import { ReceiptItem } from './receipt-item';
import { formatNumber, cn } from '@/utils';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const ReceiptList = ({ rows }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('detail');

  return (
    <Accordion
      type="single"
      collapsible
      onValueChange={(value) => setIsOpen(value !== '')}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:underline">
          {isOpen ? t('detailsClose') : t('receiptDetails')}
        </AccordionTrigger>
        {rows.map((item, index) => {
          return (
            <AccordionContent key={item.id}>
              <div
                className={cn(
                  'border-b border-b-gray-100 pb-20',
                  index === 0 && 'pt-43',
                  index > 0 && 'pt-20',
                )}
              >
                {index === 0 && (
                  <Heading className="pb-20 text-1818 font-medium text-gray">
                    Purchase Contents:
                  </Heading>
                )}
                <StatusReceipt status={item.status} />
                <Heading className="py-8 text-1622 font-medium text-gray">
                  {item.name}
                </Heading>
                <ReceiptItem
                  label="Price"
                  qty={item.qty}
                  value={formatNumber(item.price, true)}
                />
                <ReceiptItem
                  label="Subtotal"
                  value={formatNumber(item.subtotal, true)}
                />
                <ReceiptItem
                  label="Refund amount"
                  value={formatNumber(item.refund, true)}
                />
              </div>
            </AccordionContent>
          );
        })}
      </AccordionItem>
    </Accordion>
  );
};

export { ReceiptList };
