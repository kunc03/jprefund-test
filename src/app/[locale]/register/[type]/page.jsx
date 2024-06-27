import { Heading, Logo } from '@/components';
import { getTranslations } from 'next-intl/server';
import { ButtonNext } from '../_components';
import Link from 'next/link';
import { Form } from './_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'register' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const RegisterEmailPhonePage = async ({ params }) => {
  const { locale, type } = params;
  const t = await getTranslations({ locale, namespace: 'register' });

  return (
    <div className="flex min-h-dvh flex-col justify-between">
      <div className="flex flex-1 flex-col items-center  justify-center ">
        <div className="mt-6 flex w-full flex-1 flex-col items-center px-28">
          <Logo />
          <Heading
            className="mt-28.5 text-center text-2122 font-medium"
            key="createAccount"
          >
            {t('createAccount')}
          </Heading>

          <Form type={type} />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-38 pb-14">
        <Heading className="text-1522 font-normal">
          {t.rich('haveAccount', {
            login: (
              <Link href="/login" key="goToLogin">
                <span className="cursor-pointer font-bold underline">
                  {t('login')}
                </span>
              </Link>
            ),
          })}
        </Heading>

        <ButtonNext />
      </div>
    </div>
  );
};

export default RegisterEmailPhonePage;
