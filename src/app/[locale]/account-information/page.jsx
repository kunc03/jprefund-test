import { getTranslations } from 'next-intl/server';
import { Header } from '@/components';
import { AccountInformationAccordion } from './_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'accountInformation' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const ACCOUNT = {
  id: 1,
  email: 'example@mail.com',
  password: '11111111',
};

const Login = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'accountInformation' });

  return (
    <div className="flex min-h-dvh flex-col justify-between">
      <div className="flex grow flex-col bg-white">
        <Header hasBack title={t('title')} />
        <AccountInformationAccordion
          label="email"
          inputValue={ACCOUNT.email}
          id={ACCOUNT.id}
        />
        <AccountInformationAccordion
          label="password"
          inputValue={ACCOUNT.password}
          id={ACCOUNT.id}
          isMasking
        />
      </div>
    </div>
  );
};

export default Login;
