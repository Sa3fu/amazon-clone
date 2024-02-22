import React from "react";

function SideNavContent() {
  return (
    <div className="py-3 border-b-[1px] border-b-gray-300">
      <h3 className="text-lg font-titleFont font-semibold mb-1 px-6 py-4">
        Trending
      </h3>
      <ul>
        <li
          className="flex items-center justify-between hover:bg-zinc-200 px-6
                  py-2 cursor-pointer"
        >
          Best Sellers
        </li>
        <li
          className="flex items-center justify-between hover:bg-zinc-200 px-6
                  py-2 cursor-pointer"
        >
          New Releases
        </li>
        <li
          className="flex items-center justify-between hover:bg-zinc-200 px-6
                  py-2 cursor-pointer"
        >
          Movers and Shakers
        </li>
      </ul>
    </div>
  );
}

export default SideNavContent;
