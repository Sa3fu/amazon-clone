import React from "react";

function FooterTop() {
  return (
    <div className=" w-full bg-white py-6">
      <div className="w-full border-t-[1px] border-b-[1px] py-8">
        <div className="w-64 mx-auto text-center flex flex-col gap-1">
          <p className="text-sm">See personalized recommendations</p>
          <button className="w-full bg-yellow-400 rounded-md py-1 font-semibold hover:bg-yellow-500 active:bg-yellow-700">Sign in</button>
            <p className="text-sm mt-1">New customer? <span className="text-blue-600 ml-1 cursor-pointer">Start here.</span></p>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
