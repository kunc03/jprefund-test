import { getTranslations } from 'next-intl/server';
import { Form, ButtonLogin } from './_components';
import { Logo } from '@/components';
import Link from 'next/link';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'login' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Login = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'login' });

  return (
    <div className="flex min-h-dvh flex-col justify-between">
      <div className="flex flex-1 flex-col items-center  justify-center">
        <Logo />
        <Form />
      </div>
      <div className="flex w-full shrink-0 flex-col items-center gap-9">
        <div className="text-center text-1527 text-gray">
          <p className="font-normal">{t('registered')}</p>
          <Link href="/register">
            <p className="cursor-pointer font-bold underline">
              {t('createAccount')}
            </p>
          </Link>
        </div>

        <ButtonLogin />
      </div>
    </div>
  );
};

export default Login;
