'use client';

import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export const Hero = () => {
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
            url="32_hero.mp4"
            playing
            volume={0}
            muted
            loop
            width="100%"
            height="100vh"
            playsinline
            config={{
              file: {
                attributes: {
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  },
                },
              },
            }}
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

