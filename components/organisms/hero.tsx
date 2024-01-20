'use client';

import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const Hero = () => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <div>
      <div className="relative w-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
        {hasWindow && (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            playing
            volume={0}
            muted
            loop
            width="100%"
            playsinline
          />
        )}
        <div className="absolute bottom-[10%] left-4 text-white">
          <div className="text-5xl">HELLO!</div>
          <div>welcome to our wedding party</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
