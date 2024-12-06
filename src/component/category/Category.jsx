import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Category = () => {
  return (
    <div className="container mx-auto ">
      <div className="text-red-100 flex justify-between  gap-1 my-5 bg-[#111111]  w-96 mx-auto rounded-3xl category">
        <NavLink to={"/topCategory"} className={`bg-[#111111] rounded-3xl`}>
          <button className="py-4 px-20  bg-transparent rounded-3xl ">
            Movie
          </button>
        </NavLink>{" "}
        <NavLink to={"/ganr"} className={`bg-[#111111] rounded-2xl`}>
          <button className="py-4 px-20  bg-transparent rounded-3xl ">
            Ganr
          </button>
        </NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Category;
