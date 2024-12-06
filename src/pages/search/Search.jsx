import React, { useEffect, useRef, useState } from "react";
import { useGetMovieBySearchQuery } from "../../redux/api/movie-api";
import Movie from "../../component/Movie/Movie";
import { useSearchParams } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const searchValue = useRef(null);
  const { data } = useGetMovieBySearchQuery(
    {
      query: search,
    },
    { skip: !search }
  );
  useEffect(() => {
    let query = searchParams.get("search");
    if (query) {
      searchValue.current.value = query;
      setSearch(query);
    }
  }, []);
  console.log(data);
  const handleSearchMovie = (e) => {
    let value = searchValue.current.value;
    e.preventDefault();
    console.log(value);
    setSearch(value);
    setSearchParams({ search: value });
  };
  return (
    <div className=" container mx-auto">
      <form
        action=""
        className="text-white bg-[#111111] flex w-[400px] mx-auto search-form h-16 p-5 items-center gap-3 rounded-xl my-12"
        onSubmit={handleSearchMovie}
      >
        <button className="text-white">
          <IoSearch />
        </button>
        <input
          ref={searchValue}
          type="search"
          className="bg-transparent w-full p-1"
        />
      </form>
      <Movie data={data?.results} />
    </div>
  );
};

export default Search;
