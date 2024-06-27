'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Heading,
  Button,
} from '@/components';

import { cn } from '@/utils';

const AdvancePreparation = () => {
  const t = useTranslations('home');
  const [passportRegis, setPassportRegis] = useState(false);
  const [refundRegis, setRefundRegis] = useState(false);

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div
          className="mt-3 flex h-9 cursor-pointer items-center justify-center gap-3 bg-gray-110 text-white"
          aria-hidden="true"
          role="button"
          tabIndex="0"
        >
          <Image alt="info" height={20} src="/images/info.svg" width={20} />
          <span className="text-1414 font-medium">
            {t('preparationHasNotBeenCompleted')}
          </span>
          <ChevronRight />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center">
            <Heading
              level={1}
              className="w-187  text-center !text-2021 font-bold text-red"
            >
              {t('necessaryAdvancePreparations')}
            </Heading>
          </DialogTitle>
          <div className="flex flex-col items-center justify-center">
            <p className="mt-3 text-center text-1522 font-medium">
              {t.rich('information', {
                redText: <span className="text-red">{t('twoSteps')}</span>,
              })}
            </p>

            <p className="relative mt-3 border border-green px-10 py-10.5  text-start !text-1217 font-semibold text-green">
              {t.rich('declaimer', {
                image: (
                  <Image
                    alt="i"
                    className="relative -top-px mr-1 inline-block size-[14px]"
                    height={14}
                    src="/icons/igreen.png"
                    width={14}
                  />
                ),
              })}
            </p>

            <div className="mt-5 flex flex-col items-center justify-center gap-3">
              <Image
                alt="passport regist icon"
                height={55}
                src="/icons/passport1.svg"
                width={115}
              />

              <Button
                variant={passportRegis ? 'default' : 'outline'}
                onClick={() => setPassportRegis((old) => !old)}
                className={cn(
                  'w-318',
                  passportRegis && '!flex-row !justify-start !pl-10',
                )}
              >
                {passportRegis && (
                  <Image
                    alt="check"
                    height={20}
                    src="/icons/checked.svg"
                    width={20}
                  />
                )}
                <p className="w-full text-1320">
                  {passportRegis
                    ? t('passportRegistrationCompleted')
                    : t('goToPassportRegistration')}
                </p>
              </Button>

              <p className="text-center">
                <p className="text-1320 font-medium">{t('pleaseTakeAPhoto')}</p>
                <p className="text-1118 font-normal">{t('ifTakePhotoError')}</p>
              </p>
              <p className="text-center text-1320 font-medium">
                {t('registrationCompleteWord')}
              </p>
            </div>

            <div className="mt-5 flex flex-col items-center justify-center gap-3">
              <Image
                alt="refund regist icon"
                height={53}
                src="/icons/refundRegist.svg"
                width={71}
              />

              <Button
                variant={refundRegis ? 'default' : 'outline'}
                onClick={() => setRefundRegis((old) => !old)}
                className={cn(
                  'w-318',
                  refundRegis && '!flex-row !justify-start !pl-10 ',
                )}
              >
                {refundRegis && (
                  <Image
                    alt="check"
                    height={20}
                    src="/icons/checked.svg"
                    width={20}
                  />
                )}
                <p className="w-full text-1320">
                  {refundRegis ? t('goToRefundComplete') : t('goToRefund')}
                </p>
              </Button>

              <p className="text-center text-1320 font-medium">
                {t('refundDeclaimer')}
              </p>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export { AdvancePreparation };
