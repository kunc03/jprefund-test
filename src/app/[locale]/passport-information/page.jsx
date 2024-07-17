import { Header, Heading, PassportRegistrationIcon } from '@/components';
import { getTranslations } from 'next-intl/server';
import { ButtonScanPassport } from './_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'passportInformation' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const PassportInformationPage = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'passportInformation' });

  return (
    <div className="flex min-h-dvh flex-col justify-between">
      <div className="flex grow flex-col">
        <Header hasBack title={t('title')} />
        <div className="flex grow flex-col items-center justify-center gap-22">
          <PassportRegistrationIcon height={68} width={144} />
          <div className="max-w-265 text-center">
            <Heading className="text-1422 font-medium">
              {t('pleaseTakePhoto')}
            </Heading>
            <p className="mt-1 text-1219.64 font-normal">
              {t('ifTheAutomaticallyIsIncorrect')}
            </p>
          </div>
          <div className="max-w-324 text-center text-1422 font-medium">
            <p>{t('oneYourPassportIsComplete')}</p>
            <p>{t('takePhotoAndRegisterIt')}</p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center pb-54">
        <ButtonScanPassport />
      </div>
    </div>
  );
};

export default PassportInformationPage;
