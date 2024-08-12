import { getTranslations } from 'next-intl/server';
import { SplashLogo } from '@/components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Home = () => {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center">
      <SplashLogo />
    </div>
  );
};

export default Home;
