'use client';

import Typewriter from 'typewriter-effect';
import Title from '../atoms/title';

const Outfit = () => {
  return (
    <div className="mr-4 my-8 p-6 bg-[#EDE9D0]">
      <Title align="left">どんな格好で行けばいい？</Title>
      <div className="relative mb-6">
        <div className="text-transparent">
          <p>
            立食を中心としており　かつガーデンパーティのため　フラットシューズやスニーカーなど歩きやすい足元でお越しください
          </p>
        </div>
        <div className="absolute top-0">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '立食を中心としており　かつガーデンパーティのため　フラットシューズやスニーカーなど歩きやすい足元でお越しください',
                )
                .start();
            }}
            options={{
              delay: 10,
            }}
          />
        </div>
      </div>
      <div>
        <div className="text-center">
          <p>正装マナーはございませんので</p>
          <p>ラクな格好でお越しください</p>
        </div>
      </div>
    </div>
  );
};

export default Outfit;
