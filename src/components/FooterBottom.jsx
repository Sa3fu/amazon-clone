import React from "react";
import { footerBottomItems } from "../constants";

function FooterBottom() {
  return (
    <div className="hidden w-full bg-footerBottom py-8 md:inline-block md:px-4">
      <div className="max-w-5xl mx-auto">
        <div className="w-full grid grid-cols-4 gap-3 place-content-center text-gray-400">
          {footerBottomItems.map((item) => (
            <div className="group cursor-pointer" key={item._id} >
              <h3 className=" text-[12px] group-hover:underline 
            text-[#DDD] leading-3 mb-[2px]">{item.title}</h3>
              <p className="w-[9.7rem] text-[12px] tracking-tight text-[#999] 
              group-hover:underline leading-3">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
