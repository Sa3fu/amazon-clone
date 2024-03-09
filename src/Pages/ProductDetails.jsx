import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/amazonSlice";
import Snackbar from "@mui/material/Snackbar";
import { RotatingLines } from "react-loader-spinner";

function ProductDetails() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState({});
  const [activeImg, setActiveImg] = useState("");

  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setImages({ img1: response.data.image });
        setActiveImg(response.data.image);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (!product) {
    return (
      <div>
        {loading && (
          <div className="flex justify-center mx-auto my-auto">
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="yellow"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
      </div>
    );
  }

  const { title, price, description, category } = product;

  const handleAddtoCart = (item) => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
        category: item.category,
        image: item.image,
        quantity: quantity,
      })
    );
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => (prevQuantity += 1));
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => (prevQuantity -= 1));
    }
  };

  return (
    <div className="flex flex-col justify-between mt-3 mb-2 p-6 lg:flex-row gap-8 lg:items-start">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={activeImg}
          alt=""
          className="w-96 h-full aspect-square object-fit"
        />
        <div className="flex flex-row justify-between h-24 rounded-lg">
          <img
            src={images.img1}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImg(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImg(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImg(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImg(images.img4)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className="text-md font-titleFont text-violet-500 font-semibold">
            {category}
          </span>
          <h3 className="text-3xl font-bold font-titleFont">{title}</h3>
        </div>
        <p>{description}</p>
        <h6 className="text-lg font-semibold font-titleFont">₹{price}</h6>
        <div className="flex flex-row items-center gap-12">
          <div className="mt-4">
            <button
              onClick={handleDecrement}
              className="bg-gray-200 py-1 px-4 rounded-lg text-yellow-700 text-2xl"
            >
              -
            </button>
            <span className="py-2 px-4 rounded-lg">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="bg-gray-200 py-1 px-4 rounded-lg text-yellow-700 text-2xl"
            >
              +
            </button>
          </div>
          <button
            onClick={() => handleAddtoCart(product)}
            className=" w-28 py-2 px-4 font-titleFont font-medium text-base bg-gradient-to-tr 
            from-yellow-500 to-yellow-200 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400
            active:to-yellow-500 duration-200  rounded-md mt-3"
          >
            Add to cart
          </button>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            message="Item added to cart Successfully"
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
