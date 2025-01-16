import React, { useContext, useEffect, useState } from "react";
import productImg from "../assets/Product-1.png";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { IoListSharp, IoGrid } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { apiData } from "./ContextApi";
const ShopProduct = () => {
  const data = useContext(apiData);

  let [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
  }, [data]);

  let [categoryItem, setCategoryItem] = useState([]);

  const handleCategoryProduct = (cat) => {
    let filterProduct = data.filter((item) => item.category === cat);
    setCategoryItem(filterProduct);
  };
  let [searchResult, setSearchResult] = useState([]);
  const handleSearch = (e) => {
    let searchProduct = data.filter((item) =>
      item.title.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setSearchResult(searchProduct);
    if (e.target.value == "") {
      setSearchResult([]);
    }
  };

  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(30);

  let lastItemIndex = currentPage * perPage;
  let firstItemIndex = lastItemIndex - perPage;

  let currentPageProduct = data.slice(firstItemIndex, lastItemIndex);

  let totalPages = Math.ceil(data.length / perPage);

  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  const handleNextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleGoToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handlePerPage =(e)=>{
    setPerPage(e.target.value);
  }
  return (
    <>
    <div className="shopHeader container mx-auto py-16 flex flex-col sm:flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="title font-Crimson font-semibold text-2xl">
        Ecommerce Acceories & Fashion item <br /><span className='text-sm text-gray-400'>About 9,620 results (0.62 seconds)</span>
        </div>
        <div className="number flex gap-2">
            Per Page: 
            <input onChange={handlePerPage} type="number" className="border pl-2" />
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

      <div className="shop-page container mx-auto flex flex-col lg:flex-row gap-4">
        <div className="sidebar w-full px-2 lg:w-1/4 order-2 lg:order-1">
          <div className="search-box pb-4 relative">
            <h2 className="font-Crimson text-2xl font-semibold mb-2">
              Search Product
            </h2>
            <input onChange={handleSearch} type="text" className="py-2 px-1 w-full border rounded-sm" placeholder="Search Product" />
            {searchResult.length > 0 && (
              <div className="result absolute top-20  left-0 bg-red-400 px-2 mb-4 max-h-[500px] overflow-y-auto">
                {searchResult.map((item) => (
                  <div key={item.id} className="flex gap-1 items-center">
                    <img className="w-20" src={item.thumbnail} alt="" />
                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="product-category pb-4">
            <h2 className="font-Crimson text-2xl font-semibold mb-2">
              Filte by Price
            </h2>
          </div>
          <div className="product-category pb-4">
            <h2 className="font-Crimson text-2xl font-semibold mb-2">
              Popular Category
            </h2>
            <ul className="flex flex-col gap-4 text-lg font-semibold ">
              {category.map((item) => (
                <li onClick={() => handleCategoryProduct(item)}
                  className="cursor-pointer capitalize hover:text-Primary">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="product sm:w-1/2 p-4 lg:w-3/4 order-1 lg:order-2">
        <div className="flex flex-wrap -mx-3">
          {categoryItem.length > 0 ? (
            categoryItem.map((item) => (
              <div key={item.id} className="single-product sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                <div className="bg-white shadow rounded relative group">
                  <img className="mb-4 bg-[#f6f7fb] w-full cursor-pointer" src={item.thumbnail} alt="" />
                <div className="quick-panel absolute top-48 left-4 flex flex-col gap-5 text-xl opacity-0 -translate-x-5      transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-4">
                  <IoSearch className="cursor-pointer hover:text-Primary transition-all" />
                  <IoCartOutline className="cursor-pointer hover:text-Primary transition-all" />
                  <FaRegHeart className="cursor-pointer hover:text-Primary transition-all" />
              </div>
           
            <div className="product-title text-center mb-4">
              <h2 className="font-Crimson text-2xl font-semibold transition-all hover:text-Primary cursor-pointer">
                {item.title}
              </h2>
            </div>
            <div className="product-sku text-center mb-4">
              <p>
                Product SKU: <span className="text-Primary">{item.sku}</span>
              </p>
            </div>
            <div className="product-price text-center mb-4 pb-2 text-xl font-semibold">
              <p>${item.price}</p>
            </div>
          </div>
        </div>
      ))) : (
        <div className="flex flex-wrap -mx-3">
          {currentPageProduct.map((item) => (
            <div key={item.id} className="single-product sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
              <div className="bg-white shadow rounded relative group">
                <img
                  className="mb-4 bg-[#f6f7fb] w-full cursor-pointer"
                  src={item.thumbnail}
                  alt=""
                />
                <div className="quick-panel absolute top-48 left-4 flex flex-col gap-5 text-xl opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-4">
                  <IoSearch className="cursor-pointer hover:text-Primary transition-all" />
                  <IoCartOutline className="cursor-pointer hover:text-Primary transition-all" />
                  <FaRegHeart className="cursor-pointer hover:text-Primary transition-all" />
                </div>
                <div className="product-title text-center mb-4">
                  <h2 className="font-Crimson text-2xl font-semibold transition-all hover:text-Primary cursor-pointer">
                    {item.title}
                  </h2>
                </div>
                <div className="product-sku text-center mb-4">
                  <p>
                    Product SKU: <span className="text-Primary">{item.sku}</span>
                  </p>
                </div>
                <div className="product-price text-center mb-4 pb-2 text-xl font-semibold">
                  <p>${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        <div className="container mx-auto flex flex-wrap justify-center gap-8 py-20">
          <div onClick={handlePrevPage} className="prev-button p-4 border cursor-pointer">
            Previous
          </div>
          <div className="number">
            <ul className="flex flex-wrap gap-4">
              {pages.map((item) => (
                <li
                  key={item}
                  onClick={() => handleGoToPage(item)}
                  className={`p-4 border cursor-pointer ${
                    item === currentPage ? "bg-blue-100" : ""
                  }`}> {item} </li>
              ))}
            </ul>
          </div>
          <div onClick={handleNextPage} className="next p-4 border cursor-pointer">
            Next
          </div>
        </div>
      </div>
    )}
  </div>
</div>

      </div>
    </>
  );
};

export default ShopProduct;
