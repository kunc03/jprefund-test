'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import MenuBar from './_components/Menu';
import Logo from './_components/Logo';
import Notification from './_components/Notification';
import Search from './_components/Search';
import ButtonProgress from './_components/ButtonProgress';
import InProgress from './inProgress';
import Completed from './completed';
import Failed from './failed';
import { ButtonCamera } from '@/app/[locale]/home/_components/button-camera';
import { motion } from 'framer-motion';
import { menuSlide, slide, slideBg, slideScanner } from './ui/slide';
import Image from 'next/image';
// import Scanner from "./layout-components/Scanner";

const DashboardView = () => {
  const [getItem, setGetItem] = useState('in-progress');
  const [isSearch, setIsSearch] = useState(null);

  const handleIsSearch = (search) => {
    setIsSearch(search);
  };

  // console.log(isSearch);

  return (
    <div className="relative flex flex-col gap-4">
      <div className="w-full relative">
        <div className=" text-gray-500 bg-white flex flex-col gap-2 border-b-[1px] border-[#DCDCDC] fixed w-[446px]">
          <div className="w-full flex items-center justify-between py-2 px-3 h-[54px] border-b-[1px]">
            <div className="flex justify-center">
              <MenuBar />
            </div>
            <div className="flex justify-between w-[70%] gap-5">
              <Link
                href="/"
                className="flex items-center justify-between text-2xl font-bold text-[#3F3F3F]"
              >
                {/* Logo */}
                <Logo />
              </Link>
              <div className="flex gap-4 items-center">
                <Notification />
                <Search onSearch={handleIsSearch} />
              </div>
            </div>
          </div>

          {/* catatan pembelian */}
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

      <div className=" flex flex-col w-full mt-[162px]">
        {getItem === 'in-progress' && <InProgress />}

        {getItem === 'completed' && <Completed />}

        {getItem === 'failed' && <Failed />}
      </div>

      {!isSearch && (
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
export default DashboardView;
