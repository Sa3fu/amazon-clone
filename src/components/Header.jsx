import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Header() {
  return (
    <div className=" h-20 flex items-center bg-[#131921] sticky top-0 z-0 w-full">
      <div className="relative inline-block p-2">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className=" w-auto h-10 object-contain mx-5 mt-4"
        />
        <div className="absolute inset-0 border border-white rounded-sm opacity-0 hover:opacity-100 cursor-pointer"></div>
      </div>

      <div className="relative inline-block p-2">
        <div className=" pl-4 flex">
          <div className=" flex flex-col ml-2 mr-0 text-white pl-10 mt-5">
            <LocationOnOutlinedIcon sx={{ color: "#fff", fontSize: 28 }} />
          </div>
          <div className=" flex flex-col mr-2 text-white pr-24">
            <span className=" text-base">Address</span>
            <span className=" font-bold text-lg items-center">
              Add Location
            </span>
          </div>
          <div className="absolute inset-0 border border-white rounded-sm opacity-0 hover:opacity-100 cursor-pointer"></div>
        </div>
      </div>

      <div className=" flex items-center rounded-3xl ml-2">
        <input
          type="text"
          className=" h-11 !important p-3 border-none w-[680px] rounded-l-lg"
          placeholder="Search...."
        />
        <SearchOutlinedIcon
          sx={{ fontSize: 45 }}
          className=" p-1 bg-[#cd9042] rounded-r-lg"
        />
      </div>

      <div className="relative inline-block p-2 ml-2">
        <div className=" flex">
          <div className=" flex flex-col ml-2 mr-2 text-white px-9">
            <span className=" text-base">Hello, sign in</span>
            <span className=" font-bold text-lg">Account & Lists</span>
          </div>
        </div>
        <div className="absolute inset-0 border border-white rounded-sm opacity-0 hover:opacity-100 cursor-pointer"></div>
      </div>

      <div className="relative inline-block p-2">
        <div className=" flex flex-col ml-2 mr-2 text-white">
          <span className=" text-base">Returns</span>
          <span className=" font-bold text-lg">& Orders</span>
        </div>
        <div className="absolute inset-0 border border-white rounded-sm opacity-0 hover:opacity-100 cursor-pointer"></div>
      </div>

      <div className="relative inline-block p-1">
        <div className="flex items-center mx-3">
          <div className="mr-8 p-3">
            <ShoppingCartOutlinedIcon sx={{ color: "#fff", fontSize: 37 }} />
          </div>
          <div className="absolute top-0 right-12">
            <span className="text-xl text-white font-semibold">0</span>
          </div>
        </div>
        <div className="absolute inset-0 border border-white rounded-sm opacity-0 hover:opacity-100 cursor-pointer"></div>
      </div>
    </div>
  );
}

export default Header;
