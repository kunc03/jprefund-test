import { Heading } from './heading';
import { PurchaseItemCard } from './purchase-item-card';

const PurchaseItemSection = ({ date, items }) => {
  return (
    <section key={date} className="w-full px-3">
      <Heading
        level={1}
        className="mt-1 w-full text-center text-1522  font-medium"
      >
        {date}
      </Heading>
      <div className="mt-3 flex w-full flex-col gap-3">
        {items.map((item) => (
          <PurchaseItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export { PurchaseItemSection };
