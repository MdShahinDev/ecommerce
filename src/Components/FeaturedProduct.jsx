import React from "react";
import SectionTitle from "../ReusableComponent/SectionTitle";
import productImg from "../assets/Product-1.png";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
const FeaturedProduct = () => {
  return (
    <>
      <SectionTitle title="Featured Products" />

      <div className="featured-product container mx-auto p-4">
        <div className="flex flex-wrap -mx-3">
          <div className="single-product w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="bg-white shadow rounded relative group">
              <img className="mb-4 bg-[#f6f7fb] w-full cursor-pointer" src={productImg}alt="" />
              <div className="quick-panel absolute top-48 left-4 flex flex-col gap-5 text-xl opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-4">
               
               <IoSearch className="cursor-pointer hover:text-Primary transition-all" />
               
                <IoCartOutline className="cursor-pointer hover:text-Primary transition-all" />
                <FaRegHeart className="cursor-pointer hover:text-Primary transition-all" />
              </div>
              <div className="product-title text-center mb-4">
                <h2 className="font-Crimson text-2xl font-semibold transition-all hover:text-Primary cursor-pointer">
                  Eyshadow Palatte With Mirror
                </h2>
              </div>
              <div className="product-sku text-center mb-4">
                <p>Product SKU: MVCFH2F</p>
              </div>
              <div className="product-price text-center mb-4 pb-2 text-xl font-semibold">
                <p>$19.99</p>
              </div>
            </div>
          </div>
          <div className="single-product w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="bg-white shadow rounded relative group">
              <img className="mb-4 bg-[#f6f7fb] w-full cursor-pointer" src={productImg}alt="" />
              <div className="quick-panel absolute top-48 left-4 flex flex-col gap-5 text-xl opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-4">
               
               <IoSearch className="cursor-pointer hover:text-Primary transition-all" />
               
                <IoCartOutline className="cursor-pointer hover:text-Primary transition-all" />
                <FaRegHeart className="cursor-pointer hover:text-Primary transition-all" />
              </div>
              <div className="product-title text-center mb-4">
                <h2 className="font-Crimson text-2xl font-semibold transition-all hover:text-Primary cursor-pointer">
                  Eyshadow Palatte With Mirror
                </h2>
              </div>
              <div className="product-sku text-center mb-4">
                <p>Product SKU: MVCFH2F</p>
              </div>
              <div className="product-price text-center mb-4 pb-2 text-xl font-semibold">
                <p>$19.99</p>
              </div>
            </div>
          </div>
          <div className="single-product w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="bg-white shadow rounded relative group">
              <img className="mb-4 bg-[#f6f7fb] w-full cursor-pointer" src={productImg}alt="" />
              <div className="quick-panel absolute top-48 left-4 flex flex-col gap-5 text-xl opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-4">
               
               <IoSearch className="cursor-pointer hover:text-Primary transition-all" />
               
                <IoCartOutline className="cursor-pointer hover:text-Primary transition-all" />
                <FaRegHeart className="cursor-pointer hover:text-Primary transition-all" />
              </div>
              <div className="product-title text-center mb-4">
                <h2 className="font-Crimson text-2xl font-semibold transition-all hover:text-Primary cursor-pointer">
                  Eyshadow Palatte With Mirror
                </h2>
              </div>
              <div className="product-sku text-center mb-4">
                <p>Product SKU: MVCFH2F</p>
              </div>
              <div className="product-price text-center mb-4 pb-2 text-xl font-semibold">
                <p>$19.99</p>
              </div>
            </div>
          </div>
          <div className="single-product w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="bg-white shadow rounded relative group">
              <img className="mb-4 bg-[#f6f7fb] w-full cursor-pointer" src={productImg}alt="" />
              <div className="quick-panel absolute top-48 left-4 flex flex-col gap-5 text-xl opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-4">
               
               <IoSearch className="cursor-pointer hover:text-Primary transition-all" />
               
                <IoCartOutline className="cursor-pointer hover:text-Primary transition-all" />
                <FaRegHeart className="cursor-pointer hover:text-Primary transition-all" />
              </div>
              <div className="product-title text-center mb-4">
                <h2 className="font-Crimson text-2xl font-semibold transition-all hover:text-Primary cursor-pointer">
                  Eyshadow Palatte With Mirror
                </h2>
              </div>
              <div className="product-sku text-center mb-4">
                <p>Product SKU: MVCFH2F</p>
              </div>
              <div className="product-price text-center mb-4 pb-2 text-xl font-semibold">
                <p>$19.99</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
