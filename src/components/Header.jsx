import React from "react";

function Header() {
  return (
    <div className=" h-[60px] flex items-center bg-[#131921] sticky top-0 z-0 w-full">
      <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      <div>
        <input type="text" />
      </div>
      <div>
      <div>
          <span>EN</span>
          
        </div>
        <div>
          <span>Hello, signin</span>
          <span>Account & Lists</span>
        </div>
        <div>
          <span>Returns</span>
          <span>& Orders</span>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
