import React from "react";

import { useGetMovieQuery } from "../../redux/api/movie-api";
import MovieList from "../../component/movieList/MovieList";
import Slider from "../../component/slider/Slider";

const Home = () => {
  return (
    <div className=" container mx-auto  mt-28">
      <Slider />
      <MovieList />
    </div>
  );
};

export default Home;
