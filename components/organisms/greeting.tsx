import React from 'react';

const Greeting = () => {
  return (
    <div className="px-6 py-12">
      <Paragraph>
        梅のつぼみがふくらみ、
        <br />
        さわやかな香りが漂うこの頃、
        <br />
        みなさま、いかがお過ごしでしょうか？
      </Paragraph>
      <Paragraph>
        さて、このたび私たちは2023年5月に夫婦となりました。
        <br />
        大切なみなさまに感謝の気持ちをこめまして、ウェディングパーティーを催したいと思います。
      </Paragraph>
      <Paragraph>
        私たちらしく賑やかな会にしたく、カジュアルなパーティーを予定しています。
      </Paragraph>
      <Paragraph>
        みなさまと楽しいひとときを過ごせたら嬉しいです。お会いできることを楽しみにこころよりお待ちしております。
      </Paragraph>
      <p>2024年2月吉日</p>
      <p>牧野 孝史・恵理子</p>
    </div>
  );
};

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="pb-6">{children}</p>;
};

export default Greeting;
