import { getTranslations } from 'next-intl/server';
import {
  Header,
  Heading,
  OtpForm,
  OtpExpireTime,
  OtpInformation,
} from '@/components';
import { ButtonOk } from './_components/button-ok';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'accountInformation' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Login = async ({ params }) => {
  const { locale, type } = params;
  const t = await getTranslations({ locale, namespace: 'accountInformation' });

  return (
    <div className="flex min-h-dvh flex-col justify-between bg-white">
      <div className="flex w-full grow flex-col ">
        <Header hasBack title={t('title')} />
        <Heading className="mt-48 text-center text-2122 font-medium text-gray">
          {t('verificationCodeSent')}
        </Heading>
        <div className="px-28">
          <OtpInformation type={type} />
        </div>
        <OtpForm redirect="/account-information" />
        <div className="mt-17">
          <OtpExpireTime />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-38 pb-14">
        <ButtonOk />
      </div>
    </div>
  );
};

export default Login;
