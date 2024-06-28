'use client';

import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuBar from '@/components/dashboard/_components/Menu';
import Logo from '@/components/dashboard/_components/Logo';
import Notification from '@/components/dashboard/_components/Notification';
import Search from '@/components/dashboard/_components/Search';
import { AnimatePresence, motion } from 'framer-motion';
import { ButtonCamera } from '../home/_components/button-camera';
import {
  advanceSlide,
  menuSlide,
  slideBg,
  slidePrepare,
  slideScanner,
} from '@/components/dashboard/ui/slide';
import AdvancePreparation from '@/components/dashboard/advance-preparation';
import AfterScan from '../scan/_components/after-scan';
import { usePathname, useRouter } from 'next/navigation';
import ButtonProgress from '@/components/dashboard/_components/ButtonProgress';
import InProgress from './status/process/page';
import Completed from './status/complete/page';
import Failed from './status/fail/page';
import { CatchData } from '@/context/CatchData';

const DashboardPage = () => {
  const [getItem, setGetItem] = useState('');
  const [isSearch, setIsSearch] = useState(null);
  const [openAdvancePreparation, setOpenAdvancePreparation] = useState(false);
  const { catchData, setCatchData } = useContext(CatchData);
  const pathname = usePathname();

  const handleIsSearch = (search) => {
    setIsSearch(search);
  };

  useEffect(() => {
    if (pathname === '/dashboard' && catchData === 'send' && catchData === '') {
      setGetItem('in-progress');
    } else if (catchData === 'complete' && pathname === '/dashboard') {
      setGetItem('completed');
    } else if (catchData === 'fail' && pathname === '/dashboard') {
      setGetItem('failed');
    } else {
      setGetItem('in-progress');
    }
  }, [catchData, pathname]);

  return (
    <>
      <div className="relative flex flex-col gap-4">
        <div className="w-full relative">
          <div className=" text-gray-500 bg-white flex flex-col gap-2 border-b-[1px] border-[#DCDCDC] fixed lg:w-[448.5px] md:w-[448.5px] w-full">
            {/* Header */}
            <div className="w-full flex items-center justify-between py-2 px-3 h-[54px] border-b-[1px]">
              <div className="flex justify-center">
                <MenuBar />
              </div>
              <div className="flex justify-between w-[70%] gap-5">
                <Link
                  href="/"
                  className="flex items-center justify-between text-2xl font-bold text-[#3F3F3F]"
                >
                  <Logo />
                </Link>
                <div className="flex gap-4 items-center">
                  <Notification />
                  <Search onSearch={handleIsSearch} />
                </div>
              </div>
            </div>

            {/* button progress refund header */}
            <div className="flex pb-2 gap-2 flex-col text-center">
              <h2 className="font-semibold text-black/70">
                Duty-free purchase records
              </h2>
              <div className="flex justify-between py-1 lg:px-2 md:px-2 px-2.5 w-full">
                <ButtonProgress
                  onClick={() => setGetItem('in-progress')}
                  label="Duty-free purchase records"
                  amount="JPY 20,840"
                  className={`${
                    getItem === 'in-progress'
                      ? 'bg-[#FF9A00] text-white'
                      : 'bg-[#DCDCDC] text-white'
                  }`}
                />
                <ButtonProgress
                  onClick={() => setGetItem('completed')}
                  label="Remittance procedure completed"
                  amount="JPY 17,800"
                  className={`${
                    getItem === 'completed'
                      ? 'bg-[#4F8BE8] text-white'
                      : 'bg-[#DCDCDC] text-white'
                  }`}
                />
                <ButtonProgress
                  onClick={() => setGetItem('failed')}
                  label="Non-refundable"
                  amount="JPY 0"
                  className={`${
                    getItem === 'failed'
                      ? 'bg-[#B91300] text-white'
                      : 'bg-[#DCDCDC] text-white'
                  } `}
                />
              </div>

              {/* Button Advance Preparation */}
              <div className="fixed top-[183px]">
                <button
                  onClick={() =>
                    setOpenAdvancePreparation(!openAdvancePreparation)
                  }
                  className={`bg-[#7A7A7A] lg:w-[448px] md:w-[448px] w-[374px] lg:text-[14px] md:text-[14px] text-[12px] h-[37px] border-[#7A7A7A] lg:px-[20px] md:px-[20px] px-[10px] py-2 text-white border-2 text-center`}
                >
                  <div className=" flex gap-1 justify-between items-center px-5">
                    <Image
                      src="/icons/i.png"
                      width={150}
                      height={150}
                      alt="require"
                      className="lg:w-[18px] md:w-[18px] w-[15px] lg:h-[19px] md:h-[19px] h-[16px]"
                    />
                    Advance preparation is not complete
                    <Image
                      src="/icons/arrow-right.png"
                      width={150}
                      height={150}
                      alt="require"
                      className="lg:w-[9px] md:w-[9px] w-[5px] lg:h-[16px] md:h-[16px] h-[12px]"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          // ${!openAdvancePreparation && 'mt-[162px]'}
          className={`flex flex-col w-full mt-[203px] ${openAdvancePreparation && 'lg:h-[81.5vh] md:h-[81.5vh] h-[75.5vh]'} ${catchData === 'send' && 'h-[70vh]'}`}
        >
          {/* show items progress */}
          {getItem === 'in-progress' && <InProgress />}
          {getItem === 'completed' && <Completed />}
          {getItem === 'failed' && <Failed />}

          {/* Popup After Scan */}
          <AnimatePresence mode="wait">
            {catchData === 'send' && (
              <>
                <motion.div
                  variants={advanceSlide}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="absolute bottom-0 w-full"
                >
                  <motion.div
                    variants={menuSlide}
                    animate="enter"
                    exit="exit"
                    initial="initial"
                    onClick={() => setCatchData('')}
                    className="absolute h-[100vh] lg:bottom-0 md:bottom-0 bottom-10 w-full flex flex-col left-0 right-0 bg-black/60"
                  />
                  <AfterScan />

                  <button
                    className="absolute top-4 lg:right-6 md:right-6 right-4 z-20"
                    onClick={() => setCatchData('')}
                  >
                    <Image
                      src="/icons/close.svg"
                      width={16}
                      height={16}
                      alt="close icon"
                      className="hover:rotate-90 duration-300"
                    />
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Popup Advance Preparation */}
        <AnimatePresence mode="wait">
          {openAdvancePreparation && (
            <>
              <motion.div
                variants={advanceSlide}
                animate="enter"
                exit="exit"
                initial="initial"
                className="absolute top-0 lg:py-10 md:py-10 py-8 lg:px-5 md:px-5 px-3"
              >
                <AdvancePreparation />

                <motion.div
                  variants={advanceSlide}
                  animate="enter"
                  exit="exit"
                  initial="initial"
                  onClick={() =>
                    setOpenAdvancePreparation(!openAdvancePreparation)
                  }
                  className="absolute lg:h-[120vh] md:h-[120vh] h-[110vh] top-0 flex flex-col left-0 right-0 py-10 px-5 bg-black/60 z-[-1]"
                />
                <motion.button
                  variants={slidePrepare}
                  animate="enter"
                  exit="exit"
                  initial="initial"
                  className="absolute lg:top-14 md:top-14 top-12 lg:right-10 md:right-10 right-7 z-10"
                  onClick={() =>
                    setOpenAdvancePreparation(!openAdvancePreparation)
                  }
                >
                  <Image
                    src="/icons/close.svg"
                    width={16}
                    height={16}
                    alt="close icon"
                    className="hover:rotate-90 duration-300"
                  />
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Scanner */}
        {!isSearch && !openAdvancePreparation && catchData !== 'send' && (
          <div className="w-full bg-gray-200 md:max-w-md flex justify-center items-center">
            <motion.div
              variants={slideScanner}
              animate="enter"
              exit="exit"
              initial="initial"
              className="z-100 fixed bottom-10"
            >
              <ButtonCamera />
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardPage;
