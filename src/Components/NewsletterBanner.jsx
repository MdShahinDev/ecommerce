import React from "react";
import companyimg from '../assets/company.png'
const NewsletterBanner = () => {
  return (
    <>
      <div className="promo-banner bg-promotionalBanner bg-no-repeat bg-cover h-[500px] mb-20 flex items-center">
        <div className="container mx-auto text-center ">
          <div className="heading uppercase text-white text-4xl font-bold mb-4">
          Get Leatest Update By Subscribe 0ur Newslater
          </div>
          <div className="button">
            <button className="px-6 py-2 bg-transparent border transition-all text-white uppercase font-semibold rounded-lg hover:bg-Primary">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <div className="company ">
        <div className="container mx-auto flex justify-center mb-20">
          <img src={companyimg} className="cursor-pointer" alt="" />
        </div>
      </div>
    </>
  );
};

export default NewsletterBanner;
