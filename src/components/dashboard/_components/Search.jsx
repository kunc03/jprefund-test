'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FilterComponent from './FilterComponent';
import { slideBg } from '../ui/slide';

const Search = (props) => {
  const [search, setSearch] = useState(false);
  const buttonRef = useRef(null);

  const handleSearch = () => {
    setSearch(!search);
  };
  props.onSearch(search);

  const handleClickOutside = (event) => {
    if (!buttonRef.current.contains(event.target)) {
      setSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="flex items-center" ref={buttonRef}>
        <button onClick={handleSearch} className="w-[23px] h-[24px]">
          <Image
            src="/icons/search.svg"
            alt="search icons"
            width={150}
            height={150}
            className=""
          />
        </button>

        <AnimatePresence mode="wait">
          {search === true && (
            <>
              <motion.div
                onClick={handleSearch}
                variants={slideBg}
                animate="enter"
                exit="exit"
                initial="initial"
                className="absolute left-[-1px] right-[-1px] h-[40vh] bg-gray-200/50 z-10"
              />
              <FilterComponent />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Search;
