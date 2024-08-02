import { getTranslations } from 'next-intl/server';
import { Header } from '@/components';
import { ButtonDelete } from './_components/button-delete';
import { cn } from '@/utils';

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

        <div
          className={cn(
            'flex flex-col gap-3 px-36 items-center justify-between py-9',
          )}
        >
          <div className={cn('flex flex-col gap-9 items-center text-gray')}>
            <h2 className={cn('font-bold text-1623')}>{t('askForDeletion')}</h2>
            <h1 className={cn('text-2223 font-bold')}>example@mail.com</h1>
            <h2 className={cn('font-bold text-1623')}>{t('beforeDelete')}</h2>
            <div className="flex flex-col gap-4 text-justify text-1423">
              <p>{t('ifYouDelete')}</p>
              <p>{t('ifYouWishToReregister')}</p>
            </div>
          </div>
          <ButtonDelete />
        </div>
      </div>
    </div>
  );
};

export default Login;
