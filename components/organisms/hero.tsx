'use client';

import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {
    if (!!videoRef && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <div>
      <div className="relative w-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
        {hasWindow && (
          <video
            ref={videoRef}
            src="32_hero.mp4"
            autoPlay
            playsInline
            muted
            loop
            className='w-full h-screen object-cover'
          />
        )}
        <div className="absolute bottom-[10%] left-4 text-white">
          <div className="text-5xl">HELLO!</div>
          <div className="text-xl">welcome to our wedding party</div>
        </div>
      </div>
    </div>
  );
};


