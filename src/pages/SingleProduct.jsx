import { React, useState, useContext } from "react";
import Select from "react-select";
import { useParams } from "react-router-dom";
import CartContext from "../CartContext";
import Slick from "../components/Slick";
import Footer from "../components/Footer";
import "../styles/singleProduct.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProduct = () => {
  const { products, onAdd, addToFav } = useContext(CartContext);

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [slideindex, setSlideindex] = useState(0);
  const { id } = useParams();

  const myProduct = products.filter((product) => product.id === id);
  let sizeOptions = [];
  let colorOptions = [];
  let sliderImages = [];

  sliderImages.push(myProduct[0].src);
  sliderImages.push(myProduct[0].src2);
  sliderImages.push(myProduct[0].src3);
  sliderImages.push(myProduct[0].src4);
  sliderImages.push(myProduct[0].src5);

  myProduct[0].size.map((item) => {
    sizeOptions[sizeOptions.length] = {
      value: `${item}`,
      label: `${item}`,
    };
  });

  myProduct[0].colors.map((item) => {
    colorOptions[colorOptions.length] = {
      value: `${item}`,
      label: `${item}`,
    };
  });

  const handleChangeSize = (selectedOption) => {
    setSize(selectedOption.value);
  };

  const handleChangeColor = (selectedOption) => {
    setColor(selectedOption.value);
  };

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideindex(slideindex > 0 ? slideindex - 1 : 4);
    } else {
      setSlideindex(slideindex < 4 ? slideindex + 1 : 0);
    }
  };

  const notifyBag = () => {
    toast.success("Added to Cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyFav = () => {
    toast.success("Added to Wishlist", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      {myProduct.map((item) => (
        <section className="singleProduct-container">
          <div className="singleProduct-img">
            <img src={item.src} alt="" />
            <img src={item.src2} alt="" />
            <img src={item.src3} alt="" />
            <img src={item.src4} alt="" />
            <img src={item.src5} alt="" />
          </div>
          <div className="slider-img">
            <div
              className="arrowLeft"
              direction="left"
              style={{ cursor: "pointer" }}
              onClick={() => handleClick("left")}
            >
              <KeyboardArrowLeftIcon sx={{ fontSize: 40 }} />
            </div>
            <div
              className="wrapper"
              slideindex={slideindex}
              style={{ transform: `translateX(${slideindex * -100}vw)` }}
            >
              {sliderImages.map((image) => (
                <div className="slide">
                  <div className="image-container">
                    <img src={image} alt="" />
                  </div>
                </div>
              ))}
            </div>
            <div
              className="arrowRight"
              direction="right"
              style={{ cursor: "pointer" }}
              onClick={() => handleClick("right")}
            >
              <KeyboardArrowRightIcon sx={{ fontSize: 40 }} />
            </div>
          </div>

          <div className="singleProduct-body">
            <h2>{item.title}</h2>
            <p>{item.description}</p>

            {item.priceFrom ? (
              <h4 style={{ color: "red" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "line-through",
                    fontWeight: "500",
                  }}
                >
                  ${item.priceFrom}
                </span>{" "}
                ${item.price}
              </h4>
            ) : (
              <h4>${item.price}</h4>
            )}

            <div className="selectSize">
              <h3>Select Size</h3>
              <Select options={sizeOptions} onChange={handleChangeSize} />
            </div>

            <div className="selectColor">
              <h3>Select Color</h3>
              <Select options={colorOptions} onChange={handleChangeColor} />
            </div>

            {size.length > 0 && color.length > 0 ? (
              <button
                className="addBag"
                onClick={() => {
                  notifyBag();
                  onAdd(item, size, color);
                }}
              >
                Add to Bag
              </button>
            ) : (
              <div className="addBag-notSelected">
                <p>Please select size & color</p>
                <button>Add to Bag</button>
              </div>
            )}

            <button
              className="favourite"
              onClick={() => {
                notifyFav();
                addToFav(item);
              }}
            >
              Favoritue
              <span>
                <FavoriteBorderIcon />
              </span>
            </button>
            <p className="singleProduct-description">{item.content}</p>
          </div>
        </section>
      ))}
      <Slick title="You May Also Like" arrivals="New Arrivals" />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default SingleProduct;
