import React from 'react';
import { TriangleAlert } from 'lucide-react';

const WarningMessage = ({ message }) => {
  return (
    <section className="relative flex w-100 pr-[70.5px] pl-[35.5px] gap-[8px] items-start z-[50] leading-5 mb-8">
      <div className="text-4xl flex-0 mr-2 mt-5">
        <TriangleAlert className="text-red-light" />
      </div>
      <p className="text-[11px] noto-sans-jp-500 text-gray-200 mt-5">
        {message}
      </p>
    </section>
  );
};

const styles = {
  icon: {
    fontSize: '24px',
    cursor: 'pointer',
  },
};

export default WarningMessage;
