import { Header } from '@/components';
import { ContactDetails } from './view';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'contactDetails' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Page = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'contactDetails' });

  return (
    <div className="flex min-h-dvh flex-col justify-between">
      <div className="flex grow flex-col">
        <Header hasBack title={t('title')} />

        <ContactDetails />
      </div>
    </div>
  );
};

export default Page;
