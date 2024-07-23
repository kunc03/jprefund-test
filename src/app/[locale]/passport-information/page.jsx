import { Header, Heading, PassportRegistrationIcon } from '@/components';
import { getTranslations } from 'next-intl/server';
import { ButtonScanPassport } from './_components';
import { cn } from '@/utils';

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
        <div
          className={cn(
            'flex grow flex-col items-center justify-center gap-22 px-9 py-5 font-bold',
          )}
        >
          <PassportRegistrationIcon height={175} width={292} />
          <div className={cn('text-center text-1322')}>
            <Heading className={cn('text-justify')}>
              {t('pleaseTakeAPhoto')}
            </Heading>
          </div>
          <div className="text-justify text-1322">
            <p>{t('note.head')}</p>
            <p>{t('note.1')}</p>
            <p>{t('note.2')}</p>
            <p>{t('note.3')}</p>
            <p>{t('note.4')}</p>
          </div>
          <ButtonScanPassport />
        </div>
      </div>
    </div>
  );
};

export default PassportInformationPage;
