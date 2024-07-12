import { getTranslations } from 'next-intl/server';
import { Header } from '@/components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'faq' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Faq = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'faq' });

  return (
    <div className="flex min-h-dvh flex-col justify-between">
      <Header hasBack title={t('title')} />
    </div>
  );
};

export default Faq;
