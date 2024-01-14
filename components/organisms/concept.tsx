'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';
import Title from '../atoms/title';

const Concept: React.FC = () => {
  return (
    <div className="mr-4 my-8 p-6 bg-[#EDE9D0] text-left">
      <Title align="left">どんなコンセプトなの？</Title>
      <div className="relative">
        <div className="text-transparent">
          <p>
            キーワードは「Connecting the dots」日本語では
            ｢点と点をつなげる｣と表現され、過去の経験が、その当時は思いもよらなかったことに活かせる状況を指します。
          </p>
          <br />
          <p>
            スティーブ･ジョブズがスタンフォード大学の卒業式で語ったスピーチに登場したことでも有名です。
          </p>
          <br />
          <p>
            私たちは、dotsを参加してくださるみなさま一人ひとりと例え、そんな一つひとつの点が繋がるような場にしたいと考え、コンセプトとして置くことにしました。
          </p>
          <br />
          <p>
            そのため、通常の結婚式とは異なり、びっくりされる方も多いかとは思いますが、ドットが繋がっていくように、みなさまも参加型で、一緒に楽しんでいただけますと幸いです。
          </p>
        </div>
        <div className="absolute top-0">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'キーワードは「Connecting the dots」日本語では ｢点と点をつなげる｣ と表現され、過去の経験が、その当時は思いもよらなかったことに活かせる状況を指します。',
                )
                .typeString('<br />')
                .typeString('<br />')
                .typeString(
                  ' スティーブ･ジョブズがスタンフォード大学の卒業式で語ったスピーチに登場したことでも有名です。 ',
                )
                .typeString('<br />')
                .typeString('<br />')
                .typeString(
                  '私たちは、dotsを参加してくださるみなさま一人ひとりと例え、そんな一つひとつの点が繋がるような場にしたいと考え、コンセプトとして置くことにしました。 ',
                )
                .typeString('<br />')
                .typeString('<br />')
                .typeString(
                  'そのため、通常の結婚式とは異なり、びっくりされる方も多いかとは思いますが、ドットが繋がっていくように、みなさまも参加型で、一緒に楽しんでいただけますと幸いです。',
                )
                .start();
            }}
            options={{
              delay: 10,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Concept;