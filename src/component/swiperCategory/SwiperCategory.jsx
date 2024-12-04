import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MOVIE__LIST } from "../../static";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperCategory.css";
import { useGetMovieQuery } from "../../redux/api/movie-api";

export default function SwiperCategory() {
  const [type, setType] = useState("now_playing");
  const [page, setPage] = useState(1);
  const { data } = useGetMovieQuery({ type, params: { page: 1 } });

  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);

  // Create array with slides
  const [slides, setSlides] = useState([]);
  console.log(slides);

  useEffect(() => {
    if (data?.results) {
      setSlides(data?.results.slice(0, 20)); // set first 20 movies from API
    }
  }, [data]);

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0); // Adjusted for 1-based index
  };

  const movieList = MOVIE__LIST.map((item) => (
    <button onClick={() => handleChangeType(item.path)} key={item.id}>
      {item.title}
    </button>
  ));

  const handleChangeType = (id) => {
    setType(id);
    setPage(1);
  };

  return (
    <>
      <div className="text-red-800">{movieList}</div>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
      >
        {slides.map((movie, index) => (
          <SwiperSlide
            key={movie.id || index}
            className="relative"
            style={{
              backgroundImage: `url(${
                movie.backdrop_path
                  ? import.meta.env.VITE_IMAGE_URL + movie.backdrop_path
                  : "path/to/default-image.jpg"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              paddingBottom: "20px",
            }}
          >
            <img
              className="absolute w-full h-full z-0"
              src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="append-buttons">
        <button onClick={() => slideTo(1)} className="prepend-slide">
          Slide 1
        </button>
        <button
          onClick={() => slideTo(Math.floor(slides.length / 2))}
          className="slide-250"
        >
          Slide {Math.floor(slides.length / 2)}
        </button>
        <button onClick={() => slideTo(slides.length)} className="slide-500">
          Slide {slides.length}
        </button>
      </p>
    </>
  );
}
