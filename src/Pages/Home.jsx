import React from "react";
import HomeHero from "../Components/HomeHero";
import FeaturedProduct from "../Components/FeaturedProduct";
import LatestProduct from "../Components/LatestProduct";
import TrendingProduct from "../Components/TrendingProduct";
import OfferBox from "../Components/OfferBox";
import PromotionalBanner from "../Components/PromotionalBanner";
import TopCategory from "../Components/TopCategory";
import NewsletterBanner from "../Components/NewsletterBanner";

const Home = () => {
  return <>
  <HomeHero/>
  <FeaturedProduct/>
  <LatestProduct/>
 
  <OfferBox/>
  <PromotionalBanner/>
   <TrendingProduct/>
   <TopCategory/>
   <NewsletterBanner/>
  </>;
};

export default Home;
