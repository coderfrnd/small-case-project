import React from "react";
import logo from "../../../public/Json/logo.svg";
import kite from "../../../public/JSON/kite-logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[56px] bg-white shadow-md  transition-all duration-150 ease-in-out">
        <header className="flex justify-center w-full ">
          <nav className="flex items-center justify-between w-[62%] ">
            <div className="flex justify-center text-black  mt-[16px] text-[14px]">
              <h1 className="mr-[28px]">
                <img src={logo} alt="" />
              </h1>
              <span className="mr-[32px] p-1">Discover</span>
              <span className="mr-[32px] p-1">Create</span>
            </div>
            <div className="flex justify-center text-black  text-[14px] space-x-8  items-center">
              <span className="text-[#81878c] font-medium mt-[16px]">
                Watchlist
              </span>
              <div className="relative mt-[12px]">
                <div className="h-[26px] w-[26px] !rounded-full !bg-[#81878c] flex items-center justify-center text-white">
                  ?
                </div>
                <div className="absolute top-[-2px] right-[-2px] h-[12px] w-[12px] !bg-blue-500 rounded-full  shadow-md"></div>
                <div className="absolute top-[-2px] right-[-2px] h-[8px] w-[8px] !bg-blue-500 rounded-full animate-ping opacity-75"></div>
              </div>

              <button
                className="border cursor-pointer mt-[14px] hover:shadow-lg"
                style={{ borderColor: "rgba(31, 122, 224, 0.3)" }}
              >
                <div className="flex justify-center items-start px-[8px] w-[80px] py-[6px] text-[#1f7ae0]">
                  <h1 className="h-[16px] w-[16px] mt-[4px]">
                    <img src={kite} alt="" />
                  </h1>
                  <span className="ml-[8px] font-bold">Login</span>
                </div>
              </button>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
