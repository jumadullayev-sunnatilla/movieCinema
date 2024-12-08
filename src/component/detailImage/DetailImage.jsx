import React from "react";

const DetailImage = ({ data, isLoading }) => {
  console.log(data);
  const image = data?.backdrops
    ?.slice(0, 8)
    .map((image) => (
      <img
        src={import.meta.env.VITE_IMAGE_URL + image.file_path}
        width={300}
        key={image.file_path}
        alt=""
        className="w-full"
      />
    ));
  return (
    <div className="container mx-auto grid grid-cols-4 grid-rows-2">
      {image}
    </div>
  );
};

export default DetailImage;
