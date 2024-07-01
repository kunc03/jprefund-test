import { getTranslations } from 'next-intl/server';

import { Heading, Button, Input } from '@/components';

import { QrScan } from './_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'scan' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Scan = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'scan' });

  return (
    <div className="relative min-h-dvh">
      <div className="absolute inset-x-0 top-0 z-20 flex h-dvh flex-col items-center justify-between">
        <Heading className="pt-9 text-center text-1822 font-medium text-white">
          {t('receiptScan')}
        </Heading>

        <div className="flex w-full flex-col items-center justify-center bg-black px-7 py-53 ">
          <div className="flex w-full max-w-xs flex-row items-center justify-center gap-2 ">
            <Input
              placeholder={t('enterTransactionNumber')}
              type="text"
              className="!h-42 !rounded-21 p-0 !px-14 !py-13 !text-1616"
            />
            <Button className="!h-42 !shrink-0 !px-14 !py-13">
              {t('send')}
            </Button>
          </div>
          <Heading className="mt-4 w-full max-w-231 text-center text-1626 font-medium text-white">
            {t('qrAlert')}
          </Heading>
        </div>
      </div>
      <QrScan />
    </div>
  );
};

export default Scan;
