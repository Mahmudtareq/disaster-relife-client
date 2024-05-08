import { Facebook, GitBranch, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/charity-logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="dark:bg-gray-900 my-4 px-3 lg:px-0">
        <div className="container rounded shadow-xl text-black mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-4 col-span-12 mb-3 lg:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  className="h-10 me-3"
                  alt="Distaste help Logo"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Medical Supply
                </span>
              </Link>
            </div>
            {/* <div className="col-span-8"> */}
            <div className="lg:col-span-2 col-span-6 mt-5 lg:mt-0">
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                Information
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Search Terms
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Advanced Search
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 col-span-6 mt-5 lg:mt-0">
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline ">
                    Youtube
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline ">
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline ">
                    Twiter
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 col-span-6 mt-5 lg:mt-0">
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                Help
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline ">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline ">
                    Information
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline ">
                    Shipping Details
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 col-span-6 mt-5 lg:mt-0">
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                Quick Links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Blogs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Shop
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              
              </ul>
            </div>
            {/* </div> */}
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="#" className="hover:underline">
                Global Team
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn community</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <GitBranch className="h-5 w-5" />
                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
