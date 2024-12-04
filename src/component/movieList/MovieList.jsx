import React, { useState } from "react";
import { useGetMovieQuery } from "../../redux/api/movie-api";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { MOVIE__LIST } from "../../static";
const MovieList = () => {
  const [type, setType] = useState("now_playing");
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const { data } = useGetMovieQuery({ type, params: { page } });
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
      <h1 className="text-xs">{movie.title}</h1>
    </div>
  ));
  const handleChangeType = (id) => {
    setType(id);
    setPage(1);
  };
  const movieList = MOVIE__LIST.map((item) => (
    <button onClick={() => handleChangeType(item.path)} key={item.id}>
      {item.title}
    </button>
  ));

  return (
    <div>
      <ul className="flex gap-7 justify-center text-white text-lg my-5">
        {movieList}
      </ul>
      <div className="text-red-800 flex flex-wrap gap-2">{popularList}</div>;
      <div className="flex justify-center pt-6 pb-30px">
        <Stack spacing={1}>
          <Pagination
            count={data?.total_pages}
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </div>
    </div>
  );
};

export default MovieList;
