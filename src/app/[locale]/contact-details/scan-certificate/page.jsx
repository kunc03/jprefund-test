import React from 'react';
import { getTranslations } from 'next-intl/server';
import { BodyScan } from './_components/body-scan';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'contactDetails' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const ScanCertificatePage = () => {
  return (
    <div className="landscape relative min-h-dvh">
      <BodyScan />
    </div>
  );
};

export default ScanCertificatePage;
