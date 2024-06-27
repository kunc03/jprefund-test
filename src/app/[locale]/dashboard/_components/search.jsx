'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import { slideBg } from '@/utils';
import FilterComponent from './filter-component';

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
      <div ref={buttonRef} className="flex items-center">
        <button type="button" className="h-24 w-23" onClick={handleSearch}>
          <Image
            alt="search icons"
            className=""
            height={150}
            src="/icons/search.svg"
            width={150}
          />
        </button>

        <AnimatePresence mode="wait">
          {search === true && (
            <>
              <motion.div
                animate="enter"
                className="absolute -inset-x-px z-10 h-[40vh] bg-gray-200/50"
                exit="exit"
                initial="initial"
                onClick={handleSearch}
                variants={slideBg}
              />
              <FilterComponent />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export { Search };
