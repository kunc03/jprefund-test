import { Logo } from '@/components';
import React from 'react';
import { ResetPasswordVerify } from './_components';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'resetPassword' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Verification = async () => {
  return (
    <div className="flex min-h-dvh flex-col justify-between">
      <div className="flex flex-1 flex-col items-center  justify-center ">
        <div className="mt-10 flex w-full flex-1 flex-col items-center px-28">
          <Link href="/">
            <Logo />
          </Link>

          <ResetPasswordVerify />
        </div>
      </div>
    </div>
  );
};

export default Verification;
