import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/charity-logo.png";
const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "All Supplies",
    link: "/supplies",
  },
  {
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Login",
    link: "/login",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" alt="Flowbite Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span> */}
        </Link>
        <div className=" space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
            {isMenuOpen ? (
              <X className="w-5 h-5" /> // Close icon
            ) : (
              <Menu className="w-5 h-5" /> // Menu icon
            )}
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.link}
                  className={` ${
                    link.link === location.pathname ? "text-blue-600" : ""
                  } block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
