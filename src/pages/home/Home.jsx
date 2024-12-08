import React from "react";

import { useGetMovieQuery } from "../../redux/api/movie-api";
import MovieList from "../../component/movieList/MovieList";

const Home = () => {
  return (
    <div className=" container mx-auto">
      <MovieList />
    </div>
  );
};

export default Home;
