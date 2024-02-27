import React from "react";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <div className="font-titleFont">
      <div>
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
      </div>
    </div>
  );
}

export default Footer;
