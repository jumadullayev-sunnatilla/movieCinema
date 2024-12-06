import React from "react";
import { BILET__MONTH, CINEMATICA } from "../../static";
import { RiVipCrown2Fill } from "react-icons/ri";
import Swipers from "../swiper/Swiper";

const Bilet = () => {
  console.log(BILET__MONTH);
  const ticket__day_march = BILET__MONTH.slice(0, 5).map((item) => {
    return (
      <div
        key={item.id}
        className="bg-[#111] py-3 px-4 flex flex-col gap-1 justify-center items-center rounded-lg"
      >
        <h2 className="bg-transparent text-base font-semibold">{item.day}</h2>
        <h2 className="bg-transparent text-base font-semibold">{item.date}</h2>
      </div>
    );
  });
  const ticket__day_aprel = BILET__MONTH.slice(0, 8).map((item) => {
    return (
      <div
        key={item.id}
        className="bg-[#111] py-3 px-4 flex flex-col gap-1 justify-center items-center rounded-lg"
      >
        <h2 className="bg-transparent text-base font-semibold">{item.day}</h2>
        <h2 className="bg-transparent text-base font-semibold">{item.date}</h2>
      </div>
    );
  });
  const cinema = CINEMATICA.map((item) => (
    <div
      key={item.id}
      className="bg-[linear-gradient(#111111_65%,_#2D2D2D_65%)] w-[180px] h-[100px] p-3 flex flex-col justify-between rounded-xl"
    >
      <p className="bg-transparent text-[#444444] text-sm font-semibold">
        Зал № {item.cinema}
      </p>
      <div className="flex justify-between items-center bg-transparent">
        <p className="bg-transparent text-base font-semibold">
          {item.start_time}
        </p>
        {item.vip && (
          <div className="flex gap-1 bg-transparent items-center cinema-vip">
            <p className="bg-transparent">VIP </p>
            <RiVipCrown2Fill />
          </div>
        )}
      </div>
      <div className="flex justify-between items-center bg-transparent">
        <p className="bg-transparent">{item.gragraphics}D</p>
        <p className="bg-transparent">{`${item.price}`} сум</p>
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto ">
      <Swipers />
      <div className="flex justify-between">
        <div className="text-white">
          <h1>March</h1>
          <div className="text-white flex gap-2 ">{ticket__day_march}</div>
        </div>
        <div className="text-white">
          <h1>Aprel</h1>
          <div className="text-white flex gap-2 ">{ticket__day_aprel}</div>
        </div>
      </div>
      <div className="text-white">
        <h1>Cinematica</h1>
        <address>7, Улица Алмазар​, Шайхантахурский район</address>
        <div className="flex flex-wrap gap-4">{cinema}</div>
      </div>
    </div>
  );
};

export default Bilet;
