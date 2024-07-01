import Image from 'next/image';

const Logo = ({ width = 192, height = 40.8, className = 'h-40.8 w-192' }) => {
  return (
    <Image
      src="/images/logo.svg"
      alt="logo"
      width={width}
      height={height}
      className={className}
    />
  );
};

export { Logo };
