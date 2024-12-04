import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Category = () => {
  return (
    <div className="container mx-auto">
      <div className="text-red-500">
        <NavLink to={"/topCategory"}>
          <button>Movie</button>
        </NavLink>{" "}
        <NavLink to={"/ganr"}>
          <button>Ganr</button>
        </NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Category;
