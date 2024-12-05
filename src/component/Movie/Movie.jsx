import React from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({ data }) => {
  const navigate = useNavigate();
  const popularList = data?.map((movie) => (
    <div className="w-[280px]     flex flex-col gap-3" key={movie.id}>
      <img
        onClick={() => navigate(`/movie/${movie?.id}`)}
        className="w-full  object-cover h-[400px] rounded-xl "
        src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
        alt=""
      />
      <div className="px-2">
        <h1 className="text-2xl text-white font-semibold">
          {movie.title} {movie.original_language.toString().toLocaleUpperCase()}
        </h1>
      </div>
    </div>
  ));
  return (
    <div className="text-red-800 flex flex-wrap gap-2 gap-y-5">
      {popularList}
    </div>
  );
};

export default Movie;