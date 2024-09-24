/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

'use client';

import { useState } from 'react';
import { format, parse, isValid } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';

const InputDate = ({
  label,
  onHandleSelected,
  selectedDate: propSelectedDate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const defaultDate = parse('1997.09.25', 'yyyy.MM.dd', new Date());

  const initialDate = propSelectedDate
    ? new Date(propSelectedDate)
    : defaultDate;

  const [selectedDate, setSelectedDate] = useState(
    isValid(initialDate) ? initialDate : defaultDate,
  );

  const handleSelected = (day, selectedDay, useActiveModifiers, e) => {
    setSelectedDate(selectedDay);
    onHandleSelected(day, selectedDay, useActiveModifiers, e);
    setIsOpen(false);
  };

  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild className="h-50 text-1616">
        <Button
          className={cn(
            'w-full rounded-6 justify-between text-1313 !py-6 px-10',
            '!bg-white text-gray border-gray-300 border  focus:!border-red overlay-none',
          )}
        >
          {selectedDate ? (
            format(selectedDate, 'yyyy.MM.dd')
          ) : (
            <span className="font-medium text-gray-300">{label}</span>
          )}
          <Image src="/icons/date.svg" width={22} height={22} alt="date icon" />
          {/* <CalendarIcon size={24} className={cn('text-gray-105')} /> */}
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
