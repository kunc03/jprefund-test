import { getTranslations } from 'next-intl/server';
import { Header } from '@/components';
import { ButtonDelete } from './_components/button-delete';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'accountInformation' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Login = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'accountInformation' });

  return (
    <div className="flex min-h-dvh flex-col">
      <div className="flex w-full grow flex-col items-center">
        <Header hasBack title={t('accountDeletion')} />
        <div className="mt-31 flex flex-col gap-3 px-36">
          <p className="text-1626 font-normal text-black">
            Are you sure you want to delete your account? Please read how
            account deletion will affect.
          </p>
          <p className="text-1626 font-normal text-black">
            Deleting your account removes personal information our database.
            Tour email becomes permanently reserved and same email cannot be
            re-use to register a new account.
          </p>
        </div>
        <ButtonDelete />
      </div>
    </div>
  );
};

export default Login;
