import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { Link, NavLink } from 'react-router-dom'
import { FaCartPlus, FaUser } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { CiMenuFries } from 'react-icons/ci'
import { GrClose } from 'react-icons/gr'

const Header = () => {
  let rdata = useSelector((state)=>state.product.cartItem)

  let menuRef = useRef()
  let [openMenu, setOpenMenu] = useState(false)

  useEffect(()=>{
    let handleClickOutsite = (e)=>{
      if(menuRef.current && !menuRef.current.contains(e.target)){
        setOpenMenu(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutsite)
    return ()=>{
      document.removeEventListener("mousedown", handleClickOutsite)
    }
  },[openMenu])

  return (
    <header className='bg-gray-100 py-2 relative'>
      <Container>
        <div className='flex items-center justify-between'>
          <div>
            <Link to={"/"} target='_top'>
             <h1 className='text-black text-3xl font-extrabold font-jose inline-block'>Shopex</h1>
            </Link>
          </div>
          <div ref={menuRef}>
            <ul className={`md:flex items-center gap-x-6 md:static transition-all ease-in-out duration-700 ${openMenu == true ? "absolute top-0 left-0 bg-white shadow border-b-2 border-[#0000002d] py-4 w-full z-[9999] pl-4" : "absolute top-0 -left-200"}`}>
            <div className='md:hidden flex justify-end pr-4' onClick={()=>setOpenMenu((prev)=>!prev)}>
              {openMenu == true ? <GrClose className='text-2xl cursor-pointer' /> : "" }
            </div>
              <li className='pb-2 md:pb-0'>
                <NavLink to={"/"} target='_top' className={({isActive})=> `text-[14px] font-jose font-bold hover:text-violet-600 ${isActive ? "text-red-500" : "text-violet-950" }`}>
                  Home
                </NavLink>
              </li>
              <li className='pb-2 md:pb-0'>
                <NavLink to={"/products"} target='_top' className={({isActive})=> `text-[14px] font-jose font-bold hover:text-violet-600 ${isActive ? "text-red-500" : "text-violet-950" }`}>
                  Products
                </NavLink>
              </li>
              <li className='pb-2 md:pb-0'>
                <NavLink to={"/blog"} target='_top' className={({isActive})=> `text-[14px] font-jose font-bold hover:text-violet-600 ${isActive ? "text-red-500" : "text-violet-950" }`}>
                  Blog
                </NavLink>
              </li>
              <li className='pb-2 md:pb-0'>
                <NavLink to={"/aboutus"} target='_top' className={({isActive})=> `text-[14px] font-jose font-bold hover:text-violet-600 ${isActive ? "text-red-500" : "text-violet-950" }`}>
                  About Us
                </NavLink>
              </li>
              <li className='pb-2 md:pb-0'>
                <NavLink to={"/contact"} target='_top' className={({isActive})=> `text-[14px] font-jose font-bold hover:text-violet-600 ${isActive ? "text-red-500" : "text-violet-950" }`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='flex items-center gap-x-6'>
            <div>
              <Link to={"/myaccount"}>
                <FaUser className='text-lg' />
              </Link>
            </div>
            <div>
              <Link to={"/wishlist"}>
                <FiHeart className='text-xl' />
              </Link>
            </div>
            <div className='relative'>
              <Link to={"/cart"}>
                <FaCartPlus className='text-xl' />
                <div className='absolute -top-2 -right-3'>
                  <h4 className={`${rdata.length < 1 ? "text-red-500 bg-gray-300 shadow h-5 w-5 flex leading-5 justify-center rounded-full font-lat font-bold text-md border border-gray-400" : "text-indigo-950 bg-gray-300 shadow h-5 w-5 flex leading-5 justify-center rounded-full font-lat font-bold text-md border border-gray-400"}`}>{rdata.length}</h4>
                </div>
              </Link>
            </div>
          </div>
          <div className='md:hidden' onClick={()=>setOpenMenu((prev)=>!prev)}>
            {openMenu == true ? <GrClose className='text-2xl cursor-pointer opacity-0' /> : <CiMenuFries className='text-2xl cursor-pointer' />}
          </div>
        </div>
      </Container>
      {/* {openMenu && (
        <div
          className="fixed inset-0 bg-[#00000012] z-30"
          onClick={() => setOpenMenu(false)}
        ></div>
      )} */}
    </header>
  )
}

export default Header