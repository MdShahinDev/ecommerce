import React from 'react'
import Banner from '../assets/Banner-1.jpg';

const HomeHero = () => {
  return (
    <>
    <div className="homebanner pb-3">
        <img src={Banner} className='h-screen w-full' alt="" />
    </div>
    </>
  )
}

export default HomeHero