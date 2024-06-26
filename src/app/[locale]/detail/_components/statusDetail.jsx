import React from "react";

const Status = ({ status }) => {
  const bg_colors = {
    rejected: "bg-red",
    completed: "bg-blue",
    available: "bg-orange",
  };

  const text_colors = {
    rejected: "text-red-dark",
    completed: "text-blue",
    available: "text-orange",
  };

  const border_colors = {
    rejected: "border-red-dark",
    completed: "border-blue",
    available: "border-orange",
  };

  const message = {
    rejected: "It was rejected by customs",
    completed: "The remittance process is complete",
    available: "Purchase history has been registered",
  }

  return (
    <div className="w-100 mt-4 h-[42px] px-[33.5px]">
      <div
        className={`text-center bg-transparent ${text_colors[status]} border-opacity-100 border-solid noto-sans-jp-700 text-[14px] font-semibold py-2 px-4 border-2 ${border_colors[status]} rounded-lg w-[100%]`}>
        {message[status]}
      </div>
    </div>
  );
};

export default Status;
