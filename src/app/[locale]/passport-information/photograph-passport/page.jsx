import { getTranslations } from 'next-intl/server';
// import { BodyScan } from './_components';
import { Heading } from '@/components';
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
        <Heading className="pt-9 text-center text-1822 font-medium text-white">
          {t('photographingPassport')}
        </Heading>

        <div className="overlay">
          <Image
            src="/images/scan-passport.svg"
            width={265}
            height={250}
            alt="Passport Image"
            className={cn('centered-image w-[60%]')}
          />
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
    </div>
  );
};

export default ScanYourPassport;
