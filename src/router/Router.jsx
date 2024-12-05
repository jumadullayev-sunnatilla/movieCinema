import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home/Home";
import Afisha from "../pages/afisha/Afisha";
import Seans from "../pages/seans/Seans";
import Search from "../pages/search/Search";
import Ticket from "../pages/ticket/Ticket";
import Category from "../pages/home/category/Category";
import TopCategory from "../component/topCategory/TopCategory";
import Ganr from "../component/ganr/Ganr";
import SwiperCategory from "../component/swiperCategory/SwiperCategory";
import Detail from "../pages/detail/Detail";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/seans" element={<Seans />} />
          <Route path="/" element={<Category />}>
            <Route path="/ganr" element={<Ganr />} />
            <Route path="/topCategory" element={<SwiperCategory />} />
          </Route>

          <Route path="/afisha" element={<Afisha />} />
          <Route path="/search" element={<Search />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
