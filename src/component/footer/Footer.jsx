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
const Footer = () => {
  return (
    <footer className="container mx-auto mt-8 text-white flex flex-wrap justify-between p-8 bg-[#111111]">
      <div className="w-[180px]  flex flex-col justify-between bg-transparent">
        <img className="block" src={logo} alt="" />
        <img src={play} alt="" />
        <img src={app} alt="" />
      </div>
      <div className="w-[180px] flex flex-col justify-between bg-transparent">
        <h2>О нас</h2>
        <p>
          <FaClipboardList /> Публичная оферта
        </p>
        <p>
          <FaRegStar /> Реклама
        </p>
        <p>
          <FaRegQuestionCircle />
          F.A.Q
        </p>
        <p>
          <IoCallOutline /> Контакты
        </p>
      </div>
      <div className="w-[180px] flex flex-col justify-between bg-transparent">
        <h2>Категории</h2>
        <p>
          <RiMovieFill /> Kino
        </p>
        <p>
          <MdOutlineTheaters />
          Teatr
        </p>
        <p>
          <SiKinopoisk /> Концерты
        </p>
        <p>
          <CiBasketball /> Sport
        </p>
      </div>
      <div className="w-[180px] flex flex-col justify-between bg-transparent ">
        <h2>Связаться с нами</h2>
        <p>+998 99 908 23 06</p>

        <h2>Социальные сети</h2>

        <div className="flex gap-2  ">
          <FaInstagram />
          <FaTelegram />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
