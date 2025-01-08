import React from "react";
import SectionTitle from "../ReusableComponent/SectionTitle";
import catImage from "../assets/category.png";
const TopCategory = () => {
  return (
    <>
      <SectionTitle title="Our Top Category" />
      <div className="container mx-auto justify-evenly flex gap-4 mb-40 group">
        <div className="category text-center border w-[270px] h-[270px] rounded-full flex flex-col items-center justify-center cursor-pointer ">
          <img src={catImage} className="text-center align-middle hover:bg-primary" alt="" />
          <h3>Mini Low Chair</h3>
        </div>
        <div className="category text-center border w-[270px] h-[270px] rounded-full flex flex-col items-center justify-center cursor-pointer ">
          <img src={catImage} className="text-center align-middle hover:bg-primary" alt="" />
          <h3>Mini Low Chair</h3>
        </div>
        <div className="category text-center border w-[270px] h-[270px] rounded-full flex flex-col items-center justify-center cursor-pointer ">
          <img src={catImage} className="text-center align-middle hover:bg-primary" alt="" />
          <h3>Mini Low Chair</h3>
        </div>
        <div className="category text-center border w-[270px] h-[270px] rounded-full flex flex-col items-center justify-center cursor-pointer ">
          <img src={catImage} className="text-center align-middle hover:bg-primary" alt="" />
          <h3>Mini Low Chair</h3>
        </div>
        
      </div>
    </>
  );
};

export default TopCategory;
