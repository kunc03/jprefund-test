import { getTranslations } from 'next-intl/server';

import { QrScan, ScanCamera, ScanType } from './_components';
import { ButtonClose } from '@/components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'scan' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Scan = () => {
  return (
    <div className="landscape relative min-h-dvh">
      <div className="camera-landscape absolute inset-x-0 top-0 z-20 flex h-dvh flex-col items-center justify-between bg-black/50 backdrop-blur-md">
        <ScanCamera />

        <ScanType />
      </div>

      <QrScan />
      <ButtonClose path="scan" />
    </div>
  );
};

export default Scan;
