import Link from "next/link";
import React from "react";
import Logo from "../utils/Logo";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <div className="bg-[#F5F3FF]">
      <div className="navbar container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  href="/"
                  className={`${
                    router.pathname === "/"
                      ? "text-primary-600"
                      : "text-text-muted"
                  }`}
                >
                  Home
                </Link>
              </li>

              <li>
                <a href="#" className=" hover:text-primary-500">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500">
                  Deals
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary-500">
                  {"What's"} New
                </a>
              </li>
            </ul>
          </div>
          <Link href="#" className="flex items-center space-x-2">
            <Logo />

            <span className=" text-h5 font-semibold text-text-base">
              We<span className="text-purple-600">5</span>ive
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-body font-semibold text-text-muted">
            <li>
              <Link
                href="/"
                className={`${
                  router.pathname === "/"
                    ? "text-primary-600"
                    : "text-text-muted hover:text-primary-500"
                }`}
              >
                Home
              </Link>
            </li>

            <li>
              <a href="#" className=" hover:text-primary-500">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-500">
                Deals
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-primary-500">
                {"What's"} New
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end px-2">
          <div className="flex items-center space-x-4">
            <div className="relative md:block hidden">
              <input
                type="text"
                placeholder="Search"
                className="md:w-[242px] md:h-[32px] px-8 rounded-full bg-background-default text-[14px] focus:ring-2 focus:ring-primary-300 focus:outline-none"
              />
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6667 12.1666L14.6667 15.1666"
                    stroke="#1D1D1D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.3333 7.83337C13.3333 4.51967 10.647 1.83337 7.33325 1.83337C4.01955 1.83337 1.33325 4.51967 1.33325 7.83337C1.33325 11.1471 4.01955 13.8334 7.33325 13.8334C10.647 13.8334 13.3333 11.1471 13.3333 7.83337Z"
                    stroke="#1D1D1D"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <a href="#" className="text-gray-600 md:hidden block">
              <svg
                width="20"
                height="21"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6667 12.1666L14.6667 15.1666"
                  stroke="#1D1D1D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3333 7.83337C13.3333 4.51967 10.647 1.83337 7.33325 1.83337C4.01955 1.83337 1.33325 4.51967 1.33325 7.83337C1.33325 11.1471 4.01955 13.8334 7.33325 13.8334C10.647 13.8334 13.3333 11.1471 13.3333 7.83337Z"
                  stroke="#1D1D1D"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-600 relative">
              <svg
                width="31"
                height="28"
                viewBox="0 0 31 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.87289 20.5194L2.66933 13.3398C2.48735 12.2543 2.39637 11.7115 2.68773 11.3558C2.9791 11 3.51461 11 4.58564 11H19.4144C20.4854 11 21.0209 11 21.3123 11.3558C21.6036 11.7115 21.5126 12.2543 21.3307 13.3398L20.1271 20.5194C19.7282 22.8991 19.5287 24.0889 18.7143 24.7945C17.9 25.5 16.726 25.5 14.3782 25.5H9.62182C7.27396 25.5 6.10003 25.5 5.28565 24.7945C4.47127 24.0889 4.27181 22.8991 3.87289 20.5194Z"
                  stroke="#1D1D1D"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.5 11C17.5 7.96243 15.0376 5.5 12 5.5C8.96243 5.5 6.5 7.96243 6.5 11"
                  stroke="#1D1D1D"
                  strokeWidth="1.5"
                />

                <path
                  d="M22.6 12.608C21.96 12.608 21.416 12.444 20.968 12.116C20.528 11.78 20.196 11.288 19.972 10.64C19.748 9.992 19.636 9.2 19.636 8.264C19.636 7.32 19.748 6.528 19.972 5.888C20.196 5.24 20.528 4.752 20.968 4.424C21.416 4.096 21.96 3.932 22.6 3.932C23.248 3.932 23.792 4.096 24.232 4.424C24.672 4.752 25.004 5.236 25.228 5.876C25.452 6.516 25.564 7.308 25.564 8.252C25.564 9.196 25.452 9.992 25.228 10.64C25.004 11.288 24.672 11.78 24.232 12.116C23.792 12.444 23.248 12.608 22.6 12.608ZM22.6 11.756C23.272 11.756 23.768 11.472 24.088 10.904C24.416 10.336 24.58 9.452 24.58 8.252C24.58 7.052 24.42 6.176 24.1 5.624C23.78 5.064 23.28 4.784 22.6 4.784C21.936 4.784 21.44 5.064 21.112 5.624C20.784 6.184 20.62 7.06 20.62 8.252C20.62 9.452 20.78 10.336 21.1 10.904C21.428 11.472 21.928 11.756 22.6 11.756Z"
                  fill="white"
                />
              </svg>
              <div className="absolute top-0 right-0 -mt-0 -mr-0 bg-background-dark text-text-light rounded-full w-4 h-4 text-caption-two flex items-center justify-center">
                2
              </div>
            </a>
            <a href="#" className="text-gray-600">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.57757 15.9816C5.1628 16.824 1.45336 18.5441 3.71266 20.6966C4.81631 21.748 6.04549 22.5 7.59087 22.5H16.4091C17.9545 22.5 19.1837 21.748 20.2873 20.6966C22.5466 18.5441 18.8372 16.824 17.4224 15.9816C14.1048 14.0061 9.89519 14.0061 6.57757 15.9816Z"
                  stroke="#1D1D1D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 7C16.5 9.48528 14.4853 11.5 12 11.5C9.51472 11.5 7.5 9.48528 7.5 7C7.5 4.51472 9.51472 2.5 12 2.5C14.4853 2.5 16.5 4.51472 16.5 7Z"
                  stroke="#1D1D1D"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
