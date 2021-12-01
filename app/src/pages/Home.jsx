import React from "react";
import Navbar from "../components/Navbar";
import Anouncement from "../components/Anouncement";
import Slider from "../components/Slider";
import Categroies from "../components/Categroies";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Anouncement />
      <Navbar />
      <Slider />
      <Categroies />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
