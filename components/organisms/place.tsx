'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import Title from '../atoms/title';

export const Place = () => {
  const { ref, inView } = useInView({
    rootMargin: '-10px',
    triggerOnce: true,
  });

  return (
    <div id="place" className="ml-4 my-8 p-6 bg-[#F6C90E]">
      <Title align="right">会場はどこなの？</Title>
      <div className="relative mb-6">
        <div ref={ref} className="text-transparent">
          <p>
            妻・恵理子が育った神奈川県鎌倉市にある「笹野邸」が今回の会場となります
          </p>
          <p>
            広い庭園を有しておりその庭園をめいっぱい使わせていただく予定です
          </p>
          <p>
            鎌倉市の景観重要建築物にも指定されている素敵な邸宅で鎌倉を堪能していただきたいです
          </p>
        </div>
        <div className="absolute top-0">
          {inView && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '妻・恵理子が育った神奈川県鎌倉市にある「笹野邸」が今回の会場となります',
                  )
                  .typeString('<br />')
                  .typeString(
                    '広い庭園を有しておりその庭園をめいっぱい使わせていただく予定です',
                  )

                  .typeString('<br />')
                  .typeString(
                    '鎌倉市の景観重要建築物にも指定されている素敵な邸宅で鎌倉を堪能していただきたいです',
                  )
                  .start();
              }}
              options={{
                delay: 10,
                wrapperClassName: 'break-all',
              }}
            />
          )}
        </div>
      </div>
      <div className="mb-3">
        <div className="text-xl mb-3 font-extrabold">笹野邸</div>
        <div className="mb-3">
          <div className="mb-3">
            <div>〒248-0017</div>
            <div>神奈川県鎌倉市佐助1丁目2-9</div>
          </div>
          <div className="mb-3">
            <div>電車でお越しの方</div>
            <div>鎌倉駅西口より徒歩11分</div>
          </div>
          <div className="mb-3">
            <div>お車でお越しの方</div>
            <div>近隣の有料駐車場のご案内となります</div>
            <div>タイムズ鎌倉由比ガ浜第2</div>
            <div>ダイレクトパーク鎌倉由比ガ浜</div>
          </div>
        </div>
        <div>
          <div className="text-sm">
            <div>ご注意点</div>
            <div>
              Googleマップで「笹野邸」と検索しますと　邸宅の裏口への経路になりますので　必ず下記のURLからご確認いただき　地図の★の場所からお越しください
            </div>
            <div className="text-blue-600 hover:underline">
              <a href="https://maps.app.goo.gl/uebc7i8yGEmi1niSA">
                https://maps.app.goo.gl/uebc7i8yGEmi1niSA
              </a>
            </div>
          </div>
          <div className="mb-3">
            <Image
              src="access.svg"
              width={500}
              height={500}
              alt="Access"
              className="m-auto"
            />
          </div>
          <div>
            <div className="mb-3">
              <div>当日なにかお困りのことがございましたら</div>
              <div>下記の電話番号までご連絡ください</div>
            </div>
            <div>tel 0463-67-7400</div>
          </div>
        </div>
      </div>
    </div>
  );
};
