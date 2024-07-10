import { Heading, Logo } from '@/components';
import { getTranslations } from 'next-intl/server';
import { ButtonRegistration, ButtonUseNow } from './_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'register' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Register = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'register' });

  return (
    <div className="flex min-h-dvh flex-col items-center">
      <Logo className="mt-41 h-40.8 w-192" />
      <Heading className="mt-28.5 text-center text-2122 font-medium">
        {t('createAccount')}
      </Heading>

      <div className="mt-43 flex w-full flex-col gap-8  px-6">
        <ButtonRegistration
          type="email"
          label={t('continueWithEmail')}
          imageSrc="/images/email.svg"
          isDark
        />
        <ButtonRegistration
          type="phone"
          label={t('continueWithPhone')}
          imageSrc="/images/phone.svg"
          isDark
        />
      </div>

      <Heading className="mt-3 text-center text-1622 font-bold">
        {t('or')}
      </Heading>

      <div className="mt-3 flex w-full flex-col gap-8  px-6">
        <ButtonRegistration
          type="apple"
          label={t('continueWithApple')}
          imageSrc="/images/apple.svg"
        />
        <ButtonRegistration
          type="google"
          label={t('continueWithGoogle')}
          imageSrc="/images/google.svg"
        />
        <ButtonRegistration
          type="facebook"
          label={t('continueWithFacebook')}
          imageSrc="/images/facebook.svg"
        />
        <ButtonRegistration
          type="twitter"
          label={t('continueWithTwitter')}
          imageSrc="/images/twitter.svg"
        />
      </div>

      <Heading className="mt-3 max-w-318 text-center text-1322 font-normal">
        {t.rich('acceptTermCondition', {
          term: (
            <span className="font-bold text-blue-system" key="term">
              {t('term')}
            </span>
          ),
          privacyPolicy: (
            <span className="font-bold text-blue-system" key="privacyPolicy">
              {t('privacyPolicy')}
            </span>
          ),
          cookies: (
            <span className="font-bold text-blue-system" key="cookies">
              {t('cookies')}
            </span>
          ),
        })}
      </Heading>

      <ButtonUseNow />
    </div>
  );
};

export default Register;
