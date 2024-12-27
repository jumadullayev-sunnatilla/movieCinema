import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Slider.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaStar, FaPlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useGetMovieQuery } from "../../redux/api/movie-api";

const Slider = () => {
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data, isLoading } = useGetMovieQuery({
    type: "popular",
    params: { page: 1 },
  });

  return (
    <>
      <div className="container">
        {isLoading ? (
          <div className="flex flex-row gap-6 justify-center items-center my-[200px]">
            <div className="w-14 h-14 rounded-full bg-red-500 animate-bounce"></div>
            <div className="w-14 h-14 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-14 h-14 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
          </div>
        ) : (
          <>
            <Swiper
              style={{
                "--swiper-navigation-color": "#f00",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {data?.results?.slice(0, 5).map((movieItem) => (
                <SwiperSlide className="rounded-lg" key={movieItem.id}>
                  <div className="relative w-full h-full">
                    <img
                      src={`${import.meta.env.VITE_IMAGE_URL}${
                        movieItem.backdrop_path
                      }`}
                      width={1360}
                      height={640}
                      className="rounded-[18px]"
                      alt={movieItem.original_title}
                    />
                    <div className="w-full h-full absolute z-50 bottom-0 left-[50%] translate-x-[-50%] bg-radial-[at_100%_100%] text-white gra flex">
                      <div className="absolute bottom-6 left-[50%] translate-x-[-50%] flex flex-col items-center gap-4 max-sm:gap-2">
                        <h2 className="font-[500] text-[40px] leading-[40px] max-sm:text-[20px]">
                          {movieItem.original_title}
                        </h2>
                        <div className="flex items-center gap-[20px]">
                          <div className="flex items-center gap-[8px]">
                            <FaStar className="text-yellow-500" />
                            <p>{movieItem.vote_average}</p>
                          </div>
                          <p>{movieItem.release_date}</p>
                          <p className="uppercase">
                            {movieItem.original_language}
                          </p>
                        </div>
                        <button
                          onClick={() => navigate(`/movie/${movieItem.id}`)}
                          className="flex items-center justify-center bg-white px-[130px] py-3 rounded-lg text-redText gap-3 font-semibold max-sm:w-[20px]"
                        >
                          <FaPlay />
                          Смотреть
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={100}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {data?.results?.slice(0, 5).map((posterMovie) => (
                <SwiperSlide className="rounded-lg" key={posterMovie.id}>
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URL}${
                      posterMovie.backdrop_path
                    }`}
                    className="rounded-xl w-[108px]"
                    alt={posterMovie.original_title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </>
  );
};

export default Slider;
