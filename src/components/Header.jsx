import React, { useEffect, useRef, useState } from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { allItems } from "../constants";
import HeaderBottom from "./HeaderBottom";

function Header() {
  const ref = useRef();
  const [showAll, setShowAll] = useState(false);
  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
      if(e.target.contains(ref.current)){
        setShowAll(false)
      }
    })
  },[]);

  return (
    <div className="w-full">
      <div className=" w-full bg-amazon_blue text-white px-4 py-1 flex items-center gap-4">
        {/* Image/Icon */}
        <div className="headerHover">
          <img
            className="w-24 mt-2"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </div>
        {/* Location */}
        <div className="headerHover">
          <PlaceOutlinedIcon sx={{ fontSize: "20px" }} />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver Address
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Add
            </span>
          </p>
        </div>

        {/* Search bar */}
        <div className="h-10 rounded-md flex flex-grow relative">
          <span
            ref={ref}
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer 
          duration-300 text-sm text-amazon_blue font-titleFont flex items-center
          justify-center rounded-tl-md rounded-bl-md"
          >
            All <span></span>
            <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} />
          </span>
          {showAll && (
            <div>
              <ul
                className="absolute w-48 h-80 pr-0 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue
              text-black p-2 flex-col gap-1 z-50"
              >
                {allItems.map((item) => (
                  <li
                    key={item._id}
                    className="text-sm tracking-wide font-titleFont hover:bg-[#1e7dff] border-b-amazon_blue cursor-pointer"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            type="text"
            placeholder="Search Amazon"
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-3"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>

        {/* Sign in  */}
        <div className="flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Hello , sign in</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">
            Accounts & Lists
            <span>
              <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} />
            </span>
          </p>
        </div>

        {/* Order and return */}
        <div className="flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>

        {/* Cart */}
        <div className="flex items-start justify-center headerHover relative">
          <ShoppingCartOutlinedIcon />
          <p className="text-xs font-semibold mt-3 text-whiteText">
            Cart
            <span
              className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847]
            text-amazon_blue rounded-full flex justify-center items-center"
            >
              0
            </span>
          </p>
        </div>
      </div>

      {/* Header Bottom */}

      <HeaderBottom />
    </div>
  );
}

export default Header;
