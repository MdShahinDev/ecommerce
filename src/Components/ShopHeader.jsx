import React from 'react'
import productImg from "../assets/Product-1.png";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
const ShopHeader = () => {
  return (
    <>
    <div className="shopHeader container mx-auto py-16 flex justify-between">
        <div className="title font-Crimson font-semibold text-2xl">
        Ecommerce Acceories & Fashion item <br /><span className='text-sm text-gray-400'>About 9,620 results (0.62 seconds)</span>
        </div>
        <div className="number">
            Per Page: 28
        </div>
        <div className="sorted">
            Sorted By: Best Matched
        </div>
    </div>

    <div className="featuredproduct container mx-auto flex gap-x-3 gap-y-6 flex-wrap basis-1/4 justify-center pb-10">
            <div className="relative single-product text-center shadow-md group cursor-pointer">
              <img src={productImg} className=" w-65 h-80 bg-[#f6f7fb]" alt="" />
              <div className="absolute top-32 left-0 quick-item opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-5 flex flex-col gap-5">
                <IoCartOutline className="text-2xl hover:text-Primary transition-all"/>
                <IoSearch className="text-2xl hover:text-Primary transition-all"/>
                <FaRegHeart className="text-2xl hover:text-Primary transition-all"/>
              </div>
              <h3 className="text-Primary text-2xl font-Crimson font-semibold py-2 cursor-pointer"> Red Lipstick</h3>
              <p className="">Code: 5DER6T</p>
              <div className="price flex justify-center gap-6 ">
              <p className="pb-2 font-semibold">$14</p>
              <p className="pb-2 font-semibold line-through">$14</p>
              </div>
            </div>
            <div className="relative single-product text-center shadow-md group cursor-pointer">
              <img src={productImg} className=" w-65 h-80 bg-[#f6f7fb]" alt="" />
              <div className="absolute top-32 left-0 quick-item opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-5 flex flex-col gap-5">
                <IoCartOutline className="text-2xl hover:text-Primary transition-all"/>
                <IoSearch className="text-2xl hover:text-Primary transition-all"/>
                <FaRegHeart className="text-2xl hover:text-Primary transition-all"/>
              </div>
              <h3 className="text-Primary text-2xl font-Crimson font-semibold py-2 cursor-pointer"> Red Lipstick</h3>
              <p className="">Code: 5DER6T</p>
              <div className="price flex justify-center gap-6 ">
              <p className="pb-2 font-semibold">$14</p>
              <p className="pb-2 font-semibold line-through">$14</p>
              </div>
            </div>
            <div className="relative single-product text-center shadow-md group cursor-pointer">
              <img src={productImg} className=" w-65 h-80 bg-[#f6f7fb]" alt="" />
              <div className="absolute top-32 left-0 quick-item opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-5 flex flex-col gap-5">
                <IoCartOutline className="text-2xl hover:text-Primary transition-all"/>
                <IoSearch className="text-2xl hover:text-Primary transition-all"/>
                <FaRegHeart className="text-2xl hover:text-Primary transition-all"/>
              </div>
              <h3 className="text-Primary text-2xl font-Crimson font-semibold py-2 cursor-pointer"> Red Lipstick</h3>
              <p className="">Code: 5DER6T</p>
              <div className="price flex justify-center gap-6 ">
              <p className="pb-2 font-semibold">$14</p>
              <p className="pb-2 font-semibold line-through">$14</p>
              </div>
            </div>
            <div className="relative single-product text-center shadow-md group cursor-pointer">
              <img src={productImg} className=" w-65 h-80 bg-[#f6f7fb]" alt="" />
              <div className="absolute top-32 left-0 quick-item opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-5 flex flex-col gap-5">
                <IoCartOutline className="text-2xl hover:text-Primary transition-all"/>
                <IoSearch className="text-2xl hover:text-Primary transition-all"/>
                <FaRegHeart className="text-2xl hover:text-Primary transition-all"/>
              </div>
              <h3 className="text-Primary text-2xl font-Crimson font-semibold py-2 cursor-pointer"> Red Lipstick</h3>
              <p className="">Code: 5DER6T</p>
              <div className="price flex justify-center gap-6 ">
              <p className="pb-2 font-semibold">$14</p>
              <p className="pb-2 font-semibold line-through">$14</p>
              </div>
            </div>
            <div className="relative single-product text-center shadow-md group cursor-pointer">
              <img src={productImg} className=" w-65 h-80 bg-[#f6f7fb]" alt="" />
              <div className="absolute top-32 left-0 quick-item opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-5 flex flex-col gap-5">
                <IoCartOutline className="text-2xl hover:text-Primary transition-all"/>
                <IoSearch className="text-2xl hover:text-Primary transition-all"/>
                <FaRegHeart className="text-2xl hover:text-Primary transition-all"/>
              </div>
              <h3 className="text-Primary text-2xl font-Crimson font-semibold py-2 cursor-pointer"> Red Lipstick</h3>
              <p className="">Code: 5DER6T</p>
              <div className="price flex justify-center gap-6 ">
              <p className="pb-2 font-semibold">$14</p>
              <p className="pb-2 font-semibold line-through">$14</p>
              </div>
            </div>
            <div className="relative single-product text-center shadow-md group cursor-pointer">
              <img src={productImg} className=" w-65 h-80 bg-[#f6f7fb]" alt="" />
              <div className="absolute top-32 left-0 quick-item opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-5 flex flex-col gap-5">
                <IoCartOutline className="text-2xl hover:text-Primary transition-all"/>
                <IoSearch className="text-2xl hover:text-Primary transition-all"/>
                <FaRegHeart className="text-2xl hover:text-Primary transition-all"/>
              </div>
              <h3 className="text-Primary text-2xl font-Crimson font-semibold py-2 cursor-pointer"> Red Lipstick</h3>
              <p className="">Code: 5DER6T</p>
              <div className="price flex justify-center gap-6 ">
              <p className="pb-2 font-semibold">$14</p>
              <p className="pb-2 font-semibold line-through">$14</p>
              </div>
            </div>
            <div className="relative single-product text-center shadow-md group cursor-pointer">
              <img src={productImg} className=" w-65 h-80 bg-[#f6f7fb]" alt="" />
              <div className="absolute top-32 left-0 quick-item opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-5 flex flex-col gap-5">
                <IoCartOutline className="text-2xl hover:text-Primary transition-all"/>
                <IoSearch className="text-2xl hover:text-Primary transition-all"/>
                <FaRegHeart className="text-2xl hover:text-Primary transition-all"/>
              </div>
              <h3 className="text-Primary text-2xl font-Crimson font-semibold py-2 cursor-pointer"> Red Lipstick</h3>
              <p className="">Code: 5DER6T</p>
              <div className="price flex justify-center gap-6 ">
              <p className="pb-2 font-semibold">$14</p>
              <p className="pb-2 font-semibold line-through">$14</p>
              </div>
            </div>
            <div className="relative single-product text-center shadow-md group cursor-pointer">
              <img src={productImg} className=" w-65 h-80 bg-[#f6f7fb]" alt="" />
              <div className="absolute top-32 left-0 quick-item opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-5 flex flex-col gap-5">
                <IoCartOutline className="text-2xl hover:text-Primary transition-all"/>
                <IoSearch className="text-2xl hover:text-Primary transition-all"/>
                <FaRegHeart className="text-2xl hover:text-Primary transition-all"/>
              </div>
              <h3 className="text-Primary text-2xl font-Crimson font-semibold py-2 cursor-pointer"> Red Lipstick</h3>
              <p className="">Code: 5DER6T</p>
              <div className="price flex justify-center gap-6 ">
              <p className="pb-2 font-semibold">$14</p>
              <p className="pb-2 font-semibold line-through">$14</p>
              </div>
            </div>
            <div className="relative single-product text-center shadow-md group cursor-pointer">
              <img src={productImg} className=" w-65 h-80 bg-[#f6f7fb]" alt="" />
              <div className="absolute top-32 left-0 quick-item opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-5 flex flex-col gap-5">
                <IoCartOutline className="text-2xl hover:text-Primary transition-all"/>
                <IoSearch className="text-2xl hover:text-Primary transition-all"/>
                <FaRegHeart className="text-2xl hover:text-Primary transition-all"/>
              </div>
              <h3 className="text-Primary text-2xl font-Crimson font-semibold py-2 cursor-pointer"> Red Lipstick</h3>
              <p className="">Code: 5DER6T</p>
              <div className="price flex justify-center gap-6 ">
              <p className="pb-2 font-semibold">$14</p>
              <p className="pb-2 font-semibold line-through">$14</p>
              </div>
            </div>
            <div className="relative single-product text-center shadow-md group cursor-pointer">
              <img src={productImg} className=" w-65 h-80 bg-[#f6f7fb]" alt="" />
              <div className="absolute top-32 left-0 quick-item opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-5 flex flex-col gap-5">
                <IoCartOutline className="text-2xl hover:text-Primary transition-all"/>
                <IoSearch className="text-2xl hover:text-Primary transition-all"/>
                <FaRegHeart className="text-2xl hover:text-Primary transition-all"/>
              </div>
              <h3 className="text-Primary text-2xl font-Crimson font-semibold py-2 cursor-pointer"> Red Lipstick</h3>
              <p className="">Code: 5DER6T</p>
              <div className="price flex justify-center gap-6 ">
              <p className="pb-2 font-semibold">$14</p>
              <p className="pb-2 font-semibold line-through">$14</p>
              </div>
            </div>
            <div className="relative single-product text-center shadow-md group cursor-pointer">
              <img src={productImg} className=" w-65 h-80 bg-[#f6f7fb]" alt="" />
              <div className="absolute top-32 left-0 quick-item opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-5 flex flex-col gap-5">
                <IoCartOutline className="text-2xl hover:text-Primary transition-all"/>
                <IoSearch className="text-2xl hover:text-Primary transition-all"/>
                <FaRegHeart className="text-2xl hover:text-Primary transition-all"/>
              </div>
              <h3 className="text-Primary text-2xl font-Crimson font-semibold py-2 cursor-pointer"> Red Lipstick</h3>
              <p className="">Code: 5DER6T</p>
              <div className="price flex justify-center gap-6 ">
              <p className="pb-2 font-semibold">$14</p>
              <p className="pb-2 font-semibold line-through">$14</p>
              </div>
            </div>
            <div className="relative single-product text-center shadow-md group cursor-pointer">
              <img src={productImg} className=" w-65 h-80 bg-[#f6f7fb]" alt="" />
              <div className="absolute top-32 left-0 quick-item opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-5 flex flex-col gap-5">
                <IoCartOutline className="text-2xl hover:text-Primary transition-all"/>
                <IoSearch className="text-2xl hover:text-Primary transition-all"/>
                <FaRegHeart className="text-2xl hover:text-Primary transition-all"/>
              </div>
              <h3 className="text-Primary text-2xl font-Crimson font-semibold py-2 cursor-pointer"> Red Lipstick</h3>
              <p className="">Code: 5DER6T</p>
              <div className="price flex justify-center gap-6 ">
              <p className="pb-2 font-semibold">$14</p>
              <p className="pb-2 font-semibold line-through">$14</p>
              </div>
            </div>
            <div className="relative single-product text-center shadow-md group cursor-pointer">
              <img src={productImg} className=" w-65 h-80 bg-[#f6f7fb]" alt="" />
              <div className="absolute top-32 left-0 quick-item opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-5 flex flex-col gap-5">
                <IoCartOutline className="text-2xl hover:text-Primary transition-all"/>
                <IoSearch className="text-2xl hover:text-Primary transition-all"/>
                <FaRegHeart className="text-2xl hover:text-Primary transition-all"/>
              </div>
              <h3 className="text-Primary text-2xl font-Crimson font-semibold py-2 cursor-pointer"> Red Lipstick</h3>
              <p className="">Code: 5DER6T</p>
              <div className="price flex justify-center gap-6 ">
              <p className="pb-2 font-semibold">$14</p>
              <p className="pb-2 font-semibold line-through">$14</p>
              </div>
            </div>
            <div className="relative single-product text-center shadow-md group cursor-pointer">
              <img src={productImg} className=" w-65 h-80 bg-[#f6f7fb]" alt="" />
              <div className="absolute top-32 left-0 quick-item opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-5 flex flex-col gap-5">
                <IoCartOutline className="text-2xl hover:text-Primary transition-all"/>
                <IoSearch className="text-2xl hover:text-Primary transition-all"/>
                <FaRegHeart className="text-2xl hover:text-Primary transition-all"/>
              </div>
              <h3 className="text-Primary text-2xl font-Crimson font-semibold py-2 cursor-pointer"> Red Lipstick</h3>
              <p className="">Code: 5DER6T</p>
              <div className="price flex justify-center gap-6 ">
              <p className="pb-2 font-semibold">$14</p>
              <p className="pb-2 font-semibold line-through">$14</p>
              </div>
            </div>
            <div className="relative single-product text-center shadow-md group cursor-pointer">
              <img src={productImg} className=" w-65 h-80 bg-[#f6f7fb]" alt="" />
              <div className="absolute top-32 left-0 quick-item opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-5 flex flex-col gap-5">
                <IoCartOutline className="text-2xl hover:text-Primary transition-all"/>
                <IoSearch className="text-2xl hover:text-Primary transition-all"/>
                <FaRegHeart className="text-2xl hover:text-Primary transition-all"/>
              </div>
              <h3 className="text-Primary text-2xl font-Crimson font-semibold py-2 cursor-pointer"> Red Lipstick</h3>
              <p className="">Code: 5DER6T</p>
              <div className="price flex justify-center gap-6 ">
              <p className="pb-2 font-semibold">$14</p>
              <p className="pb-2 font-semibold line-through">$14</p>
              </div>
            </div>
            <div className="relative single-product text-center shadow-md group cursor-pointer">
              <img src={productImg} className=" w-65 h-80 bg-[#f6f7fb]" alt="" />
              <div className="absolute top-32 left-0 quick-item opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-5 flex flex-col gap-5">
                <IoCartOutline className="text-2xl hover:text-Primary transition-all"/>
                <IoSearch className="text-2xl hover:text-Primary transition-all"/>
                <FaRegHeart className="text-2xl hover:text-Primary transition-all"/>
              </div>
              <h3 className="text-Primary text-2xl font-Crimson font-semibold py-2 cursor-pointer"> Red Lipstick</h3>
              <p className="">Code: 5DER6T</p>
              <div className="price flex justify-center gap-6 ">
              <p className="pb-2 font-semibold">$14</p>
              <p className="pb-2 font-semibold line-through">$14</p>
              </div>
            </div>



            
          </div>
    </>
  )
}

export default ShopHeader