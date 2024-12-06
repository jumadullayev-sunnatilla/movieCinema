import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import {
  useGetDetailImagesQuery,
  useGetDetailQuery,
} from "../../redux/api/movie-api";
import { GrPrevious } from "react-icons/gr";
import { CiSaveDown2 } from "react-icons/ci";
import { FaPlay, FaShareAlt } from "react-icons/fa";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetDetailQuery(id);
  const { data: images } = useGetDetailImagesQuery(id);
  console.log(data);
  const handleGoBack = () => {
    navigate(-1);
    console.log(1);
  };

  return (
    <div className="container mx-auto">
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
        className="w-full h-[640px] rounded-xl p-4 flex flex-col justify-between  "
      >
        <div className="flex justify-between items-center bg-transparent detailPAge">
          <button className="py-4 px-5 bg-black opacity-80">
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
        <div className="bg-transparent text-white w-96 flex flex-col items-center mx-auto">
          <h1 className="text-white text-3xl font-bold bg-transparent">
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
            Смотреть
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
