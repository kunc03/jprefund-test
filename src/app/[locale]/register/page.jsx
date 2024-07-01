import { Heading, Logo } from '@/components';
import { getTranslations } from 'next-intl/server';
import { ButtonRegistration } from './_components';
import Link from 'next/link';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'register' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Register = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'register' });

  return (
    <div className="flex min-h-dvh flex-col justify-between">
      <div className="flex flex-1 flex-col items-center  justify-center">
        <div className="flex flex-1 flex-col items-center  justify-center">
          <Logo />
          <Heading className="mt-28.5 text-center text-2122 font-medium">
            {t('createAccount')}
          </Heading>

          <div className="mt-6 flex w-full flex-col gap-8  px-6">
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

          <Heading className="mt-3 text-center text-1622 font-bold">
            {t('or')}
          </Heading>

          <div className="mt-3 flex w-full flex-col gap-8  px-6">
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

          <Heading className="mt-3 max-w-318 text-center text-1322 font-normal">
            {t.rich('acceptTermCondition', {
              term: (
                <span className="font-bold text-blue" key="term">
                  {t('term')}
                </span>
              ),
              privacyPolicy: (
                <span className="font-bold text-blue" key="privacyPolicy">
                  {t('privacyPolicy')}
                </span>
              ),
              cookies: (
                <span className="font-bold text-blue" key="cookies">
                  {t('cookies')}
                </span>
              ),
            })}
          </Heading>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-38 pb-14">
        <Heading className="text-1722 font-normal">
          {t.rich('useNowWithoutRegistering', {
            useNow: (
              <Link href="/home" key="useNow">
                <span className="cursor-pointer font-bold underline">
                  {t('useNow')}
                </span>
              </Link>
            ),
          })}
        </Heading>

        <Heading className="text-1522 font-normal">
          {t.rich('haveAccount', {
            login: (
              <Link href="/login" key="login">
                <span className="cursor-pointer font-bold underline">
                  {t('login')}
                </span>
              </Link>
            ),
          })}
        </Heading>
      </div>
    </div>
  );
};

export default Register;
