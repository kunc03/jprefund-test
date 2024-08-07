import { getTranslations } from 'next-intl/server';

import { BodyScan } from './_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'scan' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Scan = () => {
  return <BodyScan />;
};

export default Scan;
