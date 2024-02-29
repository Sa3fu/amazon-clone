import React from "react";
import { countries, middleList } from "../constants";
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
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 
          md:place-items-center md:items-start">
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
            className="hidden mdl:w-20 pt-1"
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
      <div className="mdl:flex justify-center hidden">
        <ul className="flex flex-wrap justify-center gap-3 p-0 inline w-4/6 text-gray-300 mb-6">
          {countries.map((Country) => (
            <li key={Country._id} className="footerLink text-xs">
              {Country.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterMiddle;
