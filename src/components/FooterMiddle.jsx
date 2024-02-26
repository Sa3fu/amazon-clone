import React from "react";
import { middleList } from "../constants";
import FooterMiddleList from "./FooterMiddleList";

function FooterMiddle() {
  return (
    <div className="w-full bg-amazon_light text-white">
      <button className="w-full font-titleFont text-sm py-4 bg-gray-700 hover:bg-gray-600">
        Back to top
      </button>
      {/* top */}
      <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div className="w-full grid grid-cols-4 place-items-center items-start">
            {middleList.map((item) => (
              <FooterMiddleList
                key={item._id}
                title={item.title}
                listItem={item.ListItem}
              />
            ))}
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="w-full flex gap-6 items-center justify-center py-6">
        <div>
          <img
            className="w-20 pt-1"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
          />
        </div>
        <div className="fex gap-2">
          <p
            className="flex gap-1 items-center justify-center border rounded border-gray-500 
          hover:border-amazon_yellow cursor-pointer px-7 py-1"
          >
            English
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterMiddle;
