import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { decrementQty, deleteItem, incrementQty, resetCart } from "../redux/amazonSlice";

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let Total = 0;
    products.map((item) => (Total += item.price * item.quantity));
    return setTotalPrice(Total.toFixed(2));
  }, [products]);
  return (
    <div className="w-full bg-gray-100 p-4">
      <div className="container mx-auto h-auto grid grid-cols-5 gap-8">
        <div className="w-full h-full bg-white px-4 col-span-4">
          <div
            className="font-titleFont flex items-center justify-between border-b-[1px]
                border-b-gray-400 py-3"
          >
            <h2 className="text-3xl font-medium">Shopping Cart</h2>
            <h4 className="text-xl font-normal">SubTotal</h4>
          </div>
          {/* Products */}
          <div>
            {products.map((item) => (
              <div
                key={item.id}
                className="w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6"
              >
                <div className="w-full flex ites-center gap-6">
                  <div className="w-1/5">
                    <img
                      className="w-full h-44 object-contain"
                      src={item.image}
                      alt="productImg"
                    />
                  </div>
                  <div className="w-4/5">
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <p className="pr-10 text-sm">
                      {item.description.substring(0, 200)}
                    </p>
                    <p className="text-base">
                      Unit Price{" "}
                      <span className="font-semibold">₹{item.price}</span>
                    </p>
                    <div
                      className="bg-[#F0F2F2] flex justify-center items-center gap-1 w-24 py-1
                                text-center drop-shadow-lg rounded-md"
                    >
                      <p>Qty:</p>
                      <p onClick={()=>dispatch(decrementQty(item.id))} className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300">
                        -
                      </p>
                      <p>{item.quantity}</p>
                      <p onClick={()=>dispatch(incrementQty(item.id))} className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300">
                        +
                      </p>
                    </div>
                    <button
                      onClick={() => dispatch(deleteItem(item.id))}
                      className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700
                  active:bg-red-900 duration-300"
                    >
                      Delete Item
                    </button>
                  </div>
                  <div>
                    <p className="text-lg font-titleFont font-semibold">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full py-2">
            <button onClick={()=>dispatch(resetCart())}
              className="px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500
            text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide"
            >
              Clear Cart
            </button>
          </div>
        </div>
        <div className="w-full h-52 bg-white col-span-1 flex flex-col justify-center items-center p-4">
          <div>
            <p className="flex gap-2 items-start text-sm">
              <span>
                <CheckCircleOutlinedIcon className="bg-white text-green-500 rounded-full" />
              </span>
              Your order qualifies for FREE Shipping Choose this option at
              checkout. See details....
            </p>
          </div>
          <div>
            <p className="font-semibold px-10 py-1 flex gap-2 items-center justify-between">
              Total : <span className="text-lg font-bold">₹{totalPrice}</span>
            </p>
          </div>
          <button
            className="w-full font-titleFont font-medium text-base bg-gradient-to-tr 
          from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow border-yellow-500
          hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500
          duration-200 py-1.5 rounded-md mt-3"
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;