import React from "react";
import {
  useGetDetailImagesQuery,
  useGetDetailQuery,
} from "../../redux/api/movie-api";
import { useNavigate, useParams } from "react-router-dom";
import imdb from "../../assets/imdb.png";
import kinopoisk from "../../assets/kinopoisk.png";
import { HiTicket } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

const DetailData = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetDetailQuery(id);
  console.log(data);
  document.title = data ? data?.title : "BILL STICK";
  let ganr = "";
  const genres = data?.genres.map((id) => {
    ganr += id.name + ",";
  });

  return (
    <div className="text-white w-[400px] mx-auto my-10 ">
      <div className="flex justify-between items-center mb-12   ">
        <div
          className="w-[180px] h-[64px] border border-white flex justify-center rounded-xl
         items-center pl-1"
        >
          <p className="text-2xl font-black w-10">{data?.vote_average}</p>
          <img className="rounded-xl" src={imdb} alt="imdb" />
        </div>
        <div
          className="w-[180px] h-[64px] border border-white flex justify-center rounded-xl
         items-center pl-1"
        >
          <p className="text-2xl font-black w-10">{data?.vote_average}</p>
          <img className="rounded-xl" src={kinopoisk} alt="imdb" />
        </div>
      </div>
      {/* matli hudud */}{" "}
      <h1 className="text-xl font-extrabold mb-6">{t("detail.detail")}</h1>
      <div className="flex flex-col gap-4 mb-10">
        <div className="flex justify-between items-center text-[#A1A1A1]">
          <h2 className="text-base font-medium">{t("detail.duration")}</h2>
          <p className="flex justify-between items-center text-[#A1A1A1]">
            1ч 34м / 94 минут
          </p>
        </div>
        <div className="flex justify-between items-center text-[#A1A1A1]">
          <h2 className="text-base font-medium">{t("detail.premiere")}</h2>
          <p className="flex justify-between items-center text-[#A1A1A1]">
            {data?.release_date}
          </p>
        </div>
        <div className="flex justify-between items-center text-[#A1A1A1]">
          <h2 className="text-base font-medium">{t("detail.production")}</h2>
          <p className="flex justify-between items-center text-[#A1A1A1]">
            {data?.origin_country[0]}
          </p>
        </div>
        <div className="flex justify-between items-center text-[#A1A1A1]">
          <h2 className="text-base font-medium">{t("detail.genres")}</h2>
          <p className="flex justify-between items-center text-[#A1A1A1]">
            {ganr}
          </p>
        </div>
        <div className="flex justify-between items-center text-[#A1A1A1]">
          <h2 className="text-base font-medium">{t("detail.age_rating")}</h2>
          <p className="flex justify-between items-center text-[#A1A1A1]">6+</p>
        </div>
      </div>
      <hr className="text-white" />
      <h1 className="text-xl font-extrabold mb-6 mt-6">
        {t("detail.about_movie")}
      </h1>
      <p className="text-base font-medium  text-[#a1a1a1]">{data?.overview}</p>
      <button
        className="w-full bg-red-800 mt-6 text-[#a1a1a1] flex gap-1 justify-center items-center py-4 rounded-xl hover:bg-[#A1A1A1] hover:text-red-800 
       "
        onClick={() => navigate("/ticket")}
      >
        <HiTicket className="bg-transparent text-3xl" />
        <span className="bg-transparent text-lg font-bold">
          {t("detail.ticket_buy")}
        </span>
      </button>
    </div>
  );
};

export default DetailData;
