import React from "react";
import logo from "../../assets/main__logo.png";
import { MdLocalMovies, MdMovie } from "react-icons/md";
import { FaSearch, FaTicketAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 bg-black text-[#A1A1A1] h-[80px]"
      style={{
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="flex justify-evenly items-center py-5 container mx-auto">
        <NavLink to={"/"}>
          <img src={logo} alt="logo__movie" className="w-28 h-11" />
        </NavLink>
        <ul className="flex items-center">
          <NavLink to={"/afisha"} className={" active:text-red-800"}>
            <li className="px-3 py-1 text-xl active:text-red-900 flex flex-col gap-1 items-center justify-center font-light">
              <MdLocalMovies />
              <span className="text-sm">{t("header.afisha")}</span>
            </li>
          </NavLink>
          <NavLink to={"/seans"} className={"active:text-red-900"}>
            <li className="px-3 py-1 text-xl active:text-red-900 flex flex-col gap-1 items-center justify-center font-light">
              <MdMovie />
              <span className="text-sm">{t("header.seans")}</span>
            </li>
          </NavLink>
          <NavLink to={"/ticket"} className={"active:text-red-900"}>
            <li className="px-3 py-1 text-xl active:text-red-900 flex flex-col gap-1 items-center justify-center font-light">
              <FaTicketAlt />
              <span className="text-sm">{t("header.ticket")}</span>
            </li>
          </NavLink>
          <NavLink to={"/search"} className={"active:text-red-900"}>
            <li className="px-3 py-1 text-xl active:text-red-900 flex flex-col gap-1 items-center justify-center font-light">
              <FaSearch />
              <span className="text-sm">{t("header.search")}</span>
            </li>
          </NavLink>
        </ul>
        <div className="flex items-center gap-4">
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="py-2 px-4 bg-red-800 text-white rounded-xl focus:outline-none"
          >
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
            <option value="en">En</option>
          </select>
          <button className="py-2 px-16 bg-red-800 rounded-xl text-ellipsis text-base">
            {t("header.sign_in")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
