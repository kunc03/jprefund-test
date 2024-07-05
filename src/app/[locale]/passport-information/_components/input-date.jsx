'use client';

import { useState } from 'react';
import { format, parse } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useActiveModifiers } from 'react-day-picker';

const InputDate = ({
  label,
  onHandleSelected,
  selectedDate: propSelectedDate,
  isSelected = null,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const defaultDate = parse('1997.9.25', 'yyyy.M.d', new Date());
  const [selectedDate, setSelectedDate] = useState(
    propSelectedDate || defaultDate,
  );

  const handleSelected = (day, selectedDay, useActiveModifiers, e) => {
    setSelectedDate(selectedDay);
    onHandleSelected(day, selectedDay, useActiveModifiers, e);
    setIsOpen(false);
  };

  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            'w-full rounded-[6px] justify-between text-1313 !py-6 px-3',
            '!bg-white text-gray hover:!border-red border-gray-300 border  focus:!border-red overlay-none',
          )}
        >
          {selectedDate ? (
            format(selectedDate, 'yyyy.m.dd')
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
          onSelect={handleSelected}
          initialFocus
          className="bg-white"
        />
      </PopoverContent>
    </Popover>
  );
};

export { InputDate };
