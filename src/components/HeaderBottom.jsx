import React, { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SideNavContent from "./SideNavContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function HeaderBottom() {
  const [sidebar, setSidebar] = useState(false);
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
        <li className="headerHover">Amazon miniTV</li>
        <li className="headerHover">Sell</li>
        <li className="headerHover">Best Sellers</li>
        <li className="headerHover">Mobile</li>
        <li className="headerHover">Todays Deals</li>
        <li className="headerHover">Electronics</li>
        <li className="headerHover">Customer Service</li>
      </ul>

      {/* Side Navbar */}
      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <div className="w-[350px] h-full bg-white border border-black">
              <div
                className="w-full bg-amazon_light text-white py-2 px-6 flex items-center
              gap-4"
              >
                <AccountCircleIcon />
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign in
                </h3>
              </div>
              <SideNavContent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderBottom;
