import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Category = () => {
  return (
    <div className="container mx-auto ">
      <div className="text-red-100 flex justify-center gap-3 my-5">
        <NavLink to={"/topCategory"}>
          <button className="py-4 px-8 bg-[#111111] rounded-xl">Movie</button>
        </NavLink>{" "}
        <NavLink to={"/ganr"}>
          <button className="py-4 px-8 bg-[#111111] rounded-xl">Ganr</button>
        </NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Category;
