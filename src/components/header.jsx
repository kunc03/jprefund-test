import Image from 'next/image';
import { Badge } from './ui/badge';

const Header = () => {
  return (
    <div className="flex flex-row h-15 justify-between px-3 py-5 ">
      <div className="relative ">
        <Image
          src="/images/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Badge className="absolute -top-3 left-5 ">2</Badge>
      </div>

      <Image src="/images/logo.svg" alt="logo" width={164} height={20} />
      <div className="flex flex-row gap-2">
        <Image
          src="/images/notif.svg"
          alt="notif"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Image
          src="/images/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export { Header };
