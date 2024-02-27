import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Products() {
  const data = useLoaderData();
  const produtData = data.data;
  return <div>Products</div>;
}

export default Products;
