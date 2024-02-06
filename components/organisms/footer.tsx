'use client';
import { Link as Scroll } from 'react-scroll';

export const Footer = () => {
  return (
    <div className="mt-12 pb-6">
      <div className="relative px-4 pt-8 flex flex-col bg-black text-white">
        <div className="font-bold pb-1">Our wedding party</div>
        <Scroll to="greeting" smooth>
          Greeting
        </Scroll>
        <Scroll to="concept" smooth>
          Concept
        </Scroll>
        <Scroll to="place" smooth>
          Place
        </Scroll>
        <Scroll to="schedule" smooth>
          Schedule
        </Scroll>
        <Scroll to="price" smooth>
          Price
        </Scroll>
        <Scroll to="outfit" smooth>
          Outfit
        </Scroll>
        <Scroll to="top" smooth className="mt-3">
          Back to top ↑
        </Scroll>
      </div>
      <div className="mt-[0px] h-[23px] bg-black" />
      <div className="mt-[1px] h-[22px] bg-black" />
      <div className="mt-[2px] h-[21px] bg-black" />
      <div className="mt-[3px] h-[20px] bg-black" />
      <div className="mt-[4px] h-[19px] bg-black" />
      <div className="mt-[5px] h-[18px] bg-black" />
      <div className="mt-[6px] h-[17px] bg-black" />
      <div className="mt-[7px] h-[16px] bg-black" />
      <div className="mt-[8px] h-[15px] bg-black" />
      <div className="mt-[9px] h-[14px] bg-black" />
      <div className="mt-[10px] h-[13px] bg-black" />
      <div className="mt-[11px] h-[12px] bg-black" />
      <div className="mt-[12px] h-[11px] bg-black" />
      <div className="mt-[13px] h-[10px] bg-black" />
      <div className="mt-[14px] h-[9px] bg-black" />
      <div className="mt-[15px] h-[8px] bg-black" />
      <div className="mt-[16px] h-[7px] bg-black" />
      <div className="mt-[17px] h-[6px] bg-black" />
      <div className="mt-[18px] h-[5px] bg-black" />
      <div className="mt-[19px] h-[4px] bg-black" />
      <div className="mt-[20px] h-[3px] bg-black" />
      <div className="mt-[21px] h-[2px] bg-black" />
      <div className="mt-[22px] h-[1px] bg-black" />
      <div className="mt-[23px] h-[0px] bg-black" />
    </div>
  );
};
