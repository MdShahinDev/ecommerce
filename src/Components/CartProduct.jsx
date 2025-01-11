import React from "react";
import product from "../assets/Product-1.png";
import { IoCloseSharp } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
const CartProduct = () => {
  return (
    <>
      <div className="container mx-auto py-20 flex flex-col lg:flex-row justify-between gap-6">
        <div className="cart-left w-full  lg:w-3/5 ">
          <div className="cart-title flex justify-between py-4 font-Crimson font-semibold text-2xl">
            <div className="w-2/5 flex justify-start">Product</div>
            <div className="w-1/6 flex justify-center">Price</div>
            <div className="w-1/5 flex justify-center">Quantity</div>
            <div className="w-1/5 flex justify-center">Total</div>
          </div>
          <div className="cart-product flex justify-between items-center py-4 font-Crimson font-semibold text-2xl">
            <div className="w-2/5 flex justify-start ">
              <div className="product-info flex gap-2 relative">
                <img src={product} className="w-20 bg-slate-200" alt="" />
                <IoCloseSharp className="absolute left-16 bottom-16 cursor-pointer" />
                <div className="product-details">
                  <p className="text-base font-normal">
                    Eyeshadow Palette with Mirror
                  </p>
                  <p className="text-base font-normal">Color: Brown</p>
                  <p className="text-base font-normal">Size: XL</p>
                </div>
              </div>
            </div>
            <div className="w-1/6 flex justify-center">$19.99</div>
            <div className="w-1/5 flex justify-center">
              <div className="qty-change flex items-center  overflow-hidden">
                <button className="px-4 py-1 bg-gray-300 text-black hover:bg-gray-400">
                  -
                </button>

                <span className="px-6 py-1 bg-gray-100 text-center">1</span>

                <button className="px-4 py-1 bg-gray-300 text-black hover:bg-gray-400">
                  +
                </button>
              </div>
            </div>
            <div className="w-1/5 flex justify-center">$19.99</div>
          </div>
          <div className="cart-product flex justify-between items-center py-4 font-Crimson font-semibold text-2xl">
            <div className="w-2/5 flex justify-start ">
              <div className="product-info flex gap-2 relative">
                <img src={product} className="w-20 bg-slate-200" alt="" />
                <IoCloseSharp className="absolute left-16 bottom-16 cursor-pointer" />
                <div className="product-details">
                  <p className="text-base font-normal">
                    Eyeshadow Palette with Mirror
                  </p>
                  <p className="text-base font-normal">Color: Brown</p>
                  <p className="text-base font-normal">Size: XL</p>
                </div>
              </div>
            </div>
            <div className="w-1/6 flex justify-center">$19.99</div>
            <div className="w-1/5 flex justify-center">
              <div className="qty-change flex items-center  overflow-hidden">
                <button className="px-4 py-1 bg-gray-300 text-black hover:bg-gray-400">
                  -
                </button>

                <span className="px-6 py-1 bg-gray-100 text-center">1</span>

                <button className="px-4 py-1 bg-gray-300 text-black hover:bg-gray-400">
                  +
                </button>
              </div>
            </div>
            <div className="w-1/5 flex justify-center">$19.99</div>
          </div>
        </div>
        <div className="cart-total w-full lg:w-2/5  flex flex-col   py-4">
          <h2 className="text-center font-Crimson font-semibold items-center text-2xl pb-4">
            Cart Totals
          </h2>
          <div className="cart-summary p-4 bg-[#f4f4fc]">
            <div className="total-qty flex justify-between text-2xl pb-4 font-Crimson text-Primary font-semibold">
              <h2>Total Quantity:</h2>
              <p>3</p>
            </div>
            <hr className="py-2" />
            <div className="total flex justify-between text-2xl pb-4 font-Crimson text-Primary font-semibold">
              <h2>Totals:</h2>
              <p>$47.99</p>
            </div>
            <hr className="py-2" />
            <button className="py-4 w-full text-center p-4 bg-Primary hover:bg-[#f7b557] font-semibold ">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
