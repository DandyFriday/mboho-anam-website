import React, { useState } from "react";
import { assets } from "../assets/assets";
import { BsSearch } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";

type DropdownItems = Record<string, string[]>;

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
  { name: "Members", to: "/members", Dropdown: true },
  { name: "Media", to: "/media", Dropdown: true },
  { name: "Beneficiaries", to: "/student_forum", Dropdown: true },
];

const dropdownItems: DropdownItems = {
  Members: ["Board of Trustees(BOT)", "National Executive", "General Members"],
  Media: ["News", "Photos", "Videos", "Event"],
  Beneficiaries: ["Students in Section", "Graduated Students", "Others"],
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="w-full bg-white h-[90px] fixed shadow-lg z-50">
      <div className="flex justify-between items-center h-full px-6 md:px-8">
        {/* Logo Section */}
        <h1 className="flex items-center">
          <Link to="/">
            <img
              className="h-[12rem] mt-[0rem] pb-16 pt-[3rem] w-[20px] px-3 md:w-full"
              src={assets.logo1}
              alt="logo"
            />
          </Link>
          <span className="text-primary font-bold text-lg">MBOHO ANAM</span>
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-3">
          {navLinks.map(({ name, to, Dropdown }) => (
            <li key={name + to} className="relative group">
              <Link
                to={to}
                className={`flex items-center ${
                  currentRoute === to ? "text-yellow2" : "text-primary"
                } hover:text-yellow2`}
              >
                {name}
                {Dropdown && <SlArrowDown className="text-lg ml-1 pt-1" />}
              </Link>
              {Dropdown && (
                <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-md w-48 p-2 z-10 border-t-4 border-orange">
                  {dropdownItems[name]?.map((item, index) => (
                    <li
                      key={`${name}-${index}`}
                      className="hover:bg-primary hover:text-white p-2 rounded-md text-sm"
                    >
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Search and Apply Section */}
        <div className="hidden md:flex items-center pl-16 gap-4">
          <input
            className="text-primary rounded-lg border-2 shadow-lg border-opacity-20 px-2 border-primary focus:border-orange focus:outline-none"
            placeholder="Search..."
          />
          <BsSearch className="text-primary hover:text-orange" />
          {/* <Link to="/Form">
            <button className="bg-yellow2 w-[70px] h-9 flex items-center justify-center rounded-lg text-white p-2 hover:bg-primary">
              Apply
            </button>
          </Link> */}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden pr-4">
          {isOpen ? (
            <MdOutlineClose
              className="text-primary font-bold text-2xl"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-primary font-bold text-2xl"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="bg-light px-4 absolute w-full top-[90px] left-0 shadow-md">
          <ul className="md:hidden flex flex-col items-start gap-3">
            {navLinks.map(({ name, to, Dropdown }) => (
              <li key={name + to} className="w-full">
                <Link
                  to={to}
                  className={`block py-2 ${
                    currentRoute === to ? "text-yellow2" : "text-primary"
                  } hover:text-yellow2`}
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
                {Dropdown && (
                  <ul className="pl-4">
                    {dropdownItems[name]?.map((item, index) => (
                      <li
                        key={`${name}-${index}`}
                        className="hover:bg-primary hover:text-white p-2 rounded-md text-sm"
                      >
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Search and Apply Section */}
          <div className="mt-4 md:hidden flex items-start gap-4">
            <input
              className="rounded-lg border-[rgba(0,0,0,0.5)] shadow-lg border-secondary focus:border-orange focus:outline-none px-2 py-1"
              placeholder="Search..."
            />
            <BsSearch className="text-primary" />
            {/* <Link to="/Form">
              <button className="bg-yellow2 w-[70px] rounded-lg text-white p-2">
                Apply
              </button>
            </Link> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;




