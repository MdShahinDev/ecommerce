import React from "react";

const FooterTop = () => {
  return (
    <>
      <div className="footer py-9 bg-[#eeeffb]">
        <div className="container mx-auto flex justify-between gap-5">
          <div className="widget1 flex-1">
            <h2 className="font-Crimson text-3xl font-semibold text-black pb-2">About Us</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus debitis distinctio omnis quidem beatae non magnam,
              ratione magni exercitationem incidunt, reiciendis, nulla quibusdam
              aperiam.
            </p>
          </div>
          <div className="widget2 flex-1">
            <h2 className="font-Crimson text-3xl font-semibold text-black pb-2">Important Links</h2>
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer hover:text-Primary">Privacy Policy</li>
              <li className="cursor-pointer hover:text-Primary">Terms And Conditions</li>
              <li className="cursor-pointer hover:text-Primary">Delivery Policy</li>
              <li className="cursor-pointer hover:text-Primary">Return and Refund</li>
            </ul>
          </div>
          <div className="widget3 flex-1">
            <h2 className="font-Crimson text-3xl font-semibold text-black pb-2">Customer Care</h2>
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer hover:text-Primary">My Account</li>
              <li className="cursor-pointer hover:text-Primary">Discount</li>
              <li className="cursor-pointer hover:text-Primary">Order History</li>
              <li className="cursor-pointer hover:text-Primary">Order Tracking</li>
            </ul>
          </div>
          <div className="widget4 flex-1">
            <h2 className="font-Crimson text-3xl font-semibold text-black pb-2">Pages</h2>
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer hover:text-Primary">Blog</li>
              <li className="cursor-pointer hover:text-Primary">Browse the Shop</li>
              <li className="cursor-pointer hover:text-Primary">Category</li>
              <li className="cursor-pointer hover:text-Primary">Visual Composer</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
