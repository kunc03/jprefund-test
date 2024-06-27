import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Home = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'home' });
  return <div>{t('tit')}</div>;
};

export default Home;
