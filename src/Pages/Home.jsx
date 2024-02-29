import React from "react";
import Banner from "../components/Banner";
import Products from "./Products";

function Home() {
  return (
    <div>
      <Banner />
      <div className="w-full -mt-16 xl:-mt-40">
        <Products />
      </div>
    </div>
  );
}

export default Home;
