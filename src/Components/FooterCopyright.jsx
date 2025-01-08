import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FooterCopyright = () => {
  return (
    <>
    <div className="footer-bottom py-9 bg-[#e7e4f8]">
        <div className="container mx-auto flex justify-between">
            <p className='font-Crimson text-lg'>© Clothy | 2025 All Rights Reserved</p>
            <div className="social">
                <ul className='flex gap-4'>
                    <li className='bg-blue-600 p-3 rounded-full text-white cursor-pointer'><FaFacebookF/></li>
                    <li className='bg-blue-600 p-3 rounded-full text-white cursor-pointer'><FaInstagram/></li>
                    <li className='bg-blue-600 p-3 rounded-full text-white cursor-pointer'><FaTwitter/></li>
                </ul>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default FooterCopyright