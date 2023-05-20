import { React, useContext } from "react";
import CartContext from "../CartContext";
import Slider from "react-slick";
import SlickList from "./SlickList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slick.css";

const Slick = ({ title, arrivals }) => {
  const { products } = useContext(CartContext);
  let filteredProducts;
  arrivals !== undefined
    ? (filteredProducts = products.filter((item) => item.arrivals === arrivals))
    : (filteredProducts = products);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1125,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="slick">
      <h2>{title}</h2>
      <Slider {...settings}>
        {filteredProducts.map((product) => (
          <SlickList key={product.id} product={product}></SlickList>
        ))}
      </Slider>
    </div>
  );
};

export default Slick;
