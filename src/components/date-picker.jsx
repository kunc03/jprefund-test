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

const DatePicker = ({ label }) => {
  const [date, setDate] = useState();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            'w-full !rounded-4 justify-between text-1313 !bg-white-dark border border-gray-300 hover:!border-red !p-14',
            !date && 'text-gray-50',
          )}
        >
          {date ? (
            format(date, 'dd/MM/yy')
          ) : (
            <span className=" font-medium text-gray-300">{label}</span>
          )}
          <CalendarIcon className="size-4 text-gray" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(day, selectedDay, activeModifiers, e) => {
            setDate(day, selectedDay, activeModifiers, e);
            setIsOpen(false);
          }}
          initialFocus
          className="bg-white"
        />
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker };
