import { Link, useLoaderData, useLocation } from "react-router-dom";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/amazonSlice";
import Snackbar from "@mui/material/Snackbar";
import { useEffect, useState } from "react";

function Products() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const data = useLoaderData();
  const produtData = data.data;
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleAddtoCart = (item) => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
        category: item.category,
        image: item.image,
        quantity: 1,
      })
    );
    setOpen(true);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search");

    if (searchQuery) {
      const filterData = produtData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
      );
      setFilteredProducts(filterData);
    } else {
      setFilteredProducts(produtData);
    }
  }, [location.search, produtData]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div
      className="max-width-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 
    gap-6 xl:gap-10 px-4 mb-6"
    >
      {filteredProducts.map((item) => (
        <div
          key={item.id}
          className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent
        shadow-none hover:shadow-testShadow flex flex-col gap-4 relative"
        >
          <Link key={item.id} to={`/productdetails/${item.id}`}>
            <div className="w-full h-auto flex items-center justify-center">
              <img
                className="w-52 h-64 object-contain"
                src={item.image}
                alt="Product image"
              />
            </div>
          </Link>
          <div className="px-4">
            <div className="flex items-center justify-between">
              <h2
                className=" font-titleFont tracking-wide text-lg text-amazon_blue 
              font-medium"
              >
                {item.title.substring(0, 20)}
              </h2>
              <p className="text-sm text-gray-600 font-semibold">
                ₹{item.price}
              </p>
            </div>
            <div>
              <p className="line-clamp-3 text-sm mb-1">{item.description}</p>
              <div className="text-yellow-500">
                <StarOutlinedIcon />
                <StarOutlinedIcon />
                <StarOutlinedIcon />
                <StarOutlinedIcon />
              </div>
            </div>
            <button
              onClick={() => handleAddtoCart(item)}
              className="w-full font-titleFont font-medium text-base bg-gradient-to-tr 
            from-yellow-500 to-yellow-200 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400
            active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Item added to cart Successfully"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </div>
  );
}

export default Products;
