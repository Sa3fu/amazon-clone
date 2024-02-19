import React from 'react'

function Search() {
  return (
    <div className={"flex justify-between py-2 px-4 w-2/4"}>
        <form className=" flex h-12 w-full items-center ">
          <input
            type="text"
            className=" w-full h-12 static outline-none pl-5"
            placeholder="Search..."
          />
          <div className=" static bg-[#cd9042] p-3 rounded-r-lg">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </form>
      </div>
  )
}

export default Search