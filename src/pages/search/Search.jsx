import React, { useEffect, useRef, useState } from "react";
import { useGetMovieBySearchQuery } from "../../redux/api/movie-api";
import Movie from "../../component/Movie/Movie";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import Skeleton from "../../component/skeleton/Skeleton";

const Search = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const searchValue = useRef(null);

  const { data, isLoading, isError } = useGetMovieBySearchQuery(
    { query: search },
    { skip: !search }
  );

  useEffect(() => {
    let query = searchParams.get("search");
    if (query) {
      setSearch(query);
    }
  }, [searchParams]);

  const handleSearchMovie = (e) => {
    e.preventDefault();
    let value = searchValue.current.value;
    setSearch(value);
    setSearchParams({ search: value });
  };

  return (
    <div className="container mx-auto">
      <form
        className="text-white bg-[#111111] flex w-[400px] mx-auto search-form h-16 p-5 items-center gap-3 rounded-xl my-12"
        onSubmit={handleSearchMovie}
      >
        <button className="text-white">
          <IoSearch />
        </button>
        <input
          ref={searchValue}
          type="search"
          className="bg-transparent w-full p-1 text-xl border-none"
          defaultValue={search}
        />
      </form>

      {!search ? (
        <div className="text-center mt-10">
          <h2 className="text-white text-5xl font-semibold">
            Start searching for movies
          </h2>
          <p className="text-gray-400 mt-2">
            Type the name of a movie in the search bar above.
          </p>
        </div>
      ) : isLoading ? (
        <div className="grid grid-cols-3 gap-5">
          <Skeleton />
        </div>
      ) : isError ? (
        <div className="mx-auto text-center">
          <h1 className="text-red-900 text-[200px] font-extrabold">ERROR</h1>
          <h3 className="text-red-900 text-[30px] font-extrabold mb-4">
            Movie not Found
          </h3>
          <button
            className="text-white border border-white py-2 px-4 rounded-xl hover:bg-red-800 hover:border-red-800"
            onClick={() => {
              setSearch("");
              setSearchParams({});
              navigate("/");
            }}
          >
            Go home
          </button>
        </div>
      ) : data?.results?.length === 0 ? (
        <div className="mx-auto text-center">
          <h1 className="text-white text-[200px] font-extrabold">404</h1>
          <h3 className="text-white text-[30px] font-extrabold mb-4">
            Movie not Found
          </h3>
          <button
            className="text-white border border-white py-2 px-4 rounded-xl hover:bg-red-800 hover:border-red-800"
            onClick={() => {
              setSearch("");
              setSearchParams({});
              navigate("/");
            }}
          >
            Go home
          </button>
        </div>
      ) : (
        <Movie data={data?.results} />
      )}
    </div>
  );
};

export default Search;
