import { Header } from '@/components';
import { getTranslations } from 'next-intl/server';
import { Form } from './view';

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

        <Form form={form} />
      </div>
    </div>
  );
};

export default FormPassportInformation;
