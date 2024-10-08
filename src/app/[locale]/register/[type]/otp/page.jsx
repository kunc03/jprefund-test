import { Logo, OtpForm, OtpExpireTime, OtpInformation } from '@/components';
import { getTranslations } from 'next-intl/server';
import { ButtonNext } from '../../_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'register' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const RegisterOtpPage = ({ params }) => {
  const { type } = params;

  return (
    <div className="flex min-h-dvh flex-col justify-between">
      <div className="flex flex-1 flex-col items-center  justify-center ">
        <div className="flex w-full flex-1 flex-col items-center">
          <div className="flex w-full flex-col items-center px-28">
            <Logo className="mt-41 h-40.8 w-192" />
            <OtpInformation type={type} />
            <OtpForm />
          </div>

          <div className="mt-17">
            <OtpExpireTime />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-38 pb-14">
        <ButtonNext />
      </div>
    </div>
  );
};

export default RegisterOtpPage;
