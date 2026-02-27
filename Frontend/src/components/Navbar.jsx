import React, { use, useState } from "react";
import logo from "../assets/logo.png";
import cross_icon from "../assets/cross_icon.png"
import Menu_icon from "../assets/Menu_icon.svg"
import profile from "../assets/profile.png";
import dropdown from "../assets/dropdown.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setshowMenu] = useState(false);
  const [token, settoken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 border-b border-b-gray-400 mb-4 ">
      <img
        onClick={() => navigate("/")}
        className="w-38 h-10 pl-5 cursuor-pointer"
        src={logo}
        alt=""
      />
      <ul className="hidden md:flex items-start gap-7 font-medium ">
        <NavLink to="/">
          <li className="pt-4 pb-2">HOME</li>
          <hr className="border-none outline-none h-0.5 m-auto bg-green-500 hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="pt-4 pb-2">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5  m-auto bg-green-500 hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="pt-4 pb-2">ABOUT</li>
          <hr className="border-none outline-none h-0.5  m-auto bg-green-500 hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="pt-4 pb-2">CONTACT</li>
          <hr className="border-none outline-none h-0.5 m-auto bg-green-500 hidden" />
        </NavLink>
      </ul>
      <div className="flex pt-1.5">
        {token ? (
          <div className="flex group-relative gap-2.5 pr-5 pt-2 items-center cursor-pointer group relative">
            <img className="w-8 rounded-full" src={profile} alt="" />
            <img className="w-2.5" src={dropdown} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/myprofile")}
                  className="hover:text-black cursor-pointer "
                >
                  My Profile
                </p>

                <p
                  onClick={() => navigate("/myappoinments")}
                  className="hover:text-black cursor-pointer "
                >
                  My Appointments
                </p>

                <p
                  onClick={() => settoken(false)}
                  className="hover:text-black cursor-pointer "
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 text-white font-light p-2.5 pr-3  border-none rounded-full hidden md:block"
          >
            Create Acount
          </button>
        )}
        <img
          onClick={() => setshowMenu(true)}
          className="w-6 md:hidden"
          src={Menu_icon}
          alt=""
        />

        {/* ---- Mobile Menu ---- */}

        <div
          className={`md:hidden ${showMenu ? "fixed w-full" : "h-0 w-0"} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img src={logo} className="w-36" alt="" />
            <img
              onClick={() => setshowMenu(false)}
              src={cross_icon}
              className="w-7"
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setshowMenu(false)} to="/">
              <p className="px-4 py-2 rounded full inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setshowMenu(false)} to="/doctors">
              <p className="px-4 py-2 rounded full inline-block">ALL DOCTORS</p>
            </NavLink>
            <NavLink onClick={() => setshowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded full inline-block">ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setshowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded full inline-block">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
