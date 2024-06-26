'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuBar from '@/components/dashboard/_components/Menu';
import Logo from '@/components/dashboard/_components/Logo';
import Notification from '@/components/dashboard/_components/Notification';
import Search from '@/components/dashboard/_components/Search';
import ButtonProgress from '@/components/dashboard/_components/ButtonProgress';
import InProgress from '@/components/dashboard/inProgress';
import Completed from '@/components/dashboard/completed';
import Failed from '@/components/dashboard/failed';
import { AnimatePresence, motion } from 'framer-motion';
import { ButtonCamera } from '../home/_components/button-camera';
import {
  advanceSlide,
  slide,
  slideBtn,
  slidePrepare,
  slideScanner,
} from '@/components/dashboard/ui/slide';
import AdvancePreparation from '@/components/dashboard/advance-preparation';

const DashboardPage = () => {
  const [getItem, setGetItem] = useState('in-progress');
  const [isSearch, setIsSearch] = useState(null);
  const [openAdvancePreparation, setOpenAdvancePreparation] = useState(false);

  const handleIsSearch = (search) => {
    setIsSearch(search);
  };

  return (
    <div className="relative flex flex-col gap-4">
      <div className="w-full relative">
        <div className=" text-gray-500 bg-white flex flex-col gap-2 border-b-[1px] border-[#DCDCDC] fixed w-[448px]">
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

          {/* button catatan pembelian */}
          <div className="flex pb-2 gap-2 flex-col text-center">
            <h2 className="font-semibold text-black/70">
              Duty-free purchase records
            </h2>
            <div className="flex justify-between py-1 px-2 w-full ">
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
          </div>
        </div>
      </div>

      <div
        className={`${openAdvancePreparation ? 'max-h-[87vh] w-[446px]' : 'mt-[203px]'} flex flex-col w-full mt-[162px] duration-200`}
      >
        {/* button advance preparation */}
        {!openAdvancePreparation && !isSearch && (
          <motion.div
            variants={slidePrepare}
            animate="enter"
            exit="exit"
            initial="initial"
            className="relative top-[-37px] delay-200 duration-200"
          >
            <button
              onClick={() => setOpenAdvancePreparation(!openAdvancePreparation)}
              className={`fixed bg-[#7A7A7A] w-[448px] text-[14px] h-[37px] border-[#7A7A7A] px-[20px] m-[0_2px_0_0] py-2 text-white border-2 text-center`}
            >
              <div className="w-[410px] flex gap-1 justify-between items-center px-10">
                <Image
                  src="/icons/i.png"
                  width={150}
                  height={150}
                  alt="require"
                  className="w-[20px] h-[20px]"
                />
                Advance preparation is not complete
                <Image
                  src="/icons/arrow-right.png"
                  width={150}
                  height={150}
                  alt="require"
                  className="w-[9px] h-[16px]"
                />
              </div>
            </button>
          </motion.div>
        )}

        {/* show items progress */}
        {getItem === 'in-progress' && <InProgress />}

        {getItem === 'completed' && <Completed />}

        {getItem === 'failed' && <Failed />}
      </div>

      {/* popup advance preparation */}

      <AnimatePresence mode="wait">
        {openAdvancePreparation && (
          <>
            <motion.div
              variants={advanceSlide}
              animate="enter"
              exit="exit"
              initial="initial"
              className="absolute top-0 py-10 px-5"
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
                className="absolute h-[120vh] top-0 flex flex-col left-0 right-0 py-10 px-5 bg-black/40 z-[-1]"
              />

              <motion.button
                variants={slideBtn}
                animate="enter"
                exit="exit"
                initial="initial"
                className="absolute top-14 right-10"
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

      {!isSearch && !openAdvancePreparation && (
        <motion.div
          variants={slideScanner}
          animate="enter"
          exit="exit"
          initial="initial"
          className="fixed bottom-10 w-full md:max-w-md flex justify-center"
        >
          <ButtonCamera />
        </motion.div>
      )}
    </div>
  );
};

export default DashboardPage;
