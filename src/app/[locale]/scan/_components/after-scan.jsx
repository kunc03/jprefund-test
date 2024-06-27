import React from 'react';
import { motion } from 'framer-motion';
import { menuSlide, slide, slideBtn } from '@/components/dashboard/ui/slide';
import Image from 'next/image';
import Status from '../../detail/_components/statusDetail';
import DetailRow from '../../detail/_components/DetailRow';

const AfterScan = () => {
  const details = [
    { name: 'Date/Time', value: '2024 May 17 at 08:55 AM' },
    { name: 'Sales Amount', value: 'JPY 7,150', bolder: true },
    {
      name: 'Expected Refund Amount',
      value: 'JPY 715',
      accented: true,
      bolder: true,
    },
    { name: 'Transaction ID', value: '222221111111' },
  ];

  const status = 'available';

  return (
    <>
      <motion.div
        variants={menuSlide}
        animate="enter"
        exit="exit"
        initial="initial"
        className="flex flex-col p-5 absolute bottom-[-36rem] h-[80vh] left-0 right-0 text-[#3F3F3F] rounded-t-lg text-[13px] z-[11] bg-white gap-8"
      >
        <h1 className="text-[18px] text-black text-center">
          Check your receipt
        </h1>
        <div>
          <div className="flex items-center gap-[6px]">
            <div className="p-[10px]">
              <Image
                src="/uniqlo.svg"
                alt="Uniqlo logo"
                width={250}
                height={250}
                className="flex flex-col border-[1px] w-[38px]"
              />
            </div>
            <div className="text-start">
              <p className=" font-bold">UNIQLO Ginza</p>
              <p className="text-xs">
                Ginza Komatsu East Building 1-12F, 6-9-5 Ginza, Chuo-ku, Tokyo
              </p>
            </div>
          </div>

          <Status status={status} />

          <div className="mt-8">
            <>
              {details.map((detail, index) => (
                <DetailRow key={index} {...detail} />
              ))}
            </>
          </div>

          <div className="w-full flex justify-center items-center">
            <button className="bg-[#DD5C45] text-white p-2 w-[249px] h-[42px] rounded-full text-[15px] font-semibold mt-8">
              Refund application
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AfterScan;
