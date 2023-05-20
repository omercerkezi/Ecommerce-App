import React from "react";
import ActionBanner from "../components/ActionBanner";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import SmBanner from "../components/SmBanner";
import Slick from "../components/Slick";
import "../styles/home.css";
import AnimatedPage from "../components/AnimatedPage";

const Home = () => {
  return (
    <AnimatedPage>
      <div className="home-container">
        <Banner />
        <Slick title="Gear Up" arrivals="Gear Up" />
        <ActionBanner />
        <Slick title="New Arrivals" arrivals="New Arrivals" />
        <SmBanner />
        <Newsletter />
        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default Home;
