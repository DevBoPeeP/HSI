import { LiaSchoolSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const nav = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }
  function closeMenu() {
    setToggle(false);
  }

  return (
    <div className=" bg-white shadow-md sticky z-10 h-[6rem] ">
      <div className="flex lg:flex-row items-center justify-between p-10  ">
        <div className="text-amber-800 text-3xl font-serif tracking-wider flex items-center">
          <LiaSchoolSolid />
          HSIM
        </div>
        <div className="space-x-4">
          <div className="xxs:hidden lg:block space-x-2">
            <a
              href=""
              className="hover:bg-amber-400  rounded-full px-4 py-2 hover:text-white hover:shadow-lg transition duration-300 ease-in-out text-amber-800"
            >
              Home
            </a>
            <a
              href=""
              className="hover:bg-amber-400  rounded-full px-4 py-2 hover:text-white
          hover:shadow-lg transition duration-300 ease-in-out text-amber-800"
            >
              About Us
            </a>
            <a
              href=""
              className="hover:bg-amber-400  rounded-full px-4 py-2 hover:text-white
          hover:shadow-lg transition duration-300 ease-in-out text-amber-800"
            >
              Academics
            </a>
            <a
              href=""
              className="hover:bg-amber-400 rounded-full px-4 py-2 hover:text-white
          hover:shadow-lg transition duration-300 ease-in-out  text-amber-800"
            >
              Admission
            </a>
          </div>
          <div className="xxs:block lg:hidden">
            {toggle ? (
              <RxCross1
                onClick={closeMenu}
                size={30}
                className=" cursor-pointer"
              />
            ) : (
              <RxHamburgerMenu
                onClick={openMenu}
                size={30}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
      <div className="xxs:block lg:hidden">
        {toggle ? (
          <div className="bg-amber-900 text-white p-5 flex flex-col justify-center space-y-4 hover-bg-white hover:text-amber-800 transition duration-300 ease-in-out">
            <a href="" className="text-md mb-3 cursor-pointer">
              Home
            </a>
            <a href="" className="text-md mb-3 cursor-pointer">
              About Us
            </a>
            <a href="" className="text-md mb-3 cursor-pointer">
              Academics
            </a>
            <a href="" className="text-md mb-3 cursor-pointer">
              Admission
            </a>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default nav;
