import { Heading, Logo } from '@/components';
import { getTranslations } from 'next-intl/server';
import { ButtonNext } from '../../_components';
import { Form, ExpireTime } from './_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'register' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const RegisterOtpPage = async ({ params }) => {
  const { locale, type } = params;
  const t = await getTranslations({ locale, namespace: 'register' });

  return (
    <div className="flex min-h-dvh flex-col justify-between">
      <div className="flex flex-1 flex-col items-center  justify-center ">
        <div className="mt-6 flex w-full flex-1 flex-col items-center">
          <div className="flex w-full flex-col items-center px-28">
            <Logo />
            <Heading
              className="mt-28.5 text-center text-1522 font-normal"
              key="verifyCodeSend"
            >
              {type === 'email' &&
                t.rich('enterAuthCodeEmail', {
                  authCode: (
                    <span className="font-bold" key="authCodeEmail">
                      {t('authCode')}
                    </span>
                  ),
                })}
              {type === 'phone' &&
                t.rich('enterAuthCodePhone', {
                  authCode: (
                    <span className="font-bold" key="authCodePhone">
                      {t('authCode')}
                    </span>
                  ),
                })}
            </Heading>
          </div>

          <Form />
          <ExpireTime />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-38 pb-14">
        <ButtonNext />
      </div>
    </div>
  );
};

export default RegisterOtpPage;
