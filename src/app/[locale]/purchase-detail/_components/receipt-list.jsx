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
import { cn, formatNumberJpy } from '@/utils';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const ReceiptList = ({ rows, remittance }) => {
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
                <StatusReceipt status={item.status} remittance={remittance} />
                <Heading className="py-8 text-1622 font-medium text-gray">
                  {item.name}
                </Heading>
                {item.status === 'Application Fee' ? (
                  <ReceiptItem
                    label="Sales Amount"
                    qty={item.qty}
                    value={formatNumberJpy(item.salesAmount, true)}
                  />
                ) : (
                  <>
                    <ReceiptItem
                      label="Price"
                      qty={item.qty}
                      value={formatNumberJpy(item.price, true)}
                    />
                    <ReceiptItem
                      label="Subtotal"
                      value={formatNumberJpy(item.subtotal, true)}
                    />
                    <ReceiptItem
                      label="Refund amount"
                      value={formatNumberJpy(item.refund, true)}
                    />
                  </>
                )}
              </div>
            </AccordionContent>
          );
        })}
      </AccordionItem>
    </Accordion>
  );
};

export { ReceiptList };
