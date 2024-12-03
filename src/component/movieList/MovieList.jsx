import React from "react";
import { useGetMovieQuery } from "../../redux/api/movie-api";

const MovieList = () => {
  const { data } = useGetMovieQuery();
  const popularList = data?.results?.map((movie) => (
    <div
      className="w-[300px]  border-2 border-red-800  flex flex-col gap-3"
      key={movie.id}
    >
      <img
        className="w-full h-2/3 object-cover "
        src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
        alt=""
      />
      <h1 className="text-5xl">{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  ));

  return <div className="text-red-800 flex flex-wrap gap-2">{popularList}</div>;
};

export default MovieList;
