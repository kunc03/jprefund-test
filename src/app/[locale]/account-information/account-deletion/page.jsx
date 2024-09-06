import { getTranslations } from 'next-intl/server';
import { Header } from '@/components';
import { ButtonDelete } from './_components/button-delete';
import { cn } from '@/utils';
import Image from 'next/image';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'accountInformation' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const AccountDeletion = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'accountInformation' });

  return (
    <div className="flex min-h-dvh flex-col">
      <Header hasBack title={t('accountDeletion')} />

      <div
        className={cn(
          'flex flex-col px-36 items-center py-9 justify-between h-full',
        )}
      >
        <div
          className={cn('flex flex-col gap-9 items-center text-gray flex-grow')}
        >
          <h2 className={cn('font-bold text-1623')}>
            {t('thisAccountWillBeDeleted')}
          </h2>
          <h1 className={cn('text-2223 font-bold')}>example@mail.com</h1>
          <Image
            src="/images/warning.svg"
            width={35}
            height={30}
            alt="warning-icon"
          />
          {/* <h2 className={cn('font-bold text-1623')}>{t('beforeDelete')}</h2> */}
          <div
            className={cn(
              'flex flex-col gap-5 font-medium text-justify text-1423',
            )}
          >
            <p>{t('ensureYou')}</p>
            <p>{t('youNeedRegister')}</p>
          </div>
        </div>
        <ButtonDelete />
      </div>
    </div>
  );
};

export default AccountDeletion;
