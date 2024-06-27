import React from "react";

const TransactionProcess = ({ date, message, status, isActive }) => {
  let statusStyle = "text-gray-200";
  let additionalMessage = "";

  if (status === "JC Approval.") {
    statusStyle = "text-orange font-semibold";
  } else if (status === "Completed") {
    statusStyle = "text-blue-system font-semibold";
    additionalMessage =
      "<span class='noto-sans-jp-500 text-gray-100 leading-4 pr-8'>with settlement ID 6684 - 758 - A2 - DD.</span>";
  }

  return (
    <div className="relative px-[33.5px] w-full text-[14px]">
      <div className="flex items-start">
        <div className="relative mr-4 flex justify-center flex-col items-center">
          <div
            className={`min-w-[20px] z-[2] min-h-[19px] rounded-full ${
              isActive ? "bg-green" : "bg-gray-200"
            }`}></div>
          <div
            className={`absolute z-[0] top-[5px] w-[1px] ${
              isActive ? "bg-white h-20" : "bg-gray-300 h-20"
            }`}></div>
        </div>
        <div className="flex flex-col gap-1 mb-7">
          <small className="leading-none text-gray-200 text-[.7rem] noto-sans-jp-500">
            {date}
          </small>
          <h3 className="leading-none pr-11">
            {message}
            <span className={`ml-1 noto-sans-jp-400 ${statusStyle}`}>
              {status}
            </span>
            {additionalMessage && (
              <span
                className="ml-1"
                dangerouslySetInnerHTML={{ __html: additionalMessage }}
              ></span>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TransactionProcess;
