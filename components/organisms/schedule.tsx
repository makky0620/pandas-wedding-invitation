'use client';

import Typewriter from 'typewriter-effect';
import Title from '../atoms/title';

const Schedule: React.FC = () => {
  return (
    <div className="mr-4 my-8 p-6 bg-[#D8C595]">
      <Title align="left">当日のスケジュールは？</Title>
      <div className="relative mb-6">
        <div className="text-transparent">
          <p>
            庭園でのガーデンウェディングということで気持ちの良い気候であるということと、私たちが入籍した思い入れのある季節でもあるということから5月を選びました。
          </p>
          <p>
            遠方から来てくださる方もいらっしゃるので、午後からのスタートとして、日暮とともにお開きにしたいと思います。
          </p>
          <p>
            当日はお天気に恵まれるようみなさま祈っていていただけると嬉しいです・・・！
          </p>
        </div>
        <div className="absolute top-0">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '庭園でのガーデンウェディングということで気持ちの良い気候であるということと、私たちが入籍した思い入れのある季節でもあるということから5月を選びました。',
                )
                .typeString(
                  '遠方から来てくださる方もいらっしゃるので、午後からのスタートとして、日暮とともにお開きにしたいと思います。',
                )
                .typeString(
                  '当日はお天気に恵まれるようみなさま祈っていていただけると嬉しいです・・・！',
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
        <table className="table-fixed w-full uppercase">
          <tbody>
            <tr>
              <td>( 2024. 5. 25 SAT )</td>
            </tr>
            <tr>
              <td>Reception Open</td>
              <td>15:00</td>
            </tr>
            <tr>
              <td>Party Star</td>
              <td>15:30</td>
            </tr>
            <tr>
              <td>Ending</td>
              <td>18:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
