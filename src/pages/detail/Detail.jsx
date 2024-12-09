import React, { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import {
  useGetDetailImagesQuery,
  useGetDetailQuery,
} from "../../redux/api/movie-api";
import { GrPrevious } from "react-icons/gr";
import { CiSaveDown2 } from "react-icons/ci";
import { FaPlay, FaShareAlt } from "react-icons/fa";
import DetailData from "../../component/detailData/DetailData";
import Bilet from "../../component/bilet/Bilet";
import DetailImage from "../../component/detailImage/DetailImage";

import { useTranslation } from "react-i18next";

const Detail = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(true);

  const { id } = useParams();
  const { data } = useGetDetailQuery(id);
  const { data: imagesData, isLoading: isLoadingIamge } =
    useGetDetailImagesQuery(id);

  const handleGoBack = () => {
    navigate(-1);
  };
  const { t } = useTranslation();

  return (
    <div className="container mx-auto mt-28">
      <div
        style={{
          backgroundImage: `url(${
            import.meta.env.VITE_IMAGE_URL + data?.backdrop_path
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",

          paddingBottom: "20px",
        }}
        className="w-full h-[640px] rounded-xl p-4 flex flex-col justify-between mt-10 "
      >
        <div className="flex justify-between items-center bg-transparent detailPAge">
          <button
            onClick={handleGoBack}
            className="py-4 px-5 bg-black opacity-80"
          >
            <GrPrevious />
          </button>
          <div className="flex gap-3 bg-transparent">
            <button className="py-4 px-5 bg-black opacity-80">
              <CiSaveDown2 />
            </button>
            <button className="py-4 px-5 bg-black opacity-80">
              <FaShareAlt />
            </button>
          </div>
        </div>
        <div className="bg-transparent text-white w-96 flex flex-col items-center mx-auto gap-y-2">
          <h1 className="text-white text-3xl font-bold bg-transparent text-center">
            {data?.title}
          </h1>
          <p className="bg-transparent">
            {data?.release_date} . {data?.original_language}
          </p>
          <button
            onClick={handleGoBack}
            className="bg-white rounded-xl text-red-800 px-28 py-4 text-xs font-bold flex items-center gap-2"
          >
            <FaPlay className="bg-transparent" />
            {t("swiper.look")}
          </button>
        </div>
      </div>
      <div className="flex items-center  justify-center mt-10 w-[400px] mx-auto">
        <div
          className={`text-center py-5 rounded-xl bg-[#111111] text-white  w-[200px] cursor-pointer font-semibold ${
            page ? "text-red-900 bg-[#2d2d2d] font-extrabold" : ""
          }`}
          onClick={() => setPage(true)}
        >
          Detail
        </div>
        <div
          className={`text-center  py-5 rounded-xl bg-[#111111] text-white  w-[200px] cursor-pointer font-semibold ${
            !page ? "text-red-900 bg-[#2d2d2d] font-extrabold" : ""
          }`}
          onClick={() => setPage(false)}
        >
          Ticket
        </div>
      </div>
      {page ? <DetailData /> : <Bilet />}
      <DetailImage data={imagesData} loading={isLoadingIamge} />
    </div>
  );
};

export default Detail;
