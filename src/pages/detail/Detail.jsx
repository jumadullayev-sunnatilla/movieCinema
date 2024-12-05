import React from "react";

import { useParams } from "react-router-dom";
import {
  useGetDetailImagesQuery,
  useGetDetailQuery,
} from "../../redux/api/movie-api";

const Detail = () => {
  const { id } = useParams();
  const { data } = useGetDetailQuery(id);
  const { data: images } = useGetDetailImagesQuery(id);
  console.log(images);

  return (
    <>
      <div className={`w-full min-h-screen relative container mx-auto`}>
        <img
          src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path}
          className="w-full h-full absolute top-0 left-0 object-cover"
          alt=""
        />
        <div className="w-full h-full absolute top-0 left-0 bg-[#0009]"></div>
        <div className="relative grid grid-cols-2 container bg-transparent">
          <img
            src={import.meta.env.VITE_IMAGE_URL + data?.poster_path}
            className="w-[500px] sticky top-4"
            alt=""
          />
          <div className="text-white bg-transparent">
            <h2 className="text-6xl bg-transparent">{data?.title}</h2>
            <p className="bg-transparent">{data?.overview}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap container mx-auto">
        {images?.backdrops?.slice(0, 12)?.map((image) => (
          <img
            src={import.meta.env.VITE_IMAGE_URL + image.file_path}
            width={300}
            key={image.file_path}
            alt=""
          />
        ))}
      </div>
    </>
  );
};

export default Detail;
