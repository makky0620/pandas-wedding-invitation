'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import Title from '../atoms/title';

export const Outfit = () => {
  const { ref, inView } = useInView({
    rootMargin: '-10px',
    triggerOnce: true,
  });

  return (
    <div id="outfit" className="mr-4 my-16 p-6 bg-[#EDE9D0]">
      <Title align="left">どんな格好で行けばいい？</Title>
      <div className="relative mb-6">
        <div ref={ref} className="text-transparent">
          <p>
            立食を中心としており　かつガーデンパーティのため　フラットシューズやスニーカーなど歩きやすい足元でお越しください
          </p>
        </div>
        <div className="absolute top-0">
          {inView && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '立食を中心としており　かつガーデンパーティのため　フラットシューズやスニーカーなど歩きやすい足元でお越しください',
                  )
                  .start();
              }}
              options={{
                delay: 18,
                wrapperClassName: 'break-all',
              }}
            />
          )}
        </div>
      </div>
      <div>
        <div className="text-center">
          <p>正装マナーはございませんので</p>
          <p>ラクな格好でお越しください</p>
        </div>
        <div className="p-3">
          <Image
            src="person.svg"
            width={120}
            height={120}
            alt="Logo of outfit"
            className="m-auto"
          />
        </div>
      </div>
    </div>
  );
};
