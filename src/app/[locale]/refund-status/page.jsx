/* eslint-disable react/no-array-index-key */
import { getTranslations } from 'next-intl/server';
import { Header } from '@/components';
import { Accordion } from './_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'refundStatus' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const STATUS = [
  {
    id: 1,
    label: 'Ready to submit',
    content:
      "When a transaction is marked with the 'Ready to Submit' status, you must select the transaction with this status to choose the refund method. Afterward, proceed by clicking the 'Go Process' button.",
  },
  {
    id: 2,
    label: 'Submitted',
    content:
      "When a transaction is marked with the 'Ready to Submit' status, you must select the transaction with this status to choose the refund method. Afterward, proceed by clicking the 'Go Process' button.",
  },
  {
    id: 3,
    label: 'JC approval',
    content:
      "When a transaction is marked with the 'Ready to Submit' status, you must select the transaction with this status to choose the refund method. Afterward, proceed by clicking the 'Go Process' button.",
  },
  {
    id: 4,
    label: 'Store Approval',
    content:
      "When a transaction is marked with the 'Ready to Submit' status, you must select the transaction with this status to choose the refund method. Afterward, proceed by clicking the 'Go Process' button.",
  },
  {
    id: 5,
    label: 'Transferring',
    content:
      "When a transaction is marked with the 'Ready to Submit' status, you must select the transaction with this status to choose the refund method. Afterward, proceed by clicking the 'Go Process' button.",
  },
  {
    id: 6,
    label: 'Complete',
    content:
      "When a transaction is marked with the 'Ready to Submit' status, you must select the transaction with this status to choose the refund method. Afterward, proceed by clicking the 'Go Process' button.",
  },
  {
    id: 7,
    label: 'Rejected',
    content:
      "When a transaction is marked with the 'Ready to Submit' status, you must select the transaction with this status to choose the refund method. Afterward, proceed by clicking the 'Go Process' button.",
  },
];

const RefundStatus = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'refundStatus' });

  return (
    <div className="flex min-h-dvh flex-col">
      <Header hasBack title={t('title')} />
      <div className="flex grow flex-col ">
        {STATUS.map((item) => {
          return (
            <Accordion
              key={item.id}
              label={item.label}
              content={item.content}
            />
          ); // contoh data dinamis
        })}
      </div>
    </div>
  );
};

export default RefundStatus;
