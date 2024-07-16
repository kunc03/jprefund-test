import { getTranslations } from 'next-intl/server';
import { Form, ButtonLogin } from './_components';
import { Heading, Logo } from '@/components';
import { cn } from '@/utils';

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
      <div className={cn('flex flex-1 flex-col items-center')}>
        <Logo className="mt-41 h-40.8 w-192" />
        <Heading className="mt-28.5 text-center text-2122 font-medium">
          {t('form.label.password')}
        </Heading>
        <Form />
      </div>
      <div className="flex w-full shrink-0 flex-col items-center gap-9">
        <ButtonLogin />
      </div>
    </div>
  );
};

export default Login;
