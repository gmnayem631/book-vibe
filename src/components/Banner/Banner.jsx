import React from "react";
import bookImage from "../../assets/banner-bg.png";

const Banner = () => {
  return (
    <div className="flex justify-between items-center p-16 w-full mx-auto bg-[#1313130D] mt-12 rounded-3xl">
      <div className="w-[526px] flex flex-col gap-12">
        <h1 className="text-[#131313] font-bold text-6xl">
          Books to freshen up your bookshelf
        </h1>
        <div>
          <button className="btn-primary bg-[#23BE0A] text-white text-[20px] font-bold py-5 px-7 rounded-lg">
            View The List
          </button>
        </div>
      </div>
      <div className="w-80 bg-[#1313130D]">
        <img className="" src={bookImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
