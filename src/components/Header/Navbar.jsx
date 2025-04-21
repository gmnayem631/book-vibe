import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li className="m-3">Home</li>
      <li className="m-3">About</li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-2xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <a href="" className="btn btn-outline btn-success">
          Home
        </a>

        <ul className="menu menu-horizontal px-1">
          <li className="m-3 text-[18px] text-[#131313CC]">Listed Books</li>
          <li className="m-3 text-[18px] text-[#131313CC]">Pages to Read</li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <a className="btn btn-success text-white">Login</a>
        <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
