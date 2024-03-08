import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState({});
  const [activeImg, setActiveImg] = useState("");

  useEffect(() => {
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
      }
    };
    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { image, title, price, description, category } = product;

  return (
    <div className="flex flex-col justify-between mt-3 mb-2 px-2 lg:flex-row">
      <div className="flex flex-col gap-6">
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
      <div className="flex flex-col">
        <div>
          <span className="text-md font-titleFont text-violet-500 font-semibold">
            {category}
          </span>
          <h3 className="text-3xl font-bold font-titleFont">{title}</h3>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
