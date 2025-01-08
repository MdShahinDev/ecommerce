import React from "react";

const CartProduct = () => {
  return (
    <>
      <div className="container mx-auto py-20 flex justify-between gap-6">
        <div className="cart-left w-3/5 ">
          <div className="cart-title flex justify-between py-4 font-Crimson font-semibold text-2xl">
            <div className="2/5 flex justify-center">
            Product
            </div>
            <div className="w-1/6 flex justify-center"> 
                Price
            </div>
            <div className="w-1/5 flex justify-center"> 
                Quantity
            </div>
            <div className="w-1/5 flex justify-center"> 
                Total
            </div>
          </div>
        </div>
        <div className="cart-total w-2/5  flex justify-center  py-4">
            <h2 className="text-center font-Crimson font-semibold text-2xl">Cart Totals</h2>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
