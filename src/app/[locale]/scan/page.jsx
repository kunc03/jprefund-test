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
        <Heading
          className={cn(
            'text-center text-1822 font-medium text-white bg-black/50 w-full pt-30 backdrop-blur-sm',
          )}
        >
          {t('receiptScan')}
        </Heading>

        <div className={cn('overlay px-2')}>
          <div
            className={cn('absolute w-full h-full flex flex-col items-center')}
          >
            <div
              className={cn(
                'w-full h-auto pb-18 top-0 bg-black/50 backdrop-blur-sm',
              )}
            />
            <div className={cn('bg-gray-container w-full')}>
              <div
                className={cn(
                  'bg-gray-cam w-full h-full bg-black/50 backdrop-blur-sm',
                )}
              />
              <Image
                alt="Qr Frame"
                className={cn('centered-camera')}
                height={250}
                src="/images/qr-frame.svg"
                width={336}
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
            'flex w-full flex-col items-center justify-center px-7 pt-43 pb-65 bg-black/50 backdrop-blur-sm',
          )}
        >
          <div
            className={cn(
              'flex flex-col w-full max-w-xs items-center justify-center gap-3',
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
