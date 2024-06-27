/* eslint-disable tailwindcss/no-custom-classname */
import { motion } from 'framer-motion';
import { useState } from 'react';

import InputDate from '../ui/InputDate';
import { menuSlide, slide } from '../../../../utils/motion';
import { cn } from '@/utils';

const FilterComponent = () => {
  const [refundAmount, setRefundAmount] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('');

  const [search, setSearch] = useState(false);

  const handleReset = () => {
    setRefundAmount(null);
    setStartDate('');
    setEndDate('');
    setStatus('');

    // setFilteredItems(items);
  };

  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <motion.div
      animate="enter"
      className="absolute inset-x-0 bottom-[-36rem] z-[11] flex h-[91vh] flex-col rounded-t-lg bg-white p-5 text-1322 text-gray"
      exit="exit"
      initial="initial"
      variants={menuSlide}
    >
      <motion.h1
        animate="enter"
        className="text-center text-1822 text-black"
        exit="exit"
        initial="initial"
        variants={slide}
      >
        Search filters
      </motion.h1>
      <div className="gap-23 flex flex-col items-center">
        <div className="flex w-full flex-col">
          <motion.h2
            animate="enter"
            className="w-full p-1 text-start text-1414 text-gray"
            exit="exit"
            initial="initial"
            variants={slide}
          >
            Sort
          </motion.h2>
          <motion.button
            animate="enter"
            className={cn(
              'mb-2 flex items-center justify-between rounded-[4px] border-2 p-3 text-[13px] outline-none',
              refundAmount === 'low-to-high'
                ? 'border-red'
                : 'border-gray-400 text-gray',
            )}
            exit="exit"
            initial="initial"
            onClick={() => setRefundAmount('low-to-high')}
            variants={slide}
          >
            Refund amount: Lowest first
            <span className="flex items-center">
              <svg
                fill="none"
                height="13"
                viewBox="0 0 13 13"
                width="13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.37861 11.6201V3.17057L11.0852 6.62622C11.4105 6.88621 11.8869 6.88621 12.2006 6.62622C12.5608 6.33374 12.6073 5.83543 12.2936 5.49962L7.12298 0.679033C6.78603 0.364883 6.23992 0.364883 5.91458 0.679033L0.744005 5.48878C0.592954 5.64044 0.5 5.84626 0.5 6.06292C0.5 6.27957 0.592954 6.47456 0.755624 6.62622C1.09258 6.94037 1.63869 6.94037 1.97565 6.62622L5.6241 3.22473V11.631C5.6241 12.0859 6.01915 12.4434 6.49554 12.4434C6.97193 12.4434 7.36699 12.0751 7.36699 11.631L7.37861 11.6201Z"
                  fill="#3F3F3F"
                />
              </svg>
            </span>
          </motion.button>
          <motion.button
            animate="enter"
            className={cn(
              refundAmount === 'high-to-low'
                ? 'border-red'
                : 'border-gray-600  text-gray',
              'item mb-2 flex items-center justify-between rounded-4 border-2 p-3 text-1322',
            )}
            exit="exit"
            initial="initial"
            onClick={() => setRefundAmount('high-to-low')}
            variants={slide}
          >
            Refund amount: Highest to Lowest
            <span className="flex items-center">
              <svg
                fill="none"
                height="13"
                viewBox="0 0 13 13"
                width="13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.62139 1.26354L5.62139 9.7131L1.91484 6.25744C1.5895 5.99746 1.11311 5.99746 0.799394 6.25744C0.439196 6.54993 0.392719 7.04823 0.706439 7.38405L5.87702 12.2046C6.21397 12.5188 6.76008 12.5188 7.08542 12.2046L12.256 7.39488C12.407 7.24323 12.5 7.0374 12.5 6.82075C12.5 6.60409 12.407 6.4091 12.2444 6.25744C11.9074 5.94329 11.3613 5.94329 11.0244 6.25744L7.3759 9.65893L7.3759 1.2527C7.3759 0.797728 6.98085 0.440246 6.50446 0.440246C6.02807 0.440246 5.63301 0.80856 5.63301 1.2527L5.62139 1.26354Z"
                  fill="#3F3F3F"
                />
              </svg>
            </span>
          </motion.button>
        </div>

        <motion.div
          animate="enter"
          className={cn('item flex w-full justify-between gap-2')}
          exit="exit"
          initial="initial"
          variants={slide}
        >
          <InputDate
            label="Start date"
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Start date"
            type="date"
            value={startDate}
          />
          <InputDate
            label="End date"
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="End date"
            type="date"
            value={endDate}
          />
        </motion.div>

        <motion.div
          animate="enter"
          className="flex w-full flex-col text-gray"
          exit="exit"
          initial="initial"
          variants={slide}
        >
          <h2 className="p-1 text-start text-1414">Status</h2>
          <div className="mb-2 flex gap-2">
            <button
              type="button"
              className={cn(
                'item flex justify-center rounded-[4px] border-2 p-3 w-full',
                status === 'submitted'
                  ? 'border-red'
                  : 'border-gray-400 text-gray',
              )}
              onClick={() => setStatus('submitted')}
            >
              Submitted
            </button>
            <button
              type="button"
              className={cn(
                'flex justify-center rounded-[4px] border-2 p-3 w-full',
                status === 'jc_approved'
                  ? 'border-red text-red'
                  : 'border-400 text-gray',
              )}
              onClick={() => setStatus('jc_approved')}
            >
              JC Approval
            </button>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className={cn(
                'flex items-center justify-center rounded-[4px] border-2 p-3 mb-2 w-full',
                status === 'store_approved'
                  ? 'border-red text-red'
                  : 'text-gray-600 border-gray-400',
              )}
              onClick={() => setStatus('store_approved')}
            >
              Store Approval
            </button>
            <button
              type="button"
              className={cn(
                'item flex items-center justify-center rounded-[4px] border-2 p-3 mb-2 w-full',
                status === 'end_date'
                  ? 'border-red text-red'
                  : 'text-gray-600 border-gray-400',
              )}
              onClick={() => setStatus('end_date')}
            >
              End date
            </button>
          </div>
        </motion.div>

        <div className="flex w-full flex-col items-center gap-2">
          <motion.button
            animate="enter"
            className="h-42 w-249 rounded-full border-2 border-red p-2 text-1515 font-semibold text-red"
            exit="exit"
            initial="initial"
            onClick={handleReset}
            variants={slide}
          >
            Reset filters
          </motion.button>
          <motion.button
            animate="enter"
            className="h-42 w-249 rounded-full bg-red p-2 text-1515 font-semibold text-white"
            exit="exit"
            initial="initial"
            onClick={handleSearch}
            variants={slide}
          >
            Apply filter
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export { FilterComponent };
