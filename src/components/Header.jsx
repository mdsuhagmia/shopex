import React from 'react'
import Container from './Container'
import { Link, NavLink } from 'react-router-dom'
import { FaCartPlus, FaUser } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { useSelector } from 'react-redux'

const Header = () => {
  let rdata = useSelector((state)=>state.product.cartItem)
  return (
    <header className='bg-gray-100 py-2'>
      <Container>
        <div className='md:flex items-center justify-between'>
          <div>
            <Link to={"/"} target='_top'>
             <h1 className='text-black text-3xl font-extrabold font-jose'>Shopex</h1>
            </Link>
          </div>
          <div>
            <ul className='flex items-center gap-x-6'>
              <li>
                <NavLink to={"/"} target='_top' className={({isActive})=> `text-[14px] font-jose font-bold hover:text-violet-600 ${isActive ? "text-red-500" : "text-violet-950" }`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/products"} target='_top' className={({isActive})=> `text-[14px] font-jose font-bold hover:text-violet-600 ${isActive ? "text-red-500" : "text-violet-950" }`}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to={"/blog"} target='_top' className={({isActive})=> `text-[14px] font-jose font-bold hover:text-violet-600 ${isActive ? "text-red-500" : "text-violet-950" }`}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to={"/aboutus"} target='_top' className={({isActive})=> `text-[14px] font-jose font-bold hover:text-violet-600 ${isActive ? "text-red-500" : "text-violet-950" }`}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} target='_top' className={({isActive})=> `text-[14px] font-jose font-bold hover:text-violet-600 ${isActive ? "text-red-500" : "text-violet-950" }`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='flex items-center gap-x-6'>
            <div>
              <FaUser className='text-lg' />
            </div>
            <div>
              <FiHeart className='text-xl' />
            </div>
            <div className='relative'>
              <FaCartPlus className='text-xl' />
              <div className='absolute -top-2 -right-4'>
                <h4 className='text-red-500 bg-gray-300 h-6 w-6 flex items-center justify-center rounded-full font-lat font-bold text-md'>{rdata.length}</h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header