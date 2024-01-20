'use client';

import { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

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
        <ReactPlayer
          url="32_hero.mp4"
          playing
          muted
          loop
          width="100%"
          height="100%"
        />
        <div className="absolute bottom-[10%] left-4 text-white">
          <div className="text-5xl">HELLO!</div>
          <div>welcome to our wedding party</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
