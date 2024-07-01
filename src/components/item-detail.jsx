import { cn } from '@/utils';

const ItemDetail = ({ rows }) => {
  return (
    <div className="flex flex-col gap-2 overflow-y-auto">
      {rows.map((row) => (
        <div
          key={row.key}
          className="flex flex-row justify-between border-b border-b-gray-400 pb-2"
        >
          <div className="w-full text-1322 font-medium text-gray-300 md:w-1/2">
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
