import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home/Home";
import Afisha from "../pages/afisha/Afisha";
import Seans from "../pages/seans/Seans";
import Search from "../pages/search/Search";
import Ticket from "../pages/ticket/Ticket";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/seans" element={<Seans />} />
          <Route path="/afisha" element={<Afisha />} />
          <Route path="/search" element={<Search />} />
          <Route path="/ticket" element={<Ticket />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
