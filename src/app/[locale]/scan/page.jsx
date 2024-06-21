import { getTranslations } from 'next-intl/server';
import { Heading } from '@/components/heading';
import { Button } from '@/components/ui/button';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'scan' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Scan = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'scan' });

  return (
    <div className="flex flex-col items-center h-screen bg-transparent p-4">
      <Heading className="font-medium text-lg text-center">
        {t('receiptScan')}
      </Heading>

      <div className="mt-4 w-full max-w-md flex flex-row items-center justify-center">
        <input
          type="text"
          placeholder="取引番号を入力"
          className="border p-2 rounded w-full mb-2"
        />
        <Button>送信</Button>
      </div>
    </div>
  );
};

export default Scan;
