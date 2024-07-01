import { TriangleAlert } from 'lucide-react';
import React from 'react';

const WarningMessage = ({ message }) => {
  return (
    <section className="relative z-50 mb-8 flex w-100 items-start gap-[8px] pl-[35.5px] pr-[70.5px] leading-5">
      <div className="mr-2 mt-5 shrink-0 text-4xl">
        <TriangleAlert className="text-red-light" />
      </div>
      <p className="mt-5 text-[11px] font-medium text-gray-200">{message}</p>
    </section>
  );
};

export { WarningMessage };
