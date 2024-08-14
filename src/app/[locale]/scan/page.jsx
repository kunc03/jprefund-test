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
      <div className="camera-landscape absolute inset-x-0 top-0 z-20 flex h-dvh flex-col items-center justify-between ">
        <Heading className="text-center text-1918 text-white font-medium bg-black/50 w-full pb-24 pt-46 backdrop-blur-sm">
          {t('receiptScan')}
        </Heading>

        <div className={cn('overlay px-2 h-full')}>
          <div
            className={cn('absolute w-full h-full flex flex-col items-center')}
          >
            <div className={cn('w-full h-full bg-black/50 backdrop-blur-sm')} />
            <div className={cn('bg-gray-container w-full')}>
              <div
                className={cn(
                  'bg-gray-cam w-full h-full bg-black/50 backdrop-blur-sm',
                )}
              />
              <Image
                alt="Qr Frame"
                className={cn('centered-camera -m-3 z-30 h-auto w-auto')}
                height={260}
                src="/images/qr-frame.svg"
                width={350}
                priority
              />
              <div
                className={cn(
                  'bg-gray-cam w-full h-full bg-black/50 backdrop-blur-sm',
                )}
              />
            </div>
            <div className={cn('w-full h-full bg-black/50 backdrop-blur-sm')} />
          </div>
        </div>

        <div
          className={cn(
            'flex w-full flex-col items-center justify-center px-7 pt-5 bg-black/50 backdrop-blur-sm',
          )}
        >
          <div
            className={cn(
              'flex flex-col w-full max-w-xs items-center justify-center gap-3 pb-[25%]',
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
      </div>

      <QrScan />
      <ButtonClose path="scan" />
    </div>
  );
};

export default Scan;
