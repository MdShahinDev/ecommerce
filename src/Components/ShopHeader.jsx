import React from 'react'
import { IoListSharp, IoGrid } from "react-icons/io5";
const ShopHeader = () => {
  return (
    <>
    <div className="shopHeader container mx-auto py-16 flex flex-col sm:flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="title font-Crimson font-semibold text-2xl">
        Ecommerce Acceories & Fashion item <br /><span className='text-sm text-gray-400'>About 9,620 results (0.62 seconds)</span>
        </div>
        <div className="number">
            Per Page: 28
        </div>
        <div className="sorted">
            Sorted By: 
            <select name="" className='ml-2 border p-2 focus:outline-none'>
              <option value="">Best Match</option>
              <option value="">Featured</option>
            </select>
        </div>
        <div className="view flex gap-3 items-center">
          View: <IoListSharp className='text-xl text-Primary cursor-pointer'/> <IoGrid className='text-lg text-Primary cursor-pointer'/>
        </div>
    </div>
    </>
  )
}

export default ShopHeader