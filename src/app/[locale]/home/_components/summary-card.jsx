import { Heading } from '@/components/heading';
import { cn } from '@/lib/utils';
import { formatNumber } from '@/utils/number';

const SummaryCard = ({ title, number = 0, className }) => {
  const titleLength = title.length;

  return (
    <div
      className={cn(
        'py-1 px-2.5 h-16.5  rounded-lg flex flex-col justify-between whitespace-nowrap cursor-pointer',
        number > 0 ? 'bg-orange text-white' : 'bg-gray-500 text-gray-400',
        titleLength <= 6 ? 'w-28.5' : 'w-fit',
        className,
      )}
    >
      <Heading level={5} className="font-bold text-sm ">
        {title}
      </Heading>
      <Heading level={1} className="font-bold text-lg  text-right">
        {formatNumber(number, true)}
      </Heading>
    </div>
  );
};

export { SummaryCard };
