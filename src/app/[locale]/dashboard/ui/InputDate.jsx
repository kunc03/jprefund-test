/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

const InputDate = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="w-full bg-transparent text-start text-[#3F3F3F]">
      <label className="p-1  text-[14px] " htmlFor={label}>
        {label}
      </label>
      <input
        className={`mt-1 w-full rounded-[4px] border-2 px-2 py-3  text-[13px] ${
          value
            ? 'border-[#DD5C45] text-[#dd5c45]'
            : 'border-gray-600 text-[#3F3F3F]'
        }`}
        icon-co
        onChange={onChange}
        placeholder={placeholder}
        type="date"
        value={value}
      />
      {/* <SlCalender size={25} className="absolute right-2 top-2" /> */}
    </div>
  );
};

export default InputDate;
