import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home/Home";
import Afisha from "../pages/afisha/Afisha";
import Search from "../pages/search/Search";
import Ticket from "../pages/ticket/Ticket";
import SwiperCategory from "../component/swiperCategory/SwiperCategory";
import Detail from "../pages/detail/Detail";
import Ganr from "../pages/detail/ganr/Ganr";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/ganr" element={<Ganr />} />
          <Route path="/topCategory" element={<SwiperCategory />} />

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
