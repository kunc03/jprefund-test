import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Form, ButtonLogin, Wrapper } from './_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'login' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Login = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'login' });

  return (
    <div className="flex flex-col justify-between min-h-dvh">
      <div className="flex flex-col justify-center items-center  flex-1">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={164}
          height={20}
          className="h-auto w-auto"
        />
        <Form />
      </div>
      <div className="shrink-0 flex flex-col gap-9 w-full  items-center">
        <div className="text-center text-gray text-.3.5md">
          <p className="font-normal">{t('registered')}</p>
          <p className="font-bold underline">{t('createAccount')}</p>
        </div>

        <ButtonLogin />
      </div>
    </div>
  );
};

export default Login;
