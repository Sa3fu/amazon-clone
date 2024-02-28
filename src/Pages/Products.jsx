import { useLoaderData } from "react-router-dom";

function Products() {
  const data = useLoaderData();
  const produtData = data.data;
  return (
    <div className="max-width-screen-2xl mx-auto grid grid-cols-4 gap-10 px-4">
      {produtData.map((item) => (
        <div className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent
        shadow-none hover:shadow-testShadow relative">
          <div className="w-full h-auto flex items-center justify-center">
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="Product image"
            />
          </div>
          <div>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
