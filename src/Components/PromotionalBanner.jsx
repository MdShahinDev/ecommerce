import React from 'react'

const PromotionalBanner = () => {
  return (
    <>
    {/* <div className="promo-banner bg-promotionalBanner bg-no-repeat bg-cover h-[500px] mb-20">
    <div className="container mx-auto ">
        <div className="heading uppercase">
            app exclusive flat 10% off
        </div>
        <div className="button">
            Shop Now
        </div>
    </div>
    </div> */}

<div className="promo-banner bg-promotionalBanner bg-no-repeat bg-cover h-[500px] mb-20 flex items-center">
  <div className="container mx-auto text-center md:text-start ">
    <div className="heading uppercase text-white text-4xl font-bold mb-4">
      App Exclusive Flat 10% Off
    </div>
    <div className="button">
      <button className="px-6 py-2 bg-transparent border transition-all text-white uppercase font-semibold rounded-lg hover:bg-Primary">
        Shop Now
      </button>
    </div>
  </div>
</div>

    </>
  )
}

export default PromotionalBanner