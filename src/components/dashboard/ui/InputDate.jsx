import React from 'react';

const InputDate = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="bg-transparent w-full text-start text-[#3F3F3F]">
      <label htmlFor={label} className="p-1  text-[14px] ">
        {label}
      </label>
      <input
        type="date"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        icon-co
        className={`rounded-[4px] mt-1 px-2 py-3 border-[2px] text-[13px] outline-none w-full ${
          value
            ? 'border-[#DD5C45] text-[#dd5c45]'
            : 'border-[#cfcece] text-[#3F3F3F]'
        }`}
      />
      {/* <SlCalender size={25} className="absolute right-2 top-2" /> */}
    </div>
  );
};

export default InputDate;
