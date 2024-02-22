import React from "react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function HeaderBottom() {
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      {/* List items */}
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li className="headerHover flex items-center gap-1"><MenuOutlinedIcon/>All</li>
        <li className="headerHover">Amazon miniTV</li>
        <li className="headerHover">Sell</li>
        <li className="headerHover">Best Sellers</li>
        <li className="headerHover">Mobile</li>
        <li className="headerHover">Todays Deals</li>
        <li className="headerHover">Electronics</li>
        <li className="headerHover">Customer Service</li>
      </ul>
    </div>
  );
}

export default HeaderBottom;
