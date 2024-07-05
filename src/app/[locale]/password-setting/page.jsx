import { getTranslations } from 'next-intl/server';
import { Heading, Logo } from '@/components';
import { ButtonSignIn, Form } from './_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'passwordSetting' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const PasswordSettingPage = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'passwordSetting' });

  return (
    <div className="flex min-h-dvh flex-col justify-between">
      <div className="mt-7 flex flex-col items-center justify-center gap-28">
        <div className="flex flex-1 flex-col items-center justify-center">
          <Logo />
          <Heading className="mt-28.5 text-center text-2122 font-medium">
            {t('title')}
          </Heading>
        </div>

        <Form />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-38 pb-14">
        <ButtonSignIn />
      </div>
    </div>
  );
};

export default PasswordSettingPage;
