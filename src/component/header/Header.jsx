import React from "react";
import logo from "../../assets/main__logo.png";
import { MdLocalMovies, MdMovie } from "react-icons/md";
import { FaSearch, FaTicketAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-evenly items-center py-5  bg-black text-[#A1A1A1] container mx-auto">
      <NavLink to={"/"}>
        <img src={logo} alt="logo__movie" className="w-28 h-11" />
      </NavLink>
      <ul className="flex items-center">
        <NavLink to={"/afisha"} className={" active:text-red-800"}>
          <li className="px-3 py-1 text-xl active:text-red-900 flex flex-col gap-1 items-center justify-center  font-light">
            <MdLocalMovies />
            <span className="text-sm">Afisha</span>
          </li>
        </NavLink>
        <NavLink to={"/seans"} className={"active:text-red-900"}>
          <li className="px-3 py-1 text-xl active:text-red-900 flex flex-col gap-1 items-center justify-center  font-light">
            <MdMovie />
            <span className="text-sm">Seans</span>
          </li>{" "}
        </NavLink>
        <NavLink to={"/ticket"} className={"active:text-red-900"}>
          <li className="px-3 py-1 text-xl active:text-red-900 flex flex-col gap-1 items-center justify-center  font-light">
            <FaTicketAlt />
            <span className="text-sm">Bilet</span>
          </li>{" "}
        </NavLink>
        <NavLink to={"/search"} className={"active:text-red-900"}>
          <li className="px-3 py-1 text-xl active:text-red-900 flex flex-col gap-1 items-center justify-center  font-light">
            <FaSearch />
            <span className="text-sm">Search</span>
          </li>{" "}
        </NavLink>
      </ul>
      <div>
        <button className="py-2 px-16 bg-red-800 rounded-xl text-ellipsis text-base">
          Kirish
        </button>
      </div>
    </div>
  );
};

export default Header;
