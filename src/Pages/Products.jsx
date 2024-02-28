import { useLoaderData } from "react-router-dom";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

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
              <p className="line-clamp-3 text-sm mb-1">{item.description}</p>
              <div className="text-yellow-500">
                <StarOutlinedIcon/>
                <StarOutlinedIcon/>
                <StarOutlinedIcon/>
                <StarOutlinedIcon/>
              </div>
            </div>
            <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr 
            from-yellow-500 to-yellow-200 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400
            active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
