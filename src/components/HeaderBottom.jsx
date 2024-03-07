import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SideNavContent from "./SideNavContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useSelector } from "react-redux";

function HeaderBottom() {
  const userInfo = useSelector((state) => state.userInfo);
  const ref = useRef();
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false);
      }
    });
  }, [ref, sidebar]);
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      {/* List items */}
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className="headerHover flex items-center gap-1"
        >
          <MenuOutlinedIcon />
          All
        </li>
        <li className="headerHover hidden md:inline-flex">Amazon miniTV</li>
        <li className="headerHover hidden md:inline-flex">Sell</li>
        <li className="headerHover hidden md:inline-flex">Best Sellers</li>
        <li className="headerHover hidden md:inline-flex">Mobile</li>
        <li className="headerHover hidden md:inline-flex">Todays Deals</li>
        <li className="headerHover hidden md:inline-flex">Electronics</li>
        <li className="headerHover hidden mdl:inline-flex">Customer Service</li>
      </ul>

      {/* Side Navbar */}
      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-70 z-10">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -500, opacity: 0, transition: { duration: 0.4 } }}
              transition={{ duration: 0.4 }}
              className="w-[80%] md:w-[350px] h-full bg-white border border-black overflow-y-scroll"
            >
              <div
                className="w-full bg-amazon_light text-white py-2 px-6 flex items-center
              gap-4 "
              >
                <AccountCircleIcon />
                {userInfo ? (
                  <h3 className="font-titleFont font-bold text-lg tracking-wide sticky top-0">
                  {userInfo.userName}
                </h3>
                ) : (
                  <h3 className="font-titleFont font-bold text-lg tracking-wide sticky top-0">
                    Hello, Sign in
                  </h3>
                )}
              </div>
              <SideNavContent
                title="Trending"
                one="Best Sellers"
                two="New Releases"
                three="Movers and Shakers"
              />
              <SideNavContent
                title="Digtal Content and Devices"
                one="Echo & Alexa"
                two="Fire TV"
                three="Kindle E-Readers & ebooks"
                four="Audible Audiobooks"
                five="Amazon Prime Video"
                six="Amazon Prime Music"
                icon={<KeyboardArrowRightIcon />}
              />
              <SideNavContent
                title="Shop by Category"
                one="Mobile, Computer"
                two="TV,Appliances,Electorincs"
                three="Men's Fashion"
                four="Women's Fashion"
                icon={<KeyboardArrowRightIcon />}
              />
              <SideNavContent
                title="Help and Settings"
                one="Your Account"
                two="Customer Service"
                three="Sign in"
              />
              <span
                onClick={() => setSidebar(false)}
                className="cursor-pointer absolute top-0 left-[82%] md:left-[360px] w-10 h-10 text-black
            flex items-center justify-center"
              >
                <CloseOutlinedIcon sx={{ fontSize: "32px", color: "white" }} />
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderBottom;
