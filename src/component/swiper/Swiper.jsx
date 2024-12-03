import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlay } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Swiper.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useGetMovieQuery } from "../../redux/api/movie-api";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data } = useGetMovieQuery();
  console.log(data?.results);
  const swiperSlide = data?.results?.map((movie) => (
    <SwiperSlide
      key={movie.id}
      style={{
        backgroundImage: `url(${
          import.meta.env.VITE_IMAGE_URL + movie.backdrop_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        paddingBottom: "20px",
      }}
      className="h-64 w-full"
    >
      <div className="bg-transparent text-white w-96 flex flex-col items-center">
        <h1 className="text-white text-3xl font-bold bg-transparent">
          {movie.title}
        </h1>
        <p className="bg-transparent">
          {movie.release_date} . {movie.original_language}
        </p>
        <button className="bg-white rounded-xl text-red-800 px-28 py-4 text-xs font-bold flex items-center gap-2">
          <FaPlay className="bg-transparent" />
          Смотреть
        </button>
      </div>
    </SwiperSlide>
  ));

  const swiperSlidePaginations = data?.results?.map((movie) => (
    <SwiperSlide key={movie.id}>
      <img src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path} />
    </SwiperSlide>
  ));
  // console.log(import.meta.env.VITE_IMAGE_URL + data?.results?.backdrop_path);
  // console.log(data?.results?.backdrop_path);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "red",
          "--swiper-navigation-bacground": "transparent",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {swiperSlide}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8AWFub9aviA-8Xw6vwv_zxDP4z7W2jPs-A&s" />
        </SwiperSlide> */}
        {swiperSlidePaginations}
      </Swiper>
    </>
  );
}
{
  /* <SwiperSlide>
{/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */
}
{
  /* <div className="text-red-600 swiper__main">salom dunyo</div>
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
</SwiperSlide>
<SwiperSlide>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8AWFub9aviA-8Xw6vwv_zxDP4z7W2jPs-A&s" />
</SwiperSlide>
<SwiperSlide>
{/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */
}
{
  /* <div
  className={`bg-[url(${
    import.meta.env.VITE_IMAGE_URL + movie.poster_path
  })]`}
>
  salom dunyo
</div>/} */
}
