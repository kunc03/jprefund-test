import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between border-b border-b-gray-500 px-3 py-5">
      <div className="relative">
        <Image
          alt="menu"
          className="cursor-pointer"
          height={24}
          src="/images/menu.svg"
          width={24}
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
          />
          <span className="absolute left-4 top-0 size-[10px] rounded-full bg-red-light" />
        </div>
        <Image
          alt="search"
          className="cursor-pointer"
          height={24}
          src="/images/search.svg"
          width={24}
        />
      </div>
    </div>
  );
};

export { Header };
