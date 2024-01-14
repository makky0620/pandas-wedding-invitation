'use client';

const Hero = () => {
  return (
    <div>
      <div className="relative w-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          className="w-full object-contain z-0"
        />
        <div className="absolute bottom-[10%] left-4 text-white">
          <div className="text-3xl">Hello!</div>
          <div>welcome to our wedding party</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
