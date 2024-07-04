'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const InputDate = ({
  label,
  onHandleSelected,
  selectedDate,
  isSelected = null,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            'w-full rounded-4 justify-between text-1313 !py-6 px-3',
            '!bg-white text-gray hover:!border-red border-gray-300 border focus:!border-red overlay-none',
          )}
        >
          {selectedDate ? (
            format(selectedDate, 'dd/MM/yy')
          ) : (
            <span className=" font-medium text-gray-300">{label}</span>
          )}
          <CalendarIcon size={24} className={cn('text-gray-105')} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={(day, selectedDay, activeModifiers, e) => {
            onHandleSelected(day, selectedDay, activeModifiers, e);
            setIsOpen(false);
          }}
          initialFocus
          className="bg-white"
        />
      </PopoverContent>
    </Popover>
  );
};

export { InputDate };
