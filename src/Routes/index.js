import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../Components/Organisms/Footer";
import Header from "../Components/Organisms/Header";
import Home from "../Views/Home";
import ProductView from "../Views/ProductView";

const Router = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductView />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
