import { NavLink } from "react-router-dom";
import "../../App.css";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="navbar flex justify-between bg-base-100 ">
      <div className="navbar-start">
        <h2 className="font-bold text-2xl ">Book Vibe</h2>
      </div>
      <div className="text-2xl md:hidden" onClick={() => handleToggle()}>
        {toggle ? <IoMdClose /> : <FaBarsStaggered />}
      </div>
      <div
        className={`lg:flex justify-between w-[100%] items-center z-10 absolute t md:static text-center  lg:bg-transparent bg-gray-400 p-10 lg:p-0 left-0 ${
          toggle ? "block" : "hidden"
        }`}
      >
        <ul className="lg:flex gap-x-3  md:w-fit navbarActive items-center ">
          <li className="pt-5 mt-2 lg:mt-0">
            <NavLink className={`px-4 py-3 rounded-lg  font-bold`} to={"/"}>
              Home
            </NavLink>
          </li>
          <li className="pt-5  mt-2 lg:mt-0 ">
            <NavLink
              className={`px-4 py-3 rounded-lg  font-bold`}
              to={"/books"}
            >
              Listed Books
            </NavLink>
          </li>
          <li className="pt-5 mt-2 lg:mt-0 mb-6 lg:mb-0">
            <NavLink className={`px-4 py-3 rounded-lg font-bold`} to={"/read"}>
              Page To Read
            </NavLink>
          </li>
        </ul>
        <div className="btnForLoginSing lg:flex">
          <li className="pt-5 mb-3">
            <NavLink className="px-4 py-3 rounded-lg text-white bg-green-600 font-bold mr-2">
              Sign Up
            </NavLink>
          </li>
          <li className="pt-5">
            <NavLink className="px-4 py-3 rounded-lg text-white bg-green-600 font-bold">
              Login
            </NavLink>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
