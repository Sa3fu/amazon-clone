import React from "react";

function SideNavContent({ title, one, two, three, four, five, six, icon }) {
  const hasItems = [one, two, three, four, five, six].some((item) => item);
  return (
    <div className="py-3 border-b-[1px] border-b-gray-300 ">
      <h3 className="text-lg font-titleFont font-semibold mb-1 px-6 py-4">
        {title}
      </h3>
      <ul className="text-sm">
        {one && (
          <li
            className="flex items-center justify-between hover:bg-zinc-200 px-6
                  py-2 cursor-pointer"
          >
            {one}
            {hasItems && <span>{icon}</span>}
          </li>
        )}

        {two && (
          <li
            className="flex items-center justify-between hover:bg-zinc-200 px-6
                  py-2 cursor-pointer"
          >
            {two}
            {hasItems && <span>{icon}</span>}
          </li>
        )}

        {three && (
          <li
            className="flex items-center justify-between hover:bg-zinc-200 px-6
                  py-2 cursor-pointer"
          >
            {three}
            {hasItems && <span>{icon}</span>}
          </li>
        )}

        {four && (
          <li
            className="flex items-center justify-between hover:bg-zinc-200 px-6
                  py-2 cursor-pointer"
          >
            {four}
            {hasItems && <span>{icon}</span>}
          </li>
        )}

        {five && (
          <li
            className="flex items-center justify-between hover:bg-zinc-200 px-6
                  py-2 cursor-pointer"
          >
            {five}
            {hasItems && <span>{icon}</span>}
          </li>
        )}

        {six && (
          <li
            className="flex items-center justify-between hover:bg-zinc-200 px-6
                  py-2 cursor-pointer"
          >
            {six}
            {hasItems && <span>{icon}</span>}
          </li>
        )}
      </ul>
    </div>
  );
}

export default SideNavContent;
