import React, { useContext } from 'react';
import { ChevronLeft } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { BackFromDetail } from '@/context/BackFromDetail';

const Header = ({ title, backLink }) => {
  const { backFromDetail, setBackFromDetail } = useContext(BackFromDetail);
  const pathname = usePathname();
  const router = useRouter();

  const handleBack = () => {
    if (pathname === '/detail/status/process') {
      setBackFromDetail('process');
    } else if (pathname === '/detail/status/complete') {
      setBackFromDetail('complete');
    } else if (pathname === '/detail/status/fail') {
      setBackFromDetail('fail');
    }

    router.push('/dashboard');
  };

  return (
    <header className=" noto-sans-jp-400 w-full flex items-center px-6 py-[21px] bg-white justify-between relative">
      <button onClick={handleBack}>
        <ChevronLeft className="text-sm cursor-pointer text-gray-200" />
      </button>
      <h1 className="noto-sans-jp-500 font-[18px] text-gray-100">{title}</h1>
      <div className="absolute bottom-2 left-0 right-0 h-[2px] bg-gray-500"></div>
      <div className="opacity-0">
        <ChevronLeft className="text-sm" />
      </div>
    </header>
  );
};

const styles = {
  icon: {
    fontSize: '24px',
    cursor: 'pointer',
  },
};

export default Header;
