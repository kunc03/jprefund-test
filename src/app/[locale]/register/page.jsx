import { Heading, Logo } from '@/components';
import { getTranslations } from 'next-intl/server';
import { ButtonRegistration, ButtonUseNow } from './_components';
import { cn } from '@/utils';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'register' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Register = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'register' });

  return (
    <div className="flex min-h-dvh flex-col items-center justify-between pb-65">
      <div className={cn('flex flex-col justify-center items-center w-full')}>
        <Logo className="mt-41 h-40.8 w-192" />
        <Heading className="mt-28.5 text-center text-2122 font-medium text-gray">
          {t('createAccount')}
        </Heading>

        <div className="mt-43 flex w-full flex-col gap-18 px-9">
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

        <Heading className="mt-9 max-w-318 text-center text-1322 font-normal">
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
      </div>

      <ButtonUseNow />
    </div>
  );
};

export default Register;
