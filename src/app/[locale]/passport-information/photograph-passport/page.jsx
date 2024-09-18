import { getTranslations } from 'next-intl/server';
import { ButtonClose } from '@/components';
import Camera from './camera';
import { PassportScan } from '../_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'passportInformation' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const ScanYourPassport = () => {
  return (
    <div className="landscape relative min-h-dvh">
      <Camera />
      <PassportScan />
      <ButtonClose path="passport" />
    </div>
  );
};

export default ScanYourPassport;
