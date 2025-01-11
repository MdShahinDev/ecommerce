import React from 'react'
import PageBreadcam from '../ReusableComponent/PageBreadcam'
import ShopHeader from '../Components/ShopHeader'
import Pagignation from '../Components/Pagignation'
import ShopProduct from '../Components/ShopProduct'

const Shop = () => {
  return (
    <>
    <PageBreadcam title= "Shop Grid Default" pagename="Shop Grid Default"/>
    <ShopHeader/>
    <ShopProduct/>
    <Pagignation/>
    </>
  )
}

export default Shop