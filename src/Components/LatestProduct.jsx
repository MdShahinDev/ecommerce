import React from "react";
import SectionTitle from "../ReusableComponent/SectionTitle";
import productimg2 from "../assets/Product-2.png";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
const LatestProduct = () => {
  return (
    <>
      <SectionTitle title="Latest Products" />

      <div className="latestProdcut container mx-auto justify-center flex flex-wrap gap-x-3 gap-y-6 pb-10">
        <div className="singleProduct relative group cursor-pointer p-1">
          <img src={productimg2}alt="" className="w-80 h-72 border bg-[#f7f7f7] "/>
          <div className="absolute top-32 left-6 quick-item opacity-0 -translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-4 flex flex-col gap-5">
            <IoCartOutline className="text-2xl hover:text-Primary transition-all" />
            <IoSearch className="text-2xl hover:text-Primary transition-all" />
            <FaRegHeart className="text-2xl hover:text-Primary transition-all" />
          </div>
          <div className="product-details flex justify-between p-4">
            <p className="cursor-pointer hover:text-Primary font-Crimson text-lg transition-all font-semibold">Sunglases</p>
            <div className="meta flex gap-2 cursor-pointer">
              <p>$22.99</p>
              <p className="text-red-700 line-through">$30.99</p>
            </div>
          </div>
        </div>
        <div className="singleProduct relative group cursor-pointer p-1">
          <img src={productimg2}alt="" className="w-80 h-72 border bg-[#f7f7f7] "/>
          <div className="absolute top-32 left-6 quick-item opacity-0 -translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-4 flex flex-col gap-5">
            <IoCartOutline className="text-2xl hover:text-Primary transition-all" />
            <IoSearch className="text-2xl hover:text-Primary transition-all" />
            <FaRegHeart className="text-2xl hover:text-Primary transition-all" />
          </div>
          <div className="product-details flex justify-between p-4">
            <p className="cursor-pointer hover:text-Primary font-Crimson text-lg transition-all font-semibold">Sunglases</p>
            <div className="meta flex gap-2 cursor-pointer">
              <p>$22.99</p>
              <p className="text-red-700 line-through">$30.99</p>
            </div>
          </div>
        </div>
        <div className="singleProduct relative group cursor-pointer p-1">
          <img src={productimg2}alt="" className="w-80 h-72 border bg-[#f7f7f7] "/>
          <div className="absolute top-32 left-6 quick-item opacity-0 -translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-4 flex flex-col gap-5">
            <IoCartOutline className="text-2xl hover:text-Primary transition-all" />
            <IoSearch className="text-2xl hover:text-Primary transition-all" />
            <FaRegHeart className="text-2xl hover:text-Primary transition-all" />
          </div>
          <div className="product-details flex justify-between p-4">
            <p className="cursor-pointer hover:text-Primary font-Crimson text-lg transition-all font-semibold">Sunglases</p>
            <div className="meta flex gap-2 cursor-pointer">
              <p>$22.99</p>
              <p className="text-red-700 line-through">$30.99</p>
            </div>
          </div>
        </div>
        <div className="singleProduct relative group cursor-pointer p-1">
          <img src={productimg2}alt="" className="w-80 h-72 border bg-[#f7f7f7] "/>
          <div className="absolute top-32 left-6 quick-item opacity-0 -translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-4 flex flex-col gap-5">
            <IoCartOutline className="text-2xl hover:text-Primary transition-all" />
            <IoSearch className="text-2xl hover:text-Primary transition-all" />
            <FaRegHeart className="text-2xl hover:text-Primary transition-all" />
          </div>
          <div className="product-details flex justify-between p-4">
            <p className="cursor-pointer hover:text-Primary font-Crimson text-lg transition-all font-semibold">Sunglases</p>
            <div className="meta flex gap-2 cursor-pointer">
              <p>$22.99</p>
              <p className="text-red-700 line-through">$30.99</p>
            </div>
          </div>
        </div>
        <div className="singleProduct relative group cursor-pointer p-1">
          <img src={productimg2}alt="" className="w-80 h-72 border bg-[#f7f7f7] "/>
          <div className="absolute top-32 left-6 quick-item opacity-0 -translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-4 flex flex-col gap-5">
            <IoCartOutline className="text-2xl hover:text-Primary transition-all" />
            <IoSearch className="text-2xl hover:text-Primary transition-all" />
            <FaRegHeart className="text-2xl hover:text-Primary transition-all" />
          </div>
          <div className="product-details flex justify-between p-4">
            <p className="cursor-pointer hover:text-Primary font-Crimson text-lg transition-all font-semibold">Sunglases</p>
            <div className="meta flex gap-2 cursor-pointer">
              <p>$22.99</p>
              <p className="text-red-700 line-through">$30.99</p>
            </div>
          </div>
        </div>
        <div className="singleProduct relative group cursor-pointer p-1">
          <img src={productimg2}alt="" className="w-80 h-72 border bg-[#f7f7f7] "/>
          <div className="absolute top-32 left-6 quick-item opacity-0 -translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-4 flex flex-col gap-5">
            <IoCartOutline className="text-2xl hover:text-Primary transition-all" />
            <IoSearch className="text-2xl hover:text-Primary transition-all" />
            <FaRegHeart className="text-2xl hover:text-Primary transition-all" />
          </div>
          <div className="product-details flex justify-between p-4">
            <p className="cursor-pointer hover:text-Primary font-Crimson text-lg transition-all font-semibold">Sunglases</p>
            <div className="meta flex gap-2 cursor-pointer">
              <p>$22.99</p>
              <p className="text-red-700 line-through">$30.99</p>
            </div>
          </div>
        </div>
        <div className="singleProduct relative group cursor-pointer p-1">
          <img src={productimg2}alt="" className="w-80 h-72 border bg-[#f7f7f7] "/>
          <div className="absolute top-32 left-6 quick-item opacity-0 -translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-4 flex flex-col gap-5">
            <IoCartOutline className="text-2xl hover:text-Primary transition-all" />
            <IoSearch className="text-2xl hover:text-Primary transition-all" />
            <FaRegHeart className="text-2xl hover:text-Primary transition-all" />
          </div>
          <div className="product-details flex justify-between p-4">
            <p className="cursor-pointer hover:text-Primary font-Crimson text-lg transition-all font-semibold">Sunglases</p>
            <div className="meta flex gap-2 cursor-pointer">
              <p>$22.99</p>
              <p className="text-red-700 line-through">$30.99</p>
            </div>
          </div>
        </div>
        <div className="singleProduct relative group cursor-pointer p-1">
          <img src={productimg2}alt="" className="w-80 h-72 border bg-[#f7f7f7] "/>
          <div className="absolute top-32 left-6 quick-item opacity-0 -translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-4 flex flex-col gap-5">
            <IoCartOutline className="text-2xl hover:text-Primary transition-all" />
            <IoSearch className="text-2xl hover:text-Primary transition-all" />
            <FaRegHeart className="text-2xl hover:text-Primary transition-all" />
          </div>
          <div className="product-details flex justify-between p-4">
            <p className="cursor-pointer hover:text-Primary font-Crimson text-lg transition-all font-semibold">Sunglases</p>
            <div className="meta flex gap-2 cursor-pointer">
              <p>$22.99</p>
              <p className="text-red-700 line-through">$30.99</p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default LatestProduct;
