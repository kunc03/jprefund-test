import React from 'react';

const ReceiptItem = ({ label, qty, value }) => {
  return (
    <div className="flex flex-row justify-between">
      <p className="text-1322 font-medium text-gray-300">{label}</p>
      <div className="flex flex-row gap-58 text-1422 font-bold text-gray">
        {qty && <p>{qty}</p>}
        <p>{value}</p>
      </div>
    </div>
  );
};

export { ReceiptItem };
