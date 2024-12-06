import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetGenreQuery } from "../../redux/api/genre-api";
import { useGetMovieDiscoverQuery } from "../../redux/api/movie-api";
import Movie from "../Movie/Movie";

const Ganr = () => {
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: genres, isLoading, isError } = useGetGenreQuery();

  const { data } = useGetMovieDiscoverQuery({
    with_genres: selectedGenre.join(","),
    page: currentPage,
  });

  const handleChangeGenre = (id) => {
    if (selectedGenre.includes(id)) {
      setSelectedGenre((prev) => prev.filter((i) => i !== id));
    } else {
      setSelectedGenre((prev) => [...prev, id]);
    }
    setCurrentPage(1);
  };

  if (isLoading) return <div>Loading genres...</div>;
  if (isError) return <div>Error loading genres</div>;

  const genresList = genres?.genres?.map((genre) => (
    <button
      onClick={() => handleChangeGenre(genre.id)}
      className={`${
        selectedGenre.includes(genre.id) ? "bg-red-800 text-white" : ""
      } px-4 py-1  rounded-xl`}
      key={genre.id}
    >
      {genre.name}
    </button>
  ));

  return (
    <div className="bg-black text-white min-h-screen p-5">
      <div className="flex gap-5 overflow-auto p-3">{genresList}</div>
      <div className="flex flex-wrap gap-3">
        {<Movie data={data?.results} />}
      </div>
      {!data?.total_results && (
        <div>
          <h2 className="text-center mt-11">Movie not found</h2>
        </div>
      )}
    </div>
  );
};

export default Ganr;
