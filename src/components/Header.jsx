function Header() {
  return (
    <div className=" h-20 flex items-center bg-[#131921] sticky top-0 z-0 w-full p-4">
      {/* Amazon Icon */}
      <div className="flex justify-between py-2 px-4 hover:border border-white cursor-pointer rounded-sm">
        <div className=" flex h-12 w-full ">
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" />
        </div>
      </div>

      {/* Loction */}

      <div className="flex justify-between py-2 px-4 hover:border border-white cursor-pointer rounded-sm">
        <div className=" flex h-12 w-full items-center flex-col ">
          <span className=" text-base w-5 text-gray-300">Location</span>
          <span className=" text-lg font-bold text-white flex">
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

      <div className="flex justify-between py-2 px-4">
        <div className=" flex h-12 w-full items-center">
          <div className=" bg-gray-200 flex p-3 rounded-l-lg">
            <select>
              <option value=''>All</option>
              <option value="All categories">All categories</option>
              <option value="All categories">All categories</option>
            </select>
          </div>
          <input type="text" className=" w-680 h-12" />
        </div>
      </div>
    </div>
  );
}

export default Header;
