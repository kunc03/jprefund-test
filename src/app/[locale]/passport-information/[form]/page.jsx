import { Button, Header } from '@/components';
import { getTranslations } from 'next-intl/server';
import { ContactInformation, FormAfterScan } from './view';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'passportInformation' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const FormPassportInformation = async ({ params }) => {
  const { locale, form } = params;
  const t = await getTranslations({ locale, namespace: 'passportInformation' });

  return (
    <div className="flex min-h-dvh flex-col justify-between">
      <div className="flex grow flex-col">
        <Header hasBack title={t('title')} />

        <FormAfterScan form={form} />
        {/* <ContactInformation /> */}
      </div>
    </div>
  );
};

export default FormPassportInformation;
