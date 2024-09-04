import { Header, Heading } from '@/components';
import { getTranslations } from 'next-intl/server';
import data from '@/dummy-recording-of-transfer.json';
import { formatDateSimple } from '@/utils';
import { ItemRecordingOfTransfer } from './_components';
import Link from 'next/link';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'recordingOfTransfer' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const RecordingOfTransferPage = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'recordingOfTransfer' });

  return (
    <div className="flex min-h-dvh flex-col">
      <Header hasBack title={t('title')} />
      <div className="flex max-h-[calc(100dvh-80px)] grow flex-col items-center overflow-y-auto px-20 pt-20">
        {data.map((item) => {
          return (
            <div key={item.id} className="w-full text-center">
              <Heading className="text-1522 font-medium text-gray">
                {formatDateSimple(item.date)}
              </Heading>
              <div className="mb-12 mt-6 flex w-full flex-col gap-6 text-start">
                {item.transactions.map((transaction) => {
                  return (
                    <Link
                      href={`/recording-of-transfers/${transaction.id}`}
                      key={transaction.id}
                    >
                      <div className="rounded-8 border border-gray-500 bg-white px-14 py-15.5">
                        <ItemRecordingOfTransfer transaction={transaction} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecordingOfTransferPage;
