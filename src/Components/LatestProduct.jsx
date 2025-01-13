import React, { useContext } from "react";
import SectionTitle from "../ReusableComponent/SectionTitle";
import productimg2 from "../assets/Product-2.png";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { apiData } from "./ContextApi";
const LatestProduct = () => {

  const data = useContext(apiData);

  return (
    <>
      <SectionTitle title="Latest Products" />
        <div className="latest-product container mx-auto p-4">
                <div className="flex flex-wrap -mx-3">
                  {data.slice(4,10).map((item)=>(

                  <div className="single-product w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                    <div className="bg-white shadow rounded relative group">
                      <img className="mb-4 bg-[#f6f7fb] w-full h-80 cursor-pointer" src={item.thumbnail}alt="" />
                      <div className="quick-panel absolute top-32 left-4 flex flex-col gap-5 text-xl opacity-0 -translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-4">
                       
                       <IoSearch className="cursor-pointer hover:text-Primary transition-all" />
                       
                        <IoCartOutline className="cursor-pointer hover:text-Primary transition-all" />
                        <FaRegHeart className="cursor-pointer hover:text-Primary transition-all" />
                      </div>
                      <div className="flex px-2 justify-between">
                      <div className="product-title text-center mb-4">
                        <h2 className="font-Crimson text-xl font-semibold transition-all hover:text-Primary cursor-pointer">
                          {item.title}
                        </h2>
                      </div>
                      <div className="product-price text-center mb-4 pb-2 text-lg font-semibold flex gap-2">
                        <p>${item.price}</p> <p className="text-red-600 line-through">$65.99</p>
                      </div>
                      </div>
                    </div>
                  </div>
                  ))}
                  
                </div>
              </div>
    </>
  );
};

export default LatestProduct;
