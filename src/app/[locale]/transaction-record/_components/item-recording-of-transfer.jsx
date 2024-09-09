import { formatNumberJpy } from '@/utils';

const ItemRecordingOfTransfer = ({ transaction }) => {
  return (
    <ul className=" list-none">
      <li className="flex flex-row justify-between">
        <p className="text-1322 font-medium text-gray-200">Refundable amount</p>
        <p className="text-1322 font-medium text-gray-200">
          {formatNumberJpy(transaction?.refundableAmount ?? 0, true)}
        </p>
      </li>
      <li className="mt-4 flex flex-row justify-between">
        <p className="text-1322 font-medium text-gray-200">Refund fee</p>
        <p className="text-1322 font-medium text-gray-200">
          {formatNumberJpy(transaction?.refundFee ?? 0, true)}
        </p>
      </li>
      <li className="mt-4 flex flex-row justify-between">
        <p className="text-1322 font-medium text-gray-200">Remittance fee</p>
        <p className="text-1322 font-medium text-gray-200">
          {formatNumberJpy(transaction?.remittanceFee ?? 0, true)}
        </p>
      </li>
      <li className="mt-4 flex flex-row justify-between">
        <p className="text-1322 font-bold text-gray">Refund amount</p>
        <p className="text-2022 font-bold text-red">
          {formatNumberJpy(transaction?.refundAmount ?? 0, true)}
        </p>
      </li>
    </ul>
  );
};

export { ItemRecordingOfTransfer };
