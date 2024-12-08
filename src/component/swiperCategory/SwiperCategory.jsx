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
import { useNavigate } from "react-router-dom";

export default function SwiperCategory() {
  const navigate = useNavigate();

  const [type, setType] = useState("now_playing");

  const { data } = useGetMovieQuery({ type, params: { page: 1 } });

  const [swiperRef, setSwiperRef] = useState(null);

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (data?.results) {
      setSlides(data?.results.slice(0, 20));
    }
  }, [data]);

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  const movieList = MOVIE__LIST.map((item) => (
    <button
      key={item.id}
      className={`py-4 px-8 bg-[#111111] rounded-xl ${
        item.path === type ? "text-white bg-red-800 " : ""
      }`}
      onClick={() => handleChangeType(item.path)}
    >
      {item.title}
    </button>
  ));

  const handleChangeType = (id) => {
    setType(id);
    setPage(1);
  };

  return (
    <>
      <div className="text-red-800 flex justify-center gap-3">{movieList}</div>
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
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              paddingBottom: "20px",
            }}
          >
            <img
              className="absolute w-full h-4/5 z-0 object-contain"
              src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}
              alt=""
            />
            <div
              onClick={() => navigate(`/movie/${movie?.id}`)}
              className=" group z-10 bg-transparent flex flex-col justify-end h-full pb-8 cursor-pointer w-full px-3 duration-500"
            >
              <h1 className="inline-block z-10 bg-white font-extrabold text-red-800 py-2  px-9 rounded-xl opacity-0 group-hover:opacity-100 ">
                {movie.title}
              </h1>
            </div>
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
