'use client';

import { Button, Header, Heading, Input } from '@/components';
import { useTranslations } from 'next-intl';
import { cn } from '@/utils';
import { useEffect, useState } from 'react';
import { InputDate, PassportForm, SelectOptions } from '../_components';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const handleTakePhoto = ({ router }) => {
  router.push('/passport-information/take-portrait');
};

const FormPassportAfterScan = ({ type }) => {
  const t = useTranslations('passportInformation');
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [filter, setFiler] = useState({
    status: null,
    sort: null,
    dateOfBirth: null,
    dateOfExpiry: null,
  });

  const handleSelectedDateOfBirth = (date) => {
    setFiler((old) => {
      return { ...old, dateOfBirth: date };
    });
  };

  const handleSelectedDateOfExpiry = (date) => {
    setFiler((old) => {
      return { ...old, dateOfExpiry: date };
    });
  };

  const hasDateOfBirth = filter?.dateOfBirth !== null;
  const hasDateOfExpiry = filter?.dateOfExpiry !== null;

  // const handleFaceRecognition = () => {
  //   router.push('/passport-information/take-portrait');
  //   setIsOpen(true);
  // };

  const handleClick = () => {
    if (type === 'photo') handleTakePhoto({ router });
  };

  console.log(type);

  const handleRescanPassport = () => {
    router.push('/passport-information/scan-your-passport');
    setIsOpen(false);
  };
  return (
    <div className="flex min-h-dvh flex-col justify-between">
      <div className="flex grow flex-col">
        <Header hasBack title={t('title')} />
        <div className="flex grow flex-col items-center justify-center gap-22 w-full p-28">
          <div className="flex flex-col gap-3 w-full">
            <Heading level={5} className="text-1422 font-medium ">
              {t('passportPhoto')}
            </Heading>
            <span className="flex items-center justify-center border-gray-300 border py-5 rounded-[6px] bg-white">
              <Image
                src={'/images/passport.png'}
                width={289}
                height={186}
                alt="passport"
              />
            </span>
            <div className="flex justify-center items-center">
              {isOpen === true ? (
                <button className="flex items-center justify-center border-[1.5px] rounded-[7px] py-2 bg-green w-full">
                  <span className="text-white flex gap-5 text-[16px] font-bold items-center">
                    <Image
                      src={'/icons/scan-face-white.svg'}
                      width={32}
                      height={32}
                      alt="passport"
                    />
                    {t('faceAuthenticationCompleted')}
                  </span>
                </button>
              ) : (
                <button
                  onClick={handleClick}
                  className="flex items-center justify-center border-[1.5px] border-red rounded-[7px] py-2 bg-white w-[70%] hover:bg-white-dark delay-1000 duration-1000"
                >
                  <span className="text-red flex gap-5 text-[16px] font-bold items-center">
                    <Image
                      src={'/icons/scan-face.svg'}
                      width={32}
                      height={32}
                      alt="passport"
                    />
                    {t('useFaceRecognition')}
                  </span>
                </button>
              )}
            </div>
          </div>

          <PassportForm
            t={t}
            filter={filter}
            handleSelectedDateOfBirth={handleSelectedDateOfBirth}
            handleSelectedDateOfExpiry={handleSelectedDateOfExpiry}
            hasDateOfBirth={hasDateOfBirth}
            hasDateOfExpiry={hasDateOfExpiry}
          />
        </div>
        <div className="flex flex-col w-full items-center justify-center pb-54 gap-[54px]">
          <button
            onClick={handleRescanPassport}
            className="text-red text-16 font-bold underline underline-offset-4"
          >
            {t('rescanYourPassport')}
          </button>

          <Button className="w-249">{t('save')}</Button>
        </div>
        {/* <Button onClick={() => router.push('/scan')} className="w-249">{t('scanYourPassport')}</Button> */}
      </div>
    </div>
  );
};

export default FormPassportAfterScan;
