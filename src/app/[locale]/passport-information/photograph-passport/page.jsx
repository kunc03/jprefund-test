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
      <div className="camera-landscape absolute inset-x-0 top-0 z-20 flex h-dvh flex-col items-center justify-between">
        <Heading className="w-full bg-black/50 pb-29 pt-46 text-center text-1918 font-medium text-white backdrop-blur-sm">
          {t('photographingPassport')}
        </Heading>

        <div className={cn('overlay px-2 h-full')}>
          <div
            className={cn(
              'absolute w-full h-full min-h-full flex flex-col items-center',
            )}
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
                className={cn('centered-camera h-[98%] mx-7 my-1')}
                height={428}
                src="/images/scan-passport.svg"
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
            'relative flex w-full flex-col items-center justify-center px-7 pb-4 bg-black/50 backdrop-blur-sm ',
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
