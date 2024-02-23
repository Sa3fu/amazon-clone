import React from "react";

function FooterMiddle() {
  return (
    <div className="w-full bg-amazon_light text-white">
      <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div>
            <h3 className="font-titleFont text-white text-base font-semibold mb-3">Get to Know Us</h3>
            <ul className="flex flex-col gap-2 font-bodyFont">
              <li className="footerLink">About Us</li>
              <li className="footerLink">Careers</li>
              <li className="footerLink">Press Releases</li>
              <li className="footerLink">Amazon Science</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterMiddle;
