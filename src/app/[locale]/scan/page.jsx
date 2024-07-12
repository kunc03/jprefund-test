import { getTranslations } from 'next-intl/server';

import { Heading } from '@/components';

import { ButtonSend, QrScan } from './_components';
import { cn } from '@/utils';

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

        <div
          className={cn(
            'flex w-full flex-col items-center justify-center bg-black px-7 pt-43 pb-65',
          )}
        >
          <div
            className={cn(
              'flex flex-col w-full max-w-xs  items-center justify-center gap-3',
            )}
          >
            <ButtonSend />
            <Heading
              className={cn(
                'w-full max-w-258 text-center text-1626 font-medium text-white',
              )}
            >
              {t('qrAlert')}
            </Heading>
          </div>
        </div>
      </div>
      <QrScan />
    </div>
  );
};

export default Scan;
