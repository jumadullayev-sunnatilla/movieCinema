import React from "react";

const Skeleton = () => {
  return (
    <div className="w-full flex  flex-row flex-wrap gap-2 justify-center">
      <div className="flex flex-col items-center">
        <div className="animate-pulse bg-gray-700 rounded w-[280px] h-[400px] mb-4"></div>
        <div className="animate-pulse bg-gray-700 rounded w-[200px] h-[30px]"></div>
      </div>
    </div>
  );
};

export default Skeleton;
