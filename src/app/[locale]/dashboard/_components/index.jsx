'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { ButtonCamera } from '@/app/[locale]/home/_components/button-camera';
import { AdvancePreparation } from './advance-preparation';

import { ButtonProgress } from './button-progress';
import { MenuBar } from './menu-bar';
import { Notification } from './notification';
import { Search } from './search';
import Completed from './completed';
import Failed from './failed';
import InProgress from './in-progress';
import { slideScanner } from '../../../../utils/motion';

const DashboardView = () => {
  const [getItem, setGetItem] = useState('in-progress');
  const [isSearch, setIsSearch] = useState(null);
  const [advancePrepare, setAdvancePrepare] = useState(false);

  const handleIsSearch = (search) => {
    setIsSearch(search);
  };

  return (
    <div className="relative flex flex-col gap-4">
      <div className="relative w-full">
        <div className=" fixed flex w-[446px] flex-col gap-2 border-b border-[#DCDCDC] bg-white text-gray-500">
          <div className="flex h-[54px] w-full items-center justify-between border-b px-3 py-2">
            <div className="flex justify-center">
              <MenuBar />
            </div>
            <div className="flex w-[70%] justify-between gap-5">
              <Link
                className="flex items-center justify-between text-2xl font-bold text-[#3F3F3F]"
                href="/"
              >
                {/* Logo */}
                <Image
                  alt="JPrefund icon"
                  height={34}
                  src="/icons/logo.svg"
                  width={160}
                />
              </Link>
              <div className="flex items-center gap-4">
                <Notification />
                <Search onSearch={handleIsSearch} />
              </div>
            </div>
          </div>

          {/* catatan pembelian */}
          <div className="flex flex-col gap-2 pb-2 text-center">
            <h2 className="font-semibold text-black/70">
              Duty-free purchase records
            </h2>
            <div className="flex w-full justify-between px-2 py-1 ">
              <ButtonProgress
                amount="JPY 20,840"
                className={`${
                  getItem === 'in-progress'
                    ? 'bg-[#FF9A00] text-white'
                    : 'bg-[#DCDCDC] text-white'
                }`}
                label="Duty-free purchase records"
                onClick={() => setGetItem('in-progress')}
              />
              <ButtonProgress
                amount="JPY 17,800"
                className={`${
                  getItem === 'completed'
                    ? 'bg-[#4F8BE8] text-white'
                    : 'bg-[#DCDCDC] text-white'
                }`}
                label="Remittance procedure completed"
                onClick={() => setGetItem('completed')}
              />
              <ButtonProgress
                amount="JPY 0"
                className={`${
                  getItem === 'failed'
                    ? 'bg-[#B91300] text-white'
                    : 'bg-[#DCDCDC] text-white'
                } `}
                label="Non-refundable"
                onClick={() => setGetItem('failed')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[162px] flex w-full flex-col">
        <button
          type="button"
          className=" inset-x-0 h-[37px] w-[451px] border-2 border-[#7a7a7a] bg-[#7A7A7A] px-[20px] py-2 text-[14px] text-white"
          onClick={() => setAdvancePrepare(!advancePrepare)}
        >
          <div className="flex w-[410px] items-center justify-between gap-3 ">
            <Image
              alt="require"
              className="size-[20px]"
              height={150}
              src="/icons/i.png"
              width={150}
            />
            Advance preparation is not complete
            <span>
              <svg
                fill="none"
                height="17"
                viewBox="0 0 9 17"
                width="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.125 0.499403C1.42187 0.499403 1.71875 0.610957 1.92187 0.834064L8.67187 7.71853C9.10937 8.16474 9.10937 8.88187 8.67187 9.34402L1.92187 16.2285C1.45312 16.6428 0.734375 16.5791 0.328125 16.101C-0.03125 15.6707 -0.0312501 15.0333 0.328125 14.603L6.28125 8.53127L0.328124 2.45956C-0.109376 2.01335 -0.109376 1.28028 0.328124 0.834064C0.531249 0.610957 0.828124 0.499403 1.125 0.499403Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </button>
        {getItem === 'in-progress' && <InProgress />}

        {getItem === 'completed' && <Completed />}

        {getItem === 'failed' && <Failed />}
      </div>

      {advancePrepare === true && <AdvancePreparation />}
      {!isSearch && (
        <motion.div
          animate="enter"
          className="fixed bottom-10 flex w-full justify-center md:max-w-md"
          exit="exit"
          initial="initial"
          variants={slideScanner}
        >
          <ButtonCamera />
        </motion.div>
      )}
    </div>
  );
};
export { DashboardView };
