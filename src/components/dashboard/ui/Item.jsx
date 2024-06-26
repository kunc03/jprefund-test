import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// color-progress: #ff9a00;
// color-completed: #4f8be8;
// color-failed: #b91300;

const Item = ({ date, link, colorTextBorder, image, companyName, address }) => {
  return (
    <div>
      <p className="text-center text-[#3F3F3F]">{date}</p>

      <Link
        href={link}
        className="p-3 bg-white flex flex-col gap-1 border-[1px] border-[#DCDCDC] rounded-md"
      >
        <div className="text-xs flex justify-between items-center mb-2">
          {/*  */}
          <h3
            className={`${colorTextBorder} border-[1px] py-1 px-4 rounded-[4px]`}
          >
            Receipt registration completed
          </h3>
          <p className="font-semibold">2024 May 17 at 08:55 AM</p>
        </div>
        <div className="text-xs flex justify-between items-center text-[#909090]">
          <h2 className="">Total purchase price</h2>
          <p className="">JPY 7,150</p>
        </div>

        <div className="flex justify-between items-center font-semibold">
          <h2 className="text-xs ">Expected refund amount</h2>
          <p className="text-[20px] text-[#DD5C45]">JPY 715</p>
        </div>

        <div className="flex items-center gap-[6px]">
          <div className="p-[10px]">
            <Image
              src={`/${image}`}
              alt="company logo"
              width={250}
              height={250}
              className="flex flex-col border-[1px] w-[38px]"
            />
          </div>
          <div className="text-start">
            <p className=" font-bold">{companyName}</p>
            <p className="text-xs">{address}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
