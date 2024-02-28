import { useLoaderData } from "react-router-dom";

function Products() {
  const data = useLoaderData();
  const produtData = data.data;
  return (
    <div className="max-width-screen-2xl mx-auto grid grid-cols-4 gap-10 px-4">
      {produtData.map((item) => (
        <div
          key={item.id}
          className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent
        shadow-none hover:shadow-testShadow flex flex-col gap-4 relative"
        >
          <div className="w-full h-auto flex items-center justify-center">
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="Product image"
            />
          </div>
          <div className="px-4">
            <div className="flex items-center justify-between">
              <h2
                className=" font-titleFont tracking-wide text-lg text-amazon_blue 
              font-medium"
              >
                {item.title.substring(0, 20)}
              </h2>
              <p className="text-sm text-gray-600 font-semibold">
                ₹{item.price}
              </p>
            </div>
            <div>
              <p className="line-clamp-3 text-sm">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
