
'use client';

import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import Title from '../atoms/title';

export const FamilySchedule: React.FC = () => {
  const { ref, inView } = useInView({
    rootMargin: '-10px',
    triggerOnce: true,
  });

  return (
    <div id="schedule" className="mr-4 my-16 p-6 bg-[#D8C595]">
      <Title align="left">当日のスケジュールは？</Title>
      <div className="relative mb-6">
        <div ref={ref} className="text-transparent">
          <p>
            庭園でのガーデンウェディングということで気持ちの良い気候であるということと　私たちが入籍した思い入れのある季節でもあるということから5月を選びました
          </p>
          <p>
            遠方から来てくださる方もいらっしゃるので　午後からのスタートとして日暮とともにお開きにしたいと思います
          </p>
          <p>
            当日はお天気に恵まれるようみなさま祈っていていただけると嬉しいです
          </p>
        </div>
        <div className="absolute top-0">
          {inView && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '庭園でのガーデンウェディングということで気持ちの良い気候であるということと　私たちが入籍した思い入れのある季節でもあるということから5月を選びました',
                  )
                  .typeString('<br />')
                  .typeString(
                    '遠方から来てくださる方もいらっしゃるので　午後からのスタートとして日暮とともにお開きにしたいと思います',
                  )

                  .typeString('<br />')
                  .typeString(
                    '当日はお天気に恵まれるようみなさま祈っていていただけると嬉しいです',
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
        <table className="w-full uppercase font-sans">
          <tbody>
            <tr>
              <td className="font-bold">2024. 5. 25 SAT</td>
            </tr>
            <tr>
              <td>Pre-ceremony Start</td>
              <td>13:00</td>
            </tr>
            <tr>
              <td>Pre-ceremony Close</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td>Party Start</td>
              <td>15:00</td>
            </tr>
            <tr>
              <td>Close</td>
              <td>18:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

