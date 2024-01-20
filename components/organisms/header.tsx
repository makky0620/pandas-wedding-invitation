import Image from 'next/image';

export const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 p-3 bg-white bg-opacity-5">
      <Image src="logo_small.svg" width={50} height={50} alt="Logo of pandas" />
    </div>
  );
};
