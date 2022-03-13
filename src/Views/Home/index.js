import React from "react";
import "./Home.css";
import GridView from "../../Components/Molecules/ProductCard/GridView";
import HomeCarousel from "../../Components/Organisms/Carousel";
import Products from "../../Utils/Products";

const Home = () => {
  return (
    <div>
      <div className="homeBanner">
        <HomeCarousel />
        <section className="container trndgPdts pt-5">
          <h4 className="text-center mb-5">Trending Products</h4>
          <div className="pdtGridCntr">
            <GridView data={Products} limit={8} />
          </div>
        </section>
        <section className="container trndgPdts pt-5 mt-5 mb-5">
          <h4 className="text-center mb-5">Offer Products</h4>
          <div className="pdtGridCntr">
            <GridView data={Products} limit={4} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
