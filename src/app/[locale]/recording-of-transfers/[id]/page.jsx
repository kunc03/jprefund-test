import { Header, PurchaseItemSection } from '@/components';
import { getTranslations } from 'next-intl/server';
import { formatDateSimple } from '@/utils';
import { ItemRecordingOfTransfer } from '../_components';
import data from '@/dummy-recording-of-transfer-detail.json';
import { redirect } from 'next/navigation';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'recordingOfTransfer' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const RecordingOfTransferPage = async ({ params }) => {
  const { id } = params;
  const selectedData = data.filter((row) => row.id === id)?.[0] ?? {};
  const purchaseDetails = selectedData.purchaseDetails.reduce((acc, item) => {
    const dateOnly = formatDateSimple(item.date);
    if (!acc[dateOnly]) {
      acc[dateOnly] = [];
    }
    acc[dateOnly].push(item);
    return acc;
  }, {});

  const sorted = Object.keys(purchaseDetails)
    .sort((a, b) => new Date(b) - new Date(a))
    .reduce((acc, date) => {
      acc[date] = purchaseDetails[date];
      return acc;
    }, {});

  if (Object.keys(selectedData).length === 0)
    redirect('/recording-of-transfers');

  return (
    <div className="flex min-h-dvh flex-col">
      <Header
        hasBack
        title={formatDateSimple(selectedData.date)}
        hasBorderBottom={false}
      />
      <div className="border-b border-b-gray-500 bg-white px-21 pb-20">
        <ItemRecordingOfTransfer transaction={selectedData} />
      </div>
      <section className="mt-2 flex h-[calc(100dvh-200px)] flex-wrap">
        {Object.keys(selectedData).length > 0 && (
          <div className="flex h-full flex-1 flex-col items-center overflow-y-auto">
            {Object.entries(sorted).map(([date, items]) => (
              <PurchaseItemSection date={date} items={items} key={date} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default RecordingOfTransferPage;
