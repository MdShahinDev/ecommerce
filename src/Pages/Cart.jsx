import React from 'react'
import PageBreadcam from '../ReusableComponent/PageBreadcam'
import CartProduct from '../Components/CartProduct'

const Cart = () => {
  return (
    <>
    <PageBreadcam title="Cart" pagename="Shopping Cart"/>
    <CartProduct/>
    </>
  )
}

export default Cart