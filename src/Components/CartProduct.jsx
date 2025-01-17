import React from "react";

import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import cartmg from "../assets/Empty-cart.jpg"
import { decrement, deleteItem, increment } from "./Slices/CartSlice";
const CartProduct = () => {
  let data = useSelector((state) => state.cartItemManager.cartItems);

  let dispatch = useDispatch();

  const handledelete = (index)=>(
    dispatch(deleteItem(index))
  )

  const handleIncrement =(index)=>(
    dispatch(increment(index))
  )
  const handleDecrement =(index)=>(
    dispatch(decrement(index))
  )
  const clearCart =()=>{
  dispatch(clearCart())
  }
  let totalSum = 0;
  let totalQty = 0;
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    totalSum +=(item.price * item.qty);   
    totalQty += item.qty;
  }


  return (
    <>
      {data.length>0 ? 
      <div className="container mx-auto py-20 flex flex-col lg:flex-row justify-between gap-6">
      <div className="cart-left w-full  lg:w-3/5 ">
        <div className="cart-title flex justify-between py-4 font-Crimson font-semibold text-2xl">
          <div className="w-2/5 flex justify-start">Product</div>
          <div className="w-1/6 flex justify-center">Price</div>
          <div className="w-1/5 flex justify-center">Quantity</div>
          <div className="w-1/5 flex justify-center">Total</div>
        </div>
        {
          data.map((item, index)=>(
            <div className="cart-product flex justify-between items-center py-4 font-Crimson font-semibold text-2xl">
          <div className="w-2/5 flex justify-start ">
            <div className="product-info flex gap-2 relative">
              <img src={item.thumbnail} className="w-20 bg-slate-200" alt="" />
              <IoCloseSharp onClick={()=>handledelete(index)} className="absolute left-16 bottom-16 cursor-pointer" />
              <div className="product-details">
                <p className="text-base font-normal">
                  {item.title}
                </p>
                <p className="text-base font-normal">Color: Brown</p>
                <p className="text-base font-normal">Size: XL</p>
              </div>
            </div>
          </div>
          <div className="w-1/6 flex justify-center">${item.price }</div>
          <div className="w-1/5 flex justify-center">
            <div className="qty-change flex items-center  overflow-hidden">
              <button onClick={()=>handleDecrement(index)} className="px-4 py-1 bg-gray-300 text-black hover:bg-gray-400">
                -
              </button>

              <span className="px-6 py-1 bg-gray-100 text-center">{item.qty}</span>

              <button onClick={()=>handleIncrement(index)} className="px-4 py-1 bg-gray-300 text-black hover:bg-gray-400">
                +
              </button>
            </div>
          </div>
          <div className="w-1/5 flex justify-center">${(item.price * item.qty).toFixed(2)}</div>
        </div>
          ))
        }
        <button onClick={clearCart} className="py-2 px-4 bg-Primary text-white text-xl ">Clear Cart</button>
      </div>
      <div className="cart-total w-full lg:w-2/5  flex flex-col   py-4">
        <h2 className="text-center font-Crimson font-semibold items-center text-2xl pb-4">
          Cart Totals
        </h2>
        <div className="cart-summary p-4 bg-[#f4f4fc]">
          <div className="total-qty flex justify-between text-2xl pb-4 font-Crimson text-Primary font-semibold">
            <h2>Total Quantity:</h2>
            <p>{totalQty}</p>
          </div>
          <hr className="py-2" />
          <div className="total flex justify-between text-2xl pb-4 font-Crimson text-Primary font-semibold">
            <h2>Totals:</h2>
            <p>${(totalSum).toFixed(2)}</p>
          </div>
          <hr className="py-2" />
          <button className="py-4 w-full text-center p-4 bg-Primary hover:bg-[#f7b557] font-semibold ">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
      :
      <div className="container mx-auto py-8 ">
        <h1 className="text-3xl font-Crimson font-semibold text-center pb-8">Your Cart Is empty</h1>
        <img className=" mx-auto" src={cartmg} alt="" />
      </div>
      }
    </>
  );
};

export default CartProduct;
