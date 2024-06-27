/* eslint-disable jsx-a11y/anchor-is-valid */
// import Layout from "@/components/Layout";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Failed = () => {
  return (
    <div className="bg-white-dark pb-2 pt-[2px]">
      <div className="flex flex-col gap-2 px-2 pt-2 text-[#text-gray]">
        <p className="text-center">2024 May 26</p>
        {/* Items */}
        <Link
          className="flex flex-col gap-1 rounded-md border border-gray-500 bg-white p-3"
          href="#"
        >
          <div className="mb-2 flex items-center justify-between text-xs">
            <h3 className="rounded-[4px] border border-red-dark px-4 py-1 text-red-dark">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="flex items-center justify-between text-xs text-[#text-gray-200]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 7,150</p>
          </div>

          <div className="flex items-center justify-between font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-2022 text-red/80">JPY 0</p>
          </div>

          <div className="flex items-center gap-[6px]">
            <div className="p-10">
              <Image
                alt="Uniqlo logo"
                className="flex w-38 flex-col border"
                height={250}
                src="/uniqlo.svg"
                width={250}
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
          className="flex flex-col gap-1 rounded-md border border-gray-500 bg-white p-3"
          href="#"
        >
          <div className="mb-2 flex items-center justify-between text-xs">
            <h3 className="rounded-[4px] border border-red-dark px-4 py-1 text-red-dark">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="flex items-center justify-between text-xs text-[#text-gray-200]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 18,300</p>
          </div>

          <div className="flex items-center justify-between font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-2022 text-red/80">JPY 0</p>
          </div>

          <div className="flex items-center gap-[6px]">
            <div className="p-10">
              <Image
                alt="Aeon mall logo"
                className="flex w-38 flex-col border"
                height={250}
                src="/aeon-mall.svg"
                width={250}
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
          className="flex flex-col gap-1 rounded-md border border-gray-500 bg-white p-3"
          href="#"
        >
          <div className="mb-2 flex items-center justify-between text-xs">
            <h3 className="rounded-[4px] border border-red-dark px-4 py-1 text-red-dark">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="flex items-center justify-between text-xs text-[#text-gray-200]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 76,200</p>
          </div>

          <div className="flex items-center justify-between font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-2022 text-red/80">JPY 0</p>
          </div>

          <div className="flex items-center gap-[6px]">
            <div className="p-10">
              <Image
                alt="LaLaport logo"
                className="flex w-38 flex-col border"
                height={250}
                src="/la-laport.svg"
                width={250}
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

      <div className="flex flex-col gap-2 px-2 pt-2 text-[#text-gray]">
        <p className="text-center">2024 May 26</p>
        {/* Items */}
        <Link
          className="flex flex-col gap-1 rounded-md border border-gray-500 bg-white p-3"
          href="#"
        >
          <div className="mb-2 flex items-center justify-between text-xs">
            <h3 className="rounded-[4px] border border-red-dark px-4 py-1 text-red-dark">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="flex items-center justify-between text-xs text-[#text-gray-200]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 7,150</p>
          </div>

          <div className="flex items-center justify-between font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-2022 text-red/80">JPY 0</p>
          </div>

          <div className="flex items-center gap-[6px]">
            <div className="p-10">
              <Image
                alt="Uniqlo logo"
                className="flex w-38 flex-col border"
                height={250}
                src="/uniqlo.svg"
                width={250}
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
          className="flex flex-col gap-1 rounded-md border border-gray-500 bg-white p-3"
          href="#"
        >
          <div className="mb-2 flex items-center justify-between text-xs">
            <h3 className="rounded-[4px] border border-red-dark px-4 py-1 text-red-dark">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="flex items-center justify-between text-xs text-[#text-gray-200]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 18,300</p>
          </div>

          <div className="flex items-center justify-between font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-2022 text-red/80">JPY 0</p>
          </div>

          <div className="flex items-center gap-[6px]">
            <div className="p-10">
              <Image
                alt="Aeon mall logo"
                className="flex w-38 flex-col border"
                height={250}
                src="/aeon-mall.svg"
                width={250}
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
          className="flex flex-col gap-1 rounded-md border border-gray-500 bg-white p-3"
          href="#"
        >
          <div className="mb-2 flex items-center justify-between text-xs">
            <h3 className="rounded-[4px] border border-red-dark px-4 py-1 text-red-dark">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="flex items-center justify-between text-xs text-[#text-gray-200]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 76,200</p>
          </div>

          <div className="flex items-center justify-between font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-2022 text-red/80">JPY 0</p>
          </div>

          <div className="flex items-center gap-[6px]">
            <div className="p-10">
              <Image
                alt="LaLaport logo"
                className="flex w-38 flex-col border"
                height={250}
                src="/la-laport.svg"
                width={250}
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

      <div className="flex flex-col gap-2 px-2 pt-2 text-[#text-gray]">
        <p className="text-center">2024 May 26</p>
        {/* Items */}
        <Link
          className="flex flex-col gap-1 rounded-md border border-gray-500 bg-white p-3"
          href="#"
        >
          <div className="mb-2 flex items-center justify-between text-xs">
            <h3 className="rounded-[4px] border border-red-dark px-4 py-1 text-red-dark">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="flex items-center justify-between text-xs text-[#text-gray-200]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 7,150</p>
          </div>

          <div className="flex items-center justify-between font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-2022 text-red/80">JPY 0</p>
          </div>

          <div className="flex items-center gap-[6px]">
            <div className="p-10">
              <Image
                alt="Uniqlo logo"
                className="flex w-38 flex-col border"
                height={250}
                src="/uniqlo.svg"
                width={250}
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
          className="flex flex-col gap-1 rounded-md border border-gray-500 bg-white p-3"
          href="#"
        >
          <div className="mb-2 flex items-center justify-between text-xs">
            <h3 className="rounded-[4px] border border-red-dark px-4 py-1 text-red-dark">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="flex items-center justify-between text-xs text-[#text-gray-200]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 18,300</p>
          </div>

          <div className="flex items-center justify-between font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-2022 text-red/80">JPY 0</p>
          </div>

          <div className="flex items-center gap-[6px]">
            <div className="p-10">
              <Image
                alt="Aeon mall logo"
                className="flex w-38 flex-col border"
                height={250}
                src="/aeon-mall.svg"
                width={250}
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
          className="flex flex-col gap-1 rounded-md border border-gray-500 bg-white p-3"
          href="#"
        >
          <div className="mb-2 flex items-center justify-between text-xs">
            <h3 className="rounded-[4px] border border-red-dark px-4 py-1 text-red-dark">
              Customs rejected it
            </h3>
            <p className="font-semibold">2024 May 17 at 08:55 AM</p>
          </div>
          <div className="flex items-center justify-between text-xs text-[#text-gray-200]">
            <h2 className="">Total purchase price</h2>
            <p className="">JPY 76,200</p>
          </div>

          <div className="flex items-center justify-between font-semibold">
            <h2 className="text-xs ">Expected refund amount</h2>
            <p className="text-2022 text-red/80">JPY 0</p>
          </div>

          <div className="flex items-center gap-[6px]">
            <div className="p-10">
              <Image
                alt="LaLaport logo"
                className="flex w-38 flex-col border"
                height={250}
                src="/la-laport.svg"
                width={250}
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

export { Failed };
