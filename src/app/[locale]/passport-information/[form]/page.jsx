import { Header } from '@/components';
import { getTranslations } from 'next-intl/server';
import { Form } from './view';
import { cn } from '@/utils';
import { StatusForm } from './_components/status-form';

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
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Header hasBack title={t('title')} />
        <StatusForm form={form} />
      </div>
      <div
        className={cn('flex-grow overflow-y-auto')}
        style={{ height: 'calc(100vh - 120px)' }}
      >
        <Form form={form} />
      </div>
    </div>
  );
};

export default FormPassportInformation;
