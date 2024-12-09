import React from "react";
import logo from "../../assets/logoFooter.png";
import play from "../../assets/playmarket.png";
import app from "../../assets/appstore.png";
import {
  FaClipboardList,
  FaRegStar,
  FaRegQuestionCircle,
  FaInstagram,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { RiMovieFill } from "react-icons/ri";
import { MdOutlineTheaters } from "react-icons/md";
import { SiKinopoisk } from "react-icons/si";
import { CiBasketball } from "react-icons/ci";
import EMBLEM from "../../assets/EMBLEM.png";

const Footer = () => {
  return (
    <footer className="container mx-auto mt-8 text-white flex flex-wrap justify-between p-8 bg-[#111111]">
      <div className="w-[180px] flex flex-col gap-4 bg-transparent">
        <img src={EMBLEM} alt="Footer Logo" className="w-14 h-9" />
        <img src={play} alt="Play Market" className="w-full" />
        <img src={app} alt="App Store" className="w-full" />
      </div>

      <div className="w-[180px] flex flex-col gap-2 bg-transparent ">
        <h2 className="font-bold text-lg mb-2   bg-transparent">О нас</h2>
        <p className="flex items-center gap-2 bg-transparent">
          <FaClipboardList />
          Публичная оферта
        </p>
        <p className="flex items-center gap-2  bg-transparent">
          <FaRegStar />
          Реклама
        </p>
        <p className="flex items-center gap-2 bg-transparent">
          <FaRegQuestionCircle />
          F.A.Q
        </p>
        <p className="flex items-center gap-2 bg-transparent">
          <IoCallOutline />
          Контакты
        </p>
      </div>

      <div className="w-[180px] flex flex-col gap-2 bg-transparent">
        <h2 className="font-bold text-lg mb-2  bg-transparent">Категории</h2>
        <p className="flex items-center gap-2 bg-transparent">
          <RiMovieFill />
          Kino
        </p>
        <p className="flex items-center gap-2 bg-transparent">
          <MdOutlineTheaters />
          Teatr
        </p>
        <p className="flex items-center gap-2 bg-transparent">
          <SiKinopoisk />
          Концерты
        </p>
        <p className="flex items-center gap-2  bg-transparent">
          <CiBasketball />
          Sport
        </p>
      </div>

      <div className="w-[180px] flex flex-col gap-4 bg-transparent">
        <div className="bg-transparent">
          <h2 className="font-bold text-lg mb-2 bg-transparent">
            Связаться с нами
          </h2>
          <p className="bg-transparent">+998 99 908 23 06</p>
        </div>
        <div className="bg-transparent">
          <h2 className="font-bold text-lg mb-2 bg-transparent">
            Социальные сети
          </h2>
          <div className="flex gap-4 text-xl bg-transparent">
            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
            <FaTelegram className="hover:text-gray-400 cursor-pointer" />
            <FaYoutube className="hover:text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
