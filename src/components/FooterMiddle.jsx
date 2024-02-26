import React from "react";
import { middleList } from "../constants";
import FooterMiddleList from "./FooterMiddleList";

function FooterMiddle() {
  console.log(middleList, "middlelist");
  return (
    <div className="w-full bg-amazon_light text-white">
      <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div className="w-full grid grid-cols-4 place-items-center items-start">
            {middleList.map((item) => (
              <FooterMiddleList key={item._id} title={item.title} listItem={item.ListItem}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterMiddle;
