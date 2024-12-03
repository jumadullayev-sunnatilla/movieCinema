import React from "react";
import Swipers from "../../component/swiper/Swiper";
import { useGetMovieQuery } from "../../redux/api/movie-api";
import MovieList from "../../component/movieList/MovieList";

const Home = () => {
  const { data } = useGetMovieQuery();
  console.log(data?.results);
  return (
    <div className=" container mx-auto">
      <Swipers />
      <MovieList />
    </div>
  );
};

export default Home;
