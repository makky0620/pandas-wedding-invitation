'use client';

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import Typewriter from 'typewriter-effect';
import Title from '../atoms/title';

const Place = () => {
  return (
    <div className="ml-4 p-6 bg-[#F6C90E]">
      <Title align="right">会場はどこなの？</Title>
      <div className="relative mb-6">
        <div className="text-transparent">
          <p>
            新婦、恵理子が育った神奈川県鎌倉市にある「笹野邸」が今回の会場。
          </p>
          <p>
            広い庭園を有しており、その庭園をめいっぱい使わせていただく予定です。
          </p>
          <p>
            鎌倉市の景観重要建築物にも指定されている素敵な邸宅で鎌倉を担当していただきたいです。
          </p>
        </div>
        <div className="absolute top-0">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '新婦、恵理子が育った神奈川県鎌倉市にある「笹野邸」が今回の会場。',
                )
                .typeString(
                  '広い庭園を有しており、その庭園をめいっぱい使わせていただく予定です。',
                )
                .typeString(
                  '鎌倉市の景観重要建築物にも指定されている素敵な邸宅で鎌倉を担当していただきたいです。',
                )
                .start();
            }}
            options={{
              delay: 10,
            }}
          />
        </div>
      </div>
      <div className="text-right mb-3">
        <div className="text-xl mb-3">笹野邸</div>
        <div>〒248-0017</div>
        <div className="mb-3">神奈川県鎌倉市佐助1丁目2-9</div>
        <div>鎌倉南口から徒歩12分</div>
      </div>
      <div>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''}>
          <Map
            style={{ width: '100%', aspectRatio: '16 / 9' }}
            center={{ lat: 35.3178996, lng: 139.5442574 }}
            zoom={16}
          >
            <Marker position={{ lat: 35.3178996, lng: 139.5442574 }} />
          </Map>
        </APIProvider>
      </div>
    </div>
  );
};

export default Place;
