'use client';

import { useState } from 'react';
import { useDrawer } from '@/hooks';
import Image from 'next/image';
import { cn } from '@/utils';
import { ChevronLeft, X } from 'lucide-react';
import { Heading } from './heading';
import { useRouter } from 'next/navigation';
import { Sidebar } from './sidebar';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from './ui/drawer';

const Header = ({ hasBack = false, title = null }) => {
  const { setIsOpen } = useDrawer();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const handleSidebar = () => {
    setIsSidebarOpen((oldVal) => !oldVal);
  };

  return (
    <div
      className={cn(
        'flex flex-row  border-b border-b-gray-500 bg-white px-3 py-5',
        hasBack ? 'items-center justify-start' : 'items-center justify-between',
      )}
    >
      {!hasBack && (
        <>
          <div className="relative">
            <Image
              alt="menu"
              className="cursor-pointer"
              height={24}
              src="/images/menu.svg"
              width={24}
              onClick={handleSidebar}
            />
            <span className="absolute -right-1 top-[-3px] size-[10px] rounded-full bg-red-light" />
          </div>

          <Image alt="logo" height={20} src="/images/logo.svg" width={164} />
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
            <Image
              alt="search"
              className="cursor-pointer"
              height={24}
              src="/images/search.svg"
              width={24}
              onClick={() => setIsOpen(true)}
            />
          </div>
          {isSidebarOpen && (
            <Drawer direction="left" open={isSidebarOpen}>
              <DrawerContent className="mx-auto w-full max-w-md bg-transparent">
                <DrawerHeader>
                  <DrawerTitle className="flex flex-row">
                    <X
                      className="ml-auto font-bold text-white"
                      onClick={handleSidebar}
                      size={24}
                    />
                  </DrawerTitle>
                </DrawerHeader>
                <Sidebar onHandleClose={handleSidebar} />
              </DrawerContent>
            </Drawer>
          )}
        </>
      )}

      {hasBack && (
        <>
          <ChevronLeft
            size={24}
            className="cursor-pointer text-gray-200"
            onClick={() => router.back()}
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
