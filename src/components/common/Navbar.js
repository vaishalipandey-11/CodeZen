import React, { useEffect, useState } from 'react'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { Link, matchPath, useLocation } from 'react-router-dom'
import { NavbarLinks } from "../../data/navbar-links"
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from "react-icons/ai"
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { apiConnector } from '../../services/apiconnector'
import { categories } from '../../services/apis'
import { IoIosArrowDown } from "react-icons/io"
import { RxHamburgerMenu } from "react-icons/rx"
import './loader.css'

const Navbar = () => {
  // Extracting data from Redux store
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { cart, totalItems } = useSelector((state) => state.cart);

  const location = useLocation(); // Hook to access current route
  const [subLinks, setSubLinks] = useState([]); // Stores subcategories for "Catalog"

  // Function to fetch category list from API
  const fetchSublinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      setSubLinks(result.data.data); // Store fetched subcategories
    } catch (error) {
      console.log("Could not fetch the category list");
    }
  };

  // Fetch subLinks on component mount
  useEffect(() => {
    fetchSublinks();
  }, []);

  // Function to check if current path matches a given route
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
      <div className='flex w-11/12 max-w-maxContent items-center justify-between'>

        {/* Logo */}
        <Link to="/">
          <img src={logo} width={160} height={42} loading='lazy' />
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className='hidden md:flex gap-x-6 text-richblack-25'>
            {
              NavbarLinks.map((link, index) => (
                <li key={index}>
                  {
                    // Special case: if "Catalog", show dropdown menu
                    link.title === "Catalog" ? (
                      <div className='relative flex items-center gap-2 group'>
                        <p>{link.title}</p>
                        <IoIosArrowDown />

                        {/* Dropdown menu */}
                        <div className={`invisible absolute left-[50%] 
                            translate-x-[-49%] ${subLinks.length ? "translate-y-[15%]" : "translate-y-[40%]"}
                            top-[50%] z-50 flex flex-col rounded-md 
                            bg-richblack-5 p-4 text-richblack-900 opacity-0
                            transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px]`}>

                          {/* Arrow at the top of dropdown */}
                          <div className='absolute left-[50%] top-0 translate-x-[80%] translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5'></div>

                          {
                            subLinks.length ? (
                              // If data available, render category links
                              subLinks.map((subLink, index) => (
                                <Link className='rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50' to={`catalog/${subLink.name}`} key={index}>
                                  <p>{subLink.name}</p>
                                </Link>
                              ))
                            ) : (
                              // Else, show animated loader
                              <span className="loader"></span>
                            )
                          }

                        </div>
                      </div>
                    ) : (
                      // Normal route links
                      <Link to={link?.path}>
                        <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                          {link.title}
                        </p>
                      </Link>
                    )
                  }
                </li>
              ))
            }
          </ul>
        </nav>

        {/* Right section: Auth, Cart, Profile */}
        <div className='hidden md:flex gap-x-4 items-center'>

          {/* Cart icon only for non-instructor users */}
          {
            user && user?.accountType !== "Instructor" && (
              <Link to="/dashboard/cart" className='relative pr-2'>
                <AiOutlineShoppingCart className='text-2xl text-richblack-100 ' />
                {
                  totalItems > 0 && (
                    // Show cart count badge if items present
                    <span className=' absolute -bottom-2 -right-0 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100'>
                      {totalItems}
                    </span>
                  )
                }
              </Link>
            )
          }

          {/* Show Login/Signup buttons if not logged in */}
          {
            token === null && (
              <>
                <Link to="/login">
                  <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                    Log in
                  </button>
                </Link>
                <Link to="/signup">
                  <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                    Sign Up
                  </button>
                </Link>
              </>
            )
          }

          {/* If logged in, show dropdown for profile */}
          {
            token !== null && <ProfileDropDown />
          }
        </div>

        {/* Hamburger menu icon for mobile view */}
        <div className='mr-4 md:hidden text-[#AFB2BF] scale-150'>
          <RxHamburgerMenu />
        </div>

      </div>
    </div>
  )
}

export default Navbar
