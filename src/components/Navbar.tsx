import React, { useState } from "react";
import { assets } from "../assets/assets";
import { BsSearch } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
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
  Members: ["Executives", "Minor Members", "General Members"],
  Media: ["News", "Photos", "Videos", "Event"],
  Beneficiaries: ["Students in Section", "Graduated Students", "Others"],
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown = (dropdownKey: string) => {
    setActiveDropdown((prev) => (prev === dropdownKey ? null : dropdownKey));
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const currentRoute = window.location.pathname;

  return (
    <div className="w-full bg-white h-[90px] fixed shadow-lg z-50">
      <div className="flex justify-between items-center h-full px-8">
        {/* Logo Section */}
        <h1 className="flex items-center justify-center px-2">
          <a href="/">
            <img
              className="h-[12rem] mt-[0rem] pb-16 pt-[3rem] w-[20px] px-3 md:w-full"
              src={assets.logo1}
              alt="logo"
            />
          </a>
          <span className="text-primary font-bold text-lg">MBOHO ANAM</span>
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-3 relative">
          {navLinks.map(({ name, to, Dropdown }) => (
            <li
              key={name + to}
              className={`relative hover:text-orange text-${
                currentRoute === to ? "orange" : "primary"
              }`}
            >
              <button
                className="flex items-center focus:outline-none"
                onClick={() => toggleDropdown(name)}
                onBlur={closeDropdown}
                tabIndex={0}
              >
                {name}
                {Dropdown && <SlArrowDown className="text-lg ml-1 pt-1" />}
              </button>
              {/* Dropdown Menu */}
              {activeDropdown === name && dropdownItems[name]?.length > 0 && (
                <ul
                  className="absolute text-primary top-full left-0 bg-white shadow-md mt-2 rounded-md w-48 p-2 z-10 border-t-4 border-orange"
                >
                  {dropdownItems[name].map((item: string, index: number) => (
                    <li
                      key={`${name}-${index}`}
                      className="hover:bg-gray-100 p-2 rounded-md text-sm"
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
          <div>
            <input
              className="rounded-lg border-2 shadow-lg border-opacity-20 px-2 border-primary focus:border-orange focus:outline-none"
              placeholder="Search..."
            />
          </div>
          <div>
            <BsSearch className="text-primary hover:text-orange" />
          </div>
          <Link to="/Form">
            <div>
              <button className="bg-orange w-[70px] h-9 flex items-center justify-center rounded-lg text-white p-2 hover:bg-primary">
                Apply
              </button>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="pl-[20rem] md:hidden">
          {isOpen ? (
            <MdOutlineClose
              className="text-primary font-bold text-xl w-8"
              onClick={handleIsOpen}
            />
          ) : (
            <FiMenu
              className="text-primary font-bold text-xl w-8"
              onClick={handleIsOpen}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="bg-light px-4 absolute w-full">
          <ul className="md:hidden flex flex-col items-start gap-3">
            {navLinks.map(({ name, to }) => (
              <li
                key={name + to}
                className={`hover:text-orange text-${
                  currentRoute === to ? "orange" : "primary"
                }`}
              >
                <a href={to}>{name}</a>
              </li>
            ))}
          </ul>
          <div className="mt-4 md:hidden flex items-start gap-4">
            <div>
              <input
                className="rounded-lg border-[rgba(0,0,0,0.5)] shadow-lg border-secondary focus:border-orange focus:outline-none"
                placeholder="Search..."
              />
            </div>
            <div className="text-primary">
              <BsSearch />
            </div>
            <Link to="/Form">
              <div>
                <button className="bg-secondary w-[70px] rounded-lg text-white p-2">
                  Apply
                </button>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;









