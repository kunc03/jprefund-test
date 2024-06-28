// import Layout from "@/components/Layout";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Failed = () => {
  return (
    <div className="pb-2 pt-[2px] bg-[#F9F9F9]">
      <div className="px-2 flex flex-col gap-2 text-[#3F3F3F] pt-2">
        <p className="text-center font-medium">2024 May 26</p>
        {/* Items */}
        <Link
          href="/detail/status/fail"
          className="p-3 bg-white flex flex-col gap-1 border-[1px] border-[#DCDCDC] rounded-md"
        >
          <div className="text-xs flex justify-between items-center mb-2">
            <h3 className="text-[#B91300] border-[1px] py-1 px-4 border-[#B91300] rounded-[4px]">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="text-xs flex justify-between items-center text-[#909090]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 7,150</p>
          </div>

          <div className="flex justify-between items-center font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-[20px] text-[#DD5C45]/80">JPY 0</p>
          </div>

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
              <p className="font-bold">UNIQLO Ginza</p>
              <p className="text-xs">
                Ginza Komatsu East Building 1-12F, 6-9-5 Ginza, Chuo-ku, Tokyo
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/detail/status/fail"
          className="p-3 bg-white flex flex-col gap-1 border-[1px] border-[#DCDCDC] rounded-md"
        >
          <div className="text-xs flex justify-between items-center mb-2">
            <h3 className="text-[#B91300] border-[1px] py-1 px-4 border-[#B91300] rounded-[4px]">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="text-xs flex justify-between items-center text-[#909090]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 18,300</p>
          </div>

          <div className="flex justify-between items-center font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-[20px] text-[#DD5C45]/80">JPY 0</p>
          </div>

          <div className="flex items-center gap-[6px]">
            <div className="p-[10px]">
              <Image
                src="/aeon-mall.svg"
                alt="Aeon mall logo"
                width={250}
                height={250}
                className="flex flex-col border-[1px] w-[38px]"
              />
            </div>
            <div className="text-start">
              <p className="font-bold">AEON MALL Lake Town</p>
              <p className="text-xs">
                4-1-1 Lake Town, Koshigaya City, Saitama Prefecture
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/detail/status/fail"
          className="p-3 bg-white flex flex-col gap-1 border-[1px] border-[#DCDCDC] rounded-md"
        >
          <div className="text-xs flex justify-between items-center mb-2">
            <h3 className="text-[#B91300] border-[1px] py-1 px-4 border-[#B91300] rounded-[4px]">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="text-xs flex justify-between items-center text-[#909090]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 76,200</p>
          </div>

          <div className="flex justify-between items-center font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-[20px] text-[#DD5C45]/80">JPY 0</p>
          </div>

          <div className="flex items-center gap-[6px]">
            <div className="p-[10px]">
              <Image
                src="/la-laport.svg"
                alt="LaLaport logo"
                width={250}
                height={250}
                className="flex flex-col border-[1px] w-[38px]"
              />
            </div>
            <div className="text-start">
              <p className="font-bold">LaLaport TOKYO-BAY</p>
              <p className="text-xs">
                2-1-1 Hamacho, Funabashi City, Chiba Prefecture 273-8530
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="px-2 flex flex-col gap-2 text-[#3F3F3F] pt-2">
        <p className="text-center font-medium">2024 May 26</p>
        {/* Items */}
        <Link
          href="/detail/status/fail"
          className="p-3 bg-white flex flex-col gap-1 border-[1px] border-[#DCDCDC] rounded-md"
        >
          <div className="text-xs flex justify-between items-center mb-2">
            <h3 className="text-[#B91300] border-[1px] py-1 px-4 border-[#B91300] rounded-[4px]">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="text-xs flex justify-between items-center text-[#909090]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 7,150</p>
          </div>

          <div className="flex justify-between items-center font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-[20px] text-[#DD5C45]/80">JPY 0</p>
          </div>

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
              <p className="font-bold">UNIQLO Ginza</p>
              <p className="text-xs">
                Ginza Komatsu East Building 1-12F, 6-9-5 Ginza, Chuo-ku, Tokyo
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/detail/status/fail"
          className="p-3 bg-white flex flex-col gap-1 border-[1px] border-[#DCDCDC] rounded-md"
        >
          <div className="text-xs flex justify-between items-center mb-2">
            <h3 className="text-[#B91300] border-[1px] py-1 px-4 border-[#B91300] rounded-[4px]">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="text-xs flex justify-between items-center text-[#909090]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 18,300</p>
          </div>

          <div className="flex justify-between items-center font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-[20px] text-[#DD5C45]/80">JPY 0</p>
          </div>

          <div className="flex items-center gap-[6px]">
            <div className="p-[10px]">
              <Image
                src="/aeon-mall.svg"
                alt="Aeon mall logo"
                width={250}
                height={250}
                className="flex flex-col border-[1px] w-[38px]"
              />
            </div>
            <div className="text-start">
              <p className="font-bold">AEON MALL Lake Town</p>
              <p className="text-xs">
                4-1-1 Lake Town, Koshigaya City, Saitama Prefecture
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/detail/status/fail"
          className="p-3 bg-white flex flex-col gap-1 border-[1px] border-[#DCDCDC] rounded-md"
        >
          <div className="text-xs flex justify-between items-center mb-2">
            <h3 className="text-[#B91300] border-[1px] py-1 px-4 border-[#B91300] rounded-[4px]">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="text-xs flex justify-between items-center text-[#909090]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 76,200</p>
          </div>

          <div className="flex justify-between items-center font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-[20px] text-[#DD5C45]/80">JPY 0</p>
          </div>

          <div className="flex items-center gap-[6px]">
            <div className="p-[10px]">
              <Image
                src="/la-laport.svg"
                alt="LaLaport logo"
                width={250}
                height={250}
                className="flex flex-col border-[1px] w-[38px]"
              />
            </div>
            <div className="text-start">
              <p className="font-bold">LaLaport TOKYO-BAY</p>
              <p className="text-xs">
                2-1-1 Hamacho, Funabashi City, Chiba Prefecture 273-8530
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="px-2 flex flex-col gap-2 text-[#3F3F3F] pt-2">
        <p className="text-center font-medium">2024 May 26</p>
        {/* Items */}
        <Link
          href="/detail/status/fail"
          className="p-3 bg-white flex flex-col gap-1 border-[1px] border-[#DCDCDC] rounded-md"
        >
          <div className="text-xs flex justify-between items-center mb-2">
            <h3 className="text-[#B91300] border-[1px] py-1 px-4 border-[#B91300] rounded-[4px]">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="text-xs flex justify-between items-center text-[#909090]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 7,150</p>
          </div>

          <div className="flex justify-between items-center font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-[20px] text-[#DD5C45]/80">JPY 0</p>
          </div>

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
              <p className="font-bold">UNIQLO Ginza</p>
              <p className="text-xs">
                Ginza Komatsu East Building 1-12F, 6-9-5 Ginza, Chuo-ku, Tokyo
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/detail/status/fail"
          className="p-3 bg-white flex flex-col gap-1 border-[1px] border-[#DCDCDC] rounded-md"
        >
          <div className="text-xs flex justify-between items-center mb-2">
            <h3 className="text-[#B91300] border-[1px] py-1 px-4 border-[#B91300] rounded-[4px]">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="text-xs flex justify-between items-center text-[#909090]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 18,300</p>
          </div>

          <div className="flex justify-between items-center font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-[20px] text-[#DD5C45]/80">JPY 0</p>
          </div>

          <div className="flex items-center gap-[6px]">
            <div className="p-[10px]">
              <Image
                src="/aeon-mall.svg"
                alt="Aeon mall logo"
                width={250}
                height={250}
                className="flex flex-col border-[1px] w-[38px]"
              />
            </div>
            <div className="text-start">
              <p className="font-bold">AEON MALL Lake Town</p>
              <p className="text-xs">
                4-1-1 Lake Town, Koshigaya City, Saitama Prefecture
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/detail/status/fail"
          className="p-3 bg-white flex flex-col gap-1 border-[1px] border-[#DCDCDC] rounded-md"
        >
          <div className="text-xs flex justify-between items-center mb-2">
            <h3 className="text-[#B91300] border-[1px] py-1 px-4 border-[#B91300] rounded-[4px]">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="text-xs flex justify-between items-center text-[#909090]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 76,200</p>
          </div>

          <div className="flex justify-between items-center font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-[20px] text-[#DD5C45]/80">JPY 0</p>
          </div>

          <div className="flex items-center gap-[6px]">
            <div className="p-[10px]">
              <Image
                src="/la-laport.svg"
                alt="LaLaport logo"
                width={250}
                height={250}
                className="flex flex-col border-[1px] w-[38px]"
              />
            </div>
            <div className="text-start">
              <p className="font-bold">LaLaport TOKYO-BAY</p>
              <p className="text-xs">
                2-1-1 Hamacho, Funabashi City, Chiba Prefecture 273-8530
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Failed;
