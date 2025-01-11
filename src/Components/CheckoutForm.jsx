import React from "react";
import img from "../assets/Product-1.png";

const CheckoutForm = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-4 lg:flex-row my-8">
        <div className="w-full sm:w-full md:w-full lg:w-3/5">
          <div className="form-field">
            <h2 className="py-4 font-Crimson font-semibold text-3xl ">
              Shipping Details
            </h2>
            <form action="">
              <div className="personal flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="border focus:outline-none focus:ring-0 p-2 w-2/4"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="border focus:outline-none focus:ring-0 p-2 w-2/4"
                />
              </div>
              <div className="address py-4 flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Address"
                  className="border focus:outline-none focus:ring-0 p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border focus:outline-none focus:ring-0 p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="border focus:outline-none focus:ring-0 p-2 w-full"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-2/5">
          <h2 className="py-4 font-Crimson font-semibold text-3xl ">
            Order Summary
          </h2>
          <div className="product-details-card p-2 bg-[#f4f4fc] mb-4">
            <div className="single-product-info flex items-center justify-between gap-2">
              <div className="left flex gap-2">
                <img className="w-20" src={img} alt="" />
                <div className="info">
                  <p className="text-base font-normal">
                    Eyeshadow Palette with Mirror
                  </p>
                  <p>Color: Brawn</p>
                  <p>Size: XL</p>
                </div>
              </div>
              <p className="text-right">$19.99</p>
            </div>
            <hr />
            <div className="single-product-info flex items-center justify-between gap-2">
              <div className="left flex gap-2">
                <img className="w-20" src={img} alt="" />
                <div className="info">
                  <p className="text-base font-normal">
                    Eyeshadow Palette with Mirror
                  </p>
                  <p>Color: Brawn</p>
                  <p>Size: XL</p>
                </div>
              </div>
              <p className="text-right">$19.99</p>
            </div>
            <hr />
          </div>

          {/* From Cart */}
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
              Confirm Orderd
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
