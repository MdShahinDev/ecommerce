import { useParams } from "react-router-dom";
import img from "../assets/Product-1.png";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { apiData } from "../Components/ContextApi";
import { useContext } from "react";
import PageBreadcam from "../ReusableComponent/PageBreadcam";
const ProductDetails = () => {
  const { id } = useParams();
  let data = useContext(apiData);
  let single = data.filter((item) => item.id == id);

  return (
    <>
    <PageBreadcam title="Product Details" pagename="Product Details" />
      {
        single.map((item)=>(
          <div className="productdetails container mx-auto  flex gap-4 items-center p-6 shadow-md my-6">
        <div className="productimg">
          <img src={item.thumbnail} alt="" />
        </div>
        <div className="product-details flex flex-col gap-6">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <h2>Price: ${item.price}</h2>
          <div className="icons flex gap-6 text-3xl cursor-pointer">
            <FaShoppingCart />
            <FaHeart />
          </div>
        </div>
      </div>
        ))
      }

      <div className="additonal container mx-auto my-6 p-6">
        <h2 className="text-3xl font-semibold pb-6 underline">
          Additonal Description
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
          repudiandae quasi! Nihil iusto hic exercitationem deleniti officia
          placeat. Quaerat odit perferendis repudiandae, et deserunt sapiente
          libero nisi perspiciatis praesentium doloremque?
        </p>
      </div>
    </>
  );
};

export default ProductDetails;
