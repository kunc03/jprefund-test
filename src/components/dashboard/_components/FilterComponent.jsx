import { useState } from 'react';
import { motion } from 'framer-motion';
import InputDate from '../ui/InputDate';
import { menuSlide, slide } from '../ui/slide';

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
    console.log({
      refundAmount,
      startDate,
      endDate,
      status,
    });
  };

  return (
    <>
      <motion.div
        variants={menuSlide}
        animate="enter"
        exit="exit"
        initial="initial"
        className="flex flex-col p-5 absolute bottom-[-36rem] h-[85vh] left-0 right-0 bg-white text-[#3F3F3F] rounded-t-lg text-[13px] z-[11]"
      >
        <motion.h1
          variants={slide}
          animate="enter"
          exit="exit"
          initial="initial"
          className="text-[18px] text-black text-center"
        >
          Search filters
        </motion.h1>
        <div className="flex flex-col items-center gap-[23px]">
          <div className="flex flex-col w-full">
            <motion.h2
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              className="text-start w-full p-1 text-[14px] text-[#3F3F3F]"
            >
              Sort
            </motion.h2>
            <motion.button
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              onClick={() => setRefundAmount('low-to-high')}
              className={`item ${
                refundAmount === 'low-to-high'
                  ? 'border-[#DD5C45]'
                  : 'border-[#CFCECE] text-[#3F3F3F]'
              } flex justify-between items-center p-3 outline-none rounded-[4px] text-[13px] border-[2px] mb-2`}
            >
              Refund amount: Lowest first
              <span className="flex items-center">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
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
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              onClick={() => setRefundAmount('high-to-low')}
              className={` ${
                refundAmount === 'high-to-low'
                  ? 'border-[#DD5C45]'
                  : 'border-[#cfcece] text-[#3F3F3F]'
              } item flex justify-between items-center p-3 rounded-[4px] text-[13px] border-[2px] mb-2`}
            >
              Refund amount: Highest to Lowest
              <span className="flex items-center">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
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
            variants={slide}
            animate="enter"
            exit="exit"
            initial="initial"
            className="item flex justify-between w-full gap-2"
          >
            <InputDate
              type="date"
              label={'Start date'}
              placeholder={'Start date'}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <InputDate
              type="date"
              label={'End date'}
              placeholder={'End date'}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </motion.div>

          <motion.div
            variants={slide}
            animate="enter"
            exit="exit"
            initial="initial"
            className="w-full flex flex-col text-[#3F3F3F]"
          >
            <h2 className="text-start p-1 text-[14px] text-">Status</h2>
            <div className="flex gap-2 mb-2">
              <button
                onClick={() => setStatus('submitted')}
                className={`item flex justify-center p-3 border-[2px] rounded-[4px] ${
                  status === 'submitted'
                    ? 'border-[#DD5C45]'
                    : 'border-[#CFCECE] text-[#3F3F3F]'
                } w-full`}
              >
                Submitted
              </button>
              <button
                onClick={() => setStatus('jc_approved')}
                className={`flex p-3 justify-center border-[2px] rounded-[4px] ${
                  status === 'jc_approved'
                    ? 'border-[#DD5C45] '
                    : 'border-[#cfcece] text-[#3F3F3F]'
                } w-full `}
              >
                JC Approval
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setStatus('store_approved')}
                className={`flex justify-center items-center p-3 border-[2px] rounded-[4px] ${
                  status === 'store_approved'
                    ? 'border-[#DD5C45] '
                    : 'border-[#cfcece] text-[#3F3F3F]'
                } w-full mb-2`}
              >
                Store Approval
              </button>
              <button
                onClick={() => setStatus('end_date')}
                className={`item flex justify-center items-center p-3 border-[2px] rounded-[4px] ${
                  status === 'end_date'
                    ? 'border-[#DD5C45] '
                    : 'border-[#cfcece] text-[#3F3F3F]'
                } w-full mb-2`}
              >
                End date
              </button>
            </div>
          </motion.div>

          <div className="w-full flex gap-2 flex-col items-center">
            <motion.button
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              onClick={handleReset}
              className="border-[2px] border-[#DD5C45] p-2 text-[#DD5C45] w-[70%] h-[42px] rounded-full text-[15px] font-bold font-sans"
            >
              Reset Filters
            </motion.button>
            <motion.button
              variants={slide}
              onClick={handleSearch}
              animate="enter"
              exit="exit"
              initial="initial"
              className="bg-[#DD5C45] text-white p-2 w-[70%] h-[42px] rounded-full text-[15px] font-bold font-sans"
            >
              Apply Filter
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FilterComponent;
