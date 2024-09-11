import { getTranslations } from 'next-intl/server';
import { ButtonClose, Heading } from '@/components';
import { cn } from '@/utils';
import { ButtonCamera, PassportScan } from '../_components';
import Image from 'next/image';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'passportInformation' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const ScanYourPassport = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'passportInformation' });

  return (
    <div className="landscape relative min-h-dvh">
      <div className="camera-landscape absolute inset-x-0 top-0 z-20 flex h-dvh flex-col items-center justify-between overflow-y-auto bg-black/50 backdrop-blur-md">
        <Heading className="flex min-h-[10%] w-full items-center justify-center text-1918 font-medium text-white ">
          {t('captureYourPassport')}
        </Heading>

        <div className={cn('overlay px-2 h-full')}>
          <div
            className={cn('absolute w-full h-full flex flex-col items-center')}
          >
            <div className={cn('bg-gray-container w-full')}>
              <Image
                alt="Qr Frame"
                className={cn('centered-camera absolute z-30 px-7 py-1')}
                height={428}
                src="/images/scan-passport.svg"
                width={336}
                priority
              />
              <PassportScan />
            </div>
          </div>
        </div>

        <div
          className={cn(
            'relative flex w-full flex-col items-center justify-center px-7 py-4',
          )}
        >
          <Heading
            className={cn(
              'w-full px-2 text-center text-1422 font-medium text-white',
            )}
          >
            {t('photoInstruction')}
          </Heading>
          <ButtonCamera form="passport" />
        </div>
      </div>
      <PassportScan />
      <ButtonClose path="passport" />
    </div>
  );
};

export default ScanYourPassport;
