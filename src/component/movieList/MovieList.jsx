import React, { useState } from "react";
import { useGetMovieQuery } from "../../redux/api/movie-api";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import Movie from "../Movie/Movie";
import { useMovieList } from "../../static";
const MovieList = () => {
  const [type, setType] = useState("now_playing");
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const { data } = useGetMovieQuery({ type, params: { page } });
  console.log(useMovieList());

  const handleChangeType = (id) => {
    setType(id);
    setPage(1);
  };
  useMovieList;
  const movieList = useMovieList()?.map((item) => (
    <button
      className={`py-4 px-8 bg-[#111111] rounded-xl ${
        item.path === type ? "text-white bg-red-800 " : ""
      }`}
      onClick={() => handleChangeType(item.path)}
      key={item.id}
    >
      {item.title}
    </button>
  ));

  return (
    <div>
      <ul className="flex gap-7 justify-center text-white text-lg my-5">
        {movieList}
      </ul>
      <Movie data={data?.results} />

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
