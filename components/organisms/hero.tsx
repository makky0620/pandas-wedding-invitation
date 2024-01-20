'use client';

import { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <div>
      <div className="relative w-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
        <video
          ref={videoRef}
          src="/hero.mp4"
          height="750"
          autoPlay
          playsInline
          muted
          loop
        >
          <source src="sample.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-[10%] left-4 text-white">
          <div className="text-5xl">HELLO!</div>
          <div>welcome to our wedding party</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
