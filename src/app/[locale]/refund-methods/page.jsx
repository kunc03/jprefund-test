import { Header } from '@/components';
import { getTranslations } from 'next-intl/server';
import { RegistrationSection } from './_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'refundMethod' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Register = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'refundMethod' });
  return (
    <div className="flex min-h-dvh w-full flex-col items-center">
      <Header hasBack title={t('title')} />
      <div className="mt-23 flex max-h-[calc(100dvh-78px)] w-full grow flex-col gap-16 overflow-y-auto ">
        <RegistrationSection />
      </div>
    </div>
  );
};

export default Register;
