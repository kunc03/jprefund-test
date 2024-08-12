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

const Header = ({
  hasBack = false,
  hasBorderBottom = true,
  title = null,
  onHandleBack = null,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    const routesToRedirect = {
      '/passport-information/form': true,
      '/passport-information/not-complete': true,
      '/passport-information/pending': true,
      '/passport-information/problem': true,
      '/passport-information/complete': true,
      '/refund-methods': true,
      '/contact-details': true,
    };

    if (routesToRedirect[pathname]) {
      router.push('/home');
    } else if (onHandleBack) {
      onHandleBack();
    } else {
      router.back();
    }
  };

  const handleNotificationClick = () => {
    router.push('/notification');
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
            <DropdownMenuTrigger className="relative pl-10 outline-none">
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
                'mx-auto max-w-md w-screen h-screen bg-transparent border-none',
              )}
            >
              <DropdownMenuItem
                className={cn('relative w-full bg-black/50 h-screen mt-25.5')}
              >
                <X
                  className={cn(
                    'absolute right-5 top-5 cursor-pointer font-bold text-white',
                  )}
                  size={24}
                />
              </DropdownMenuItem>
              <Sidebar />
            </DropdownMenuContent>
          </DropdownMenu>

          <Image alt="logo" height={34} src="/images/logo.svg" width={160} />

          <div className="flex flex-row gap-2">
            <div className="relative">
              <Image
                alt="notif"
                className="cursor-pointer"
                data-drilldown
                height={24}
                src="/images/notif.svg"
                width={24}
                onClick={handleNotificationClick}
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
            className={cn('cursor-pointer text-gray-200 ml-2')}
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
