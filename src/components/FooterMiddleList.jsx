import React from "react";

function FooterMiddleList({ title, listItem }) {
  return (
    <div>
      <h3 className="font-titleFont text-white text-base font-semibold mb-3">
        {title}
      </h3>
      <ul className="flex flex-col gap-2 font-bodyFont">
        {listItem.map((item) => item.ListData.map((data,index) => <li key={index} className="footerLink">{data}</li>))}
      </ul>
    </div>
  );
}

export default FooterMiddleList;
