import { getTranslations } from 'next-intl/server';

import { ButtonSend, QrScan } from './_components';
import { ButtonClose, Heading } from '@/components';
import Image from 'next/image';
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
    <div className="landscape relative min-h-dvh">
      <div className="camera-landscape absolute inset-x-0 top-0 z-20 flex h-dvh flex-col items-center justify-between bg-black/50 backdrop-blur-md">
        <Heading className="w-full pt-46 text-center text-1918 font-medium text-white">
          {t('receiptScan')}
        </Heading>

        <div className={cn('overlay h-full w-full')}>
          <div
            className={cn(
              'bg-gray-container w-full max-w-324 max-h-324 flex flex-col items-center p-15',
            )}
          >
            <Image
              alt="Qr Frame"
              className={cn('centered-camera absolute z-30 h-auto w-auto')}
              height={260}
              src="/images/qr-frame.svg"
              width={350}
              priority
            />
            <QrScan />
          </div>
        </div>

        <div
          className={cn(
            'relative flex w-full flex-col items-center justify-center px-7 pt-4 pb-[25%] gap-5',
          )}
        >
          <ButtonSend />
          <Heading
            className={cn(
              'w-full max-w-258 text-center text-1616 font-medium text-white',
            )}
          >
            {t('qrAlert')}
          </Heading>
        </div>
      </div>

      <QrScan />
      <ButtonClose path="scan" />
    </div>
  );
};

export default Scan;
