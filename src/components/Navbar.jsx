import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContextComponents";
import { toast } from "react-toastify";

export default function Navbar() {

  const {user, logOut, loading} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign Out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  if (loading) {
    return (
      <div className=" h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
   <nav className="bg-slate-400">
    <div className="container mx-auto">
    <div className="navbar">
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
              <li className="text-2xl font-semibold"><NavLink to='/'>Home</NavLink></li>
          </ul>
        </div>
        <Link to='/' className="text-4xl font-bold">ShoeVault</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li className="text-2xl font-semibold"><NavLink to='/'>Home</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? (
            <Link onClick={handleLogOut} className="btn text-xl">LogOut</Link>
          ) : (
            <Link to='/login' className="btn text-xl">Login</Link>
          )
        }


      </div>
    </div>
    </div>
   </nav>
  );
}
