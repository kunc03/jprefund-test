'use client';

import Image from 'next/image';
import { cn } from '@/utils';
import { ChevronLeft, X } from 'lucide-react';
import { Heading } from './heading';
import { usePathname, useRouter } from 'next/navigation';
import { Sidebar } from './sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
// import { useState } from 'react';

const Header = ({
  hasBack = false,
  hasBorderBottom = true,
  title = null,
  onHandleBack = null,
}) => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  // const handleSidebar = () => {
  //   setIsSidebarOpen((oldVal) => !oldVal);
  // };
  const handleBack = () => {
    if (
      pathname === '/passport-information/form-completed' ||
      pathname === '/passport-information/form'
    ) {
      router.push('/home');
    } else if (onHandleBack) {
      onHandleBack();
    } else {
      router.back();
    }
  };

  return (
    <div
      className={cn(
        'flex flex-row bg-white pr-10 py-5 w-full',
        hasBack ? 'items-center justify-start' : 'items-center justify-between',
        hasBorderBottom && 'border-b border-b-gray-500',
      )}
    >
      {!hasBack && (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger className="relative pl-10">
              <Image
                alt="menu"
                className="cursor-pointer"
                height={24}
                src="/images/menu.svg"
                width={24}
              />
              <span className="absolute -right-1 top-[-3px] size-[10px] rounded-full bg-red-light" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className={cn(
                'mx-auto max-w-md relative w-[500px] h-screen bg-transparent border-none',
              )}
            >
              <DropdownMenuItem
                className={cn('relative w-full bg-black/50 h-screen mt-25.5')}
              >
                <Sidebar />

                <X
                  className="absolute right-2 top-2 cursor-pointer font-bold text-white"
                  size={24}
                />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Image alt="logo" height={34} src="/images/logo.svg" width={160} />

          <div className="flex flex-row gap-2">
            <div className="relative">
              <Image
                alt="notif"
                className="cursor-pointer"
                height={24}
                src="/images/notif.svg"
                width={24}
                onClick={() => {
                  router.push('/notification');
                }}
              />
              <span className="absolute left-4 top-0 size-[10px] rounded-full bg-red-light" />
            </div>
          </div>
        </>
      )}

      {hasBack && (
        <>
          <ChevronLeft
            size={24}
            className="cursor-pointer text-gray-200"
            onClick={handleBack}
          />
          {title && (
            <Heading className="w-full text-center text-1822 font-medium text-gray">
              {title}
            </Heading>
          )}
        </>
      )}
    </div>
  );
};

export { Header };
