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
  Button,
} from '@/components';
import { cn } from '@/utils';

const AdvancePreparation = () => {
  const t = useTranslations('home');
  const [passportRegis, setPassportRegis] = useState(false);
  const [contactInformation, setContactInformation] = useState(false);
  const [refundMethod, setRefundMethod] = useState(false);

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div
          className="flex h-auto min-h-9 w-full cursor-pointer items-center justify-center gap-4 bg-gray-110 text-white small:gap-2"
          aria-hidden="true"
          role="button"
          tabIndex="0"
          key="preparationHasNotBeenCompleted"
        >
          <Image alt="info" height={20} src="/images/info.svg" width={20} />
          <span
            className={cn(
              'text-1414 font-medium small:text-1022 medium:text-1315 flex items-center',
            )}
          >
            {t('prerequisitesData')}
          </span>
          <ChevronRight />
        </div>
      </DialogTrigger>
      <DialogContent className="w-11/12 overflow-y-auto sm:h-max sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center">
            <p
              className="w-249 text-center !text-2021 font-bold text-red"
              key="thePrerequisitesData"
            >
              {passportRegis && contactInformation && refundMethod
                ? t('necessaryAdvancePreparations')
                : t('thePrerequisitesData')}
            </p>
          </DialogTitle>
        </DialogHeader>
        <div
          className="flex flex-col items-center justify-center gap-22"
          key="content"
        >
          <p className="text-center text-1522 font-medium">
            {passportRegis && contactInformation && refundMethod ? (
              <>
                {t.rich('informationComplete', {
                  threeSteps: (
                    <span className="text-red" key="span">
                      {t('threeSteps')}
                    </span>
                  ),
                })}
              </>
            ) : (
              <>
                {t.rich('information', {
                  threeSteps: (
                    <span className="text-red" key="span">
                      {t('threeSteps')}
                    </span>
                  ),
                })}
              </>
            )}
          </p>

          <div
            className={cn(
              'flex flex-col items-center justify-center gap-3 w-285',
            )}
          >
            <Image
              alt="refund regist icon"
              height={54}
              src="/icons/passport-regis-advance.svg"
              width={116}
            />

            <Button
              variant={passportRegis ? 'default' : 'outline'}
              onClick={() => setPassportRegis((old) => !old)}
              className={cn(
                'w-full gap-2 hover:bg-transparent hover:text-red relative',
                passportRegis &&
                  '!flex items-center hover:bg-red hover:text-white',
              )}
            >
              {passportRegis && (
                <Image
                  alt="check"
                  height={26}
                  src="/icons/checked.svg"
                  width={26}
                  className="absolute left-1"
                />
              )}
              <p className={cn('text-1515')}>{t('passportRegistration')}</p>
            </Button>
          </div>

          <div
            className={cn(
              'flex flex-col items-center justify-center gap-3 w-285',
            )}
          >
            <Image
              alt="refund regist icon"
              height={66}
              src="/icons/contact-information.svg"
              width={66}
            />

            <Button
              variant={contactInformation ? 'default' : 'outline'}
              onClick={() => setContactInformation((old) => !old)}
              className={cn(
                'w-full gap-2 hover:bg-transparent hover:text-red relative',
                contactInformation &&
                  '!flex items-center hover:bg-red hover:text-white',
              )}
            >
              {contactInformation && (
                <Image
                  alt="check"
                  height={26}
                  src="/icons/checked.svg"
                  width={26}
                  className="absolute left-1"
                />
              )}
              <p className={cn('text-1515')}>{t('contactInformation')}</p>
            </Button>
          </div>

          <div
            className={cn(
              'flex flex-col items-center justify-center gap-3 w-285',
            )}
          >
            <Image
              alt="refund regist icon"
              height={53}
              src="/icons/refundRegist.svg"
              width={71}
            />

            <Button
              variant={refundMethod ? 'default' : 'outline'}
              onClick={() => setRefundMethod((old) => !old)}
              className={cn(
                'gap-2 hover:bg-transparent hover:text-red w-full relative',
                refundMethod &&
                  '!flex items-center border hover:bg-red hover:text-white',
              )}
            >
              {refundMethod && (
                <Image
                  alt="check"
                  height={26}
                  src="/icons/checked.svg"
                  width={26}
                  className="absolute left-1"
                />
              )}
              <p className={cn('text-1515')}>{t('refundMethod')}</p>
            </Button>
          </div>

          <p
            className="relative mt-3 border border-green px-10 py-10.5  text-start !text-1217 font-semibold text-green"
            key="declaimer"
          >
            {passportRegis && contactInformation && refundMethod ? (
              <>
                {t.rich('declaimerComplete', {
                  image: (
                    <Image
                      alt="i"
                      className="relative -top-px mr-1 inline-block size-[14px]"
                      height={14}
                      src="/icons/igreen.png"
                      width={14}
                      key="image"
                    />
                  ),
                })}
              </>
            ) : (
              <>
                {t.rich('declaimer', {
                  image: (
                    <Image
                      alt="i"
                      className="relative -top-px mr-1 inline-block size-[14px]"
                      height={14}
                      src="/icons/igreen.png"
                      width={14}
                      key="image"
                    />
                  ),
                })}
              </>
            )}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { AdvancePreparation };
