import { Logo } from '@/components';
import { getTranslations } from 'next-intl/server';
import { Form } from '../_components';
import { ButtonSend } from '../_components/button-send';
import Link from 'next/link';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'resetPassword' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const ResetPasswordPage = async () => {
  return (
    <div className="flex min-h-dvh flex-col justify-between">
      <div className="flex flex-1 flex-col items-center  justify-center ">
        <div className="mt-10 flex w-full flex-1 flex-col items-center px-28">
          <Link href="/">
            <Logo />
          </Link>

          <Form />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-38 pb-14">
        <ButtonSend />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
