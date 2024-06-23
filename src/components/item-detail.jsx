import DOMPurify from 'dompurify';
import { cn } from '@/lib/utils';

const ItemDetail = ({ rows }) => {
  return (
    <div className="flex flex-col gap-2 overflow-y-auto">
      {rows.map((row) => (
        <div
          key={row.key}
          className="flex pb-2 border-b border-b-gray-400 flex-row justify-between"
        >
          <div className="font-medium text-.7sm text-gray-300 w-full md:w-1/2">
            {row.key}
          </div>
          <div
            className={cn(
              'shrink-0 font-medium',
              row.id === 'salesAmount' && 'font-bold',
              row.id === 'refundAmount'
                ? 'text-2xl text-red font-bold'
                : 'text-3sm',
            )}
          >
            {row.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export { ItemDetail };
