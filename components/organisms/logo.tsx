import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="mb-6">
      <Image
        src="logo.svg"
        width={300}
        height={300}
        alt="Logo of pandas"
        className="m-auto"
      />
    </div>
  );
};
