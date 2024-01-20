'use client';

import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import Title from '../atoms/title';

export const Price = () => {
  const { ref, inView } = useInView({
    rootMargin: '-10px',
    triggerOnce: true,
  });
  return (
    <div className="ml-4 my-8 p-6 bg-[#9CA29A]">
      <Title align="right">パーティーってご祝儀いりますか？</Title>
      <div className="relative mb-3">
        <div ref={ref} className="text-transparent">
          <p>
            夫・孝史の出身地である北海道の結婚式では　会費制という文化があります
          </p>
          <p>
            そんな北海道ならではを取り入れるべく　私たちのパーティーでは会費制を採用しまいした
          </p>
        </div>
        <div className="absolute top-0">
          {inView && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '夫・孝史の出身地である北海道の結婚式では　会費制という文化があります',
                  )
                  .typeString('<br />')
                  .typeString(
                    'そんな北海道ならではを取り入れるべく　私たちのパーティーでは会費制を採用しまいした',
                  )
                  .start();
              }}
              options={{
                delay: 10,
              }}
            />
          )}
        </div>
      </div>
      <div>
        <div className="text-right">PRICE ￥20,000</div>
      </div>
    </div>
  );
};

