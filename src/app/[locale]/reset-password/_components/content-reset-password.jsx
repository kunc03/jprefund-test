'use client';

import { Button, Heading, Logo } from '@/components';
import Link from 'next/link';
import { ButtonSend } from './button-send';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Form } from '../form';
import Image from 'next/image';
import { cn } from '@/utils';

const ContentResetPassword = () => {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('resetPassword');

  return (
    <div className="flex min-h-dvh flex-col justify-between">
      {pathname === '/reset-password/completed' ? (
        <div className="flex flex-1 flex-col items-center  justify-center ">
          <div className="mt-10 flex w-full flex-1 flex-col items-center px-28">
            <Link href="/">
              <Logo />
            </Link>

            <Heading
              className="my-23 text-center text-2122 font-medium"
              key="createAccount"
            >
              {t('resetCompleted')}
            </Heading>

            <Image
              src="/icons/reset-complete.svg"
              width={59}
              height={58}
              alt="lock icon"
              className="my-5"
            />

            <div
              className={cn(
                'flex flex-col gap-28 items-center justify-center mt-7',
              )}
            >
              <p className="text-center">{t('resetInform')}</p>

              <Button
                className="mb-9 w-249 items-center justify-center"
                onClick={() => router.push('/home')}
              >
                OK
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export { ContentResetPassword };
