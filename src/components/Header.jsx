import Search from "./Search";

function Header() {
  return (
    // <div className=" h-20 flex items-center justify-between bg-[#131921] sticky top-0 z-0 w-full">
    //   {/* Amazon Icon */}
    //   <div className="flex justify-between py-2 px-4 hover:border border-white cursor-pointer rounded-sm">
    //     <div className=" flex h-12 w-full ">
    //       <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" />
    //     </div>
    //   </div>

    //   {/* Loction */}

    //   <div className="flex justify-between py-2 px-4 hover:border border-white cursor-pointer rounded-sm">
    //     <div className=" flex h-12 w-full items-center flex-col ">
    //       <span className=" text-base w-5 text-gray-300">Location</span>
    //       <span className=" text-lg font-bold text-white flex w-full">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth={1.5}
    //           stroke="currentColor"
    //           className="w-6 h-6"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    //           />
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    //           />
    //         </svg>
    //         Add Location
    //       </span>
    //     </div>
    //   </div>

    //   {/* searchbar */}

    //   <div className="flex justify-between py-2 px-4 w-2/4">
    //     <div className=" flex h-12 w-full items-center">
    //       <input
    //         type="text"
    //         className=" w-full h-12"
    //         placeholder="  Search..."
    //       />
    //       <div className="bg-[#cd9042] p-3 rounded-r-lg">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth={1.5}
    //           stroke="currentColor"
    //           className="w-6 h-6"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    //           />
    //         </svg>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Sign in */}
    //   <div className="flex justify-between py-2 px-4 hover:border border-white cursor-pointer rounded-sm">
    //     <div className=" flex h-12 w-full flex-col">
    //       <span className=" text-base text-gray-300">Hello , sign in</span>
    //       <span className=" text-lg font-bold text-white flex">
    //         Account & Lists
    //       </span>
    //     </div>
    //   </div>

    //   {/* Return & order */}
    //   <div className="flex justify-between py-2 px-4 hover:border border-white cursor-pointer rounded-sm">
    //     <div className=" flex h-12 w-full flex-col">
    //       <span className=" text-base text-gray-300">Returns</span>
    //       <span className=" text-lg font-bold text-white flex">& Orders</span>
    //     </div>
    //   </div>

    //   {/* Cart */}
    //   <div className="flex py-2 px-4 hover:border border-white cursor-pointer rounded-sm">
    //     <div className=" flex h-12 w-full">
    //     <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth={1.5}
    //           stroke="currentColor"
    //           className="w-12 h-12 text-white"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    //           />
    //         </svg>
    //         <span className=" text-lg font-bold text-white">
    //         0
    //       </span>
    //       <span className=" text-lg font-bold text-white mt-5">
    //         Cart
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <div className=" h-16 flex items-center justify-between bg-[#131921] sticky top-0 z-0 w-full">
      {/* Amazon Icon */}

      <div className="flex justify-between pl-2">
        <div className=" flex h-12 w-full p-2 hover:border border-white rounded-sm cursor-pointer">
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" />
        </div>
      </div>

      {/* Loction */}

      <div className="hidden md:flex">
        <div className=" flex  w-full items-center flex-col hover:border border-white cursor-pointer rounded-sm px-3 py-1">
          <span className=" flex justify-start  text-gray-300 w-full pl-6">
            <p>Location</p>
          </span>
          <span className="  font-bold text-white flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            Add Location
          </span>
        </div>
      </div>

      {/* searchbar */}

      <Search />

      {/* Sign in */}
      <div className="hidden md:flex">
        <div className=" flex w-full flex-col hover:border border-white cursor-pointer rounded-sm px-3 py-1">
          <span className=" text-gray-300">Hello , sign in</span>
          <span className=" font-bold text-white flex">Account & Lists</span>
        </div>
      </div>

      {/* Return & order */}
      <div className="hidden md:flex">
        <div className=" flex w-full flex-col hover:border border-white cursor-pointer rounded-sm px-3 py-1">
          <span className=" text-gray-300">Return</span>
          <span className=" font-bold text-white flex">& Orders</span>
        </div>
      </div>

      <div className="flex">
        <div className="flex gap-2 justify-between w-full hover:border border-white cursor-pointer rounded-sm px-3 py-1">
          <div className="flex h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 mt-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span class=" rounded-full bg-red-500 p-0.5 mb-4 px-2 text-sm text-red-50">4</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;
