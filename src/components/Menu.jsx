import React from 'react'
import Container from './Container'
import { NavLink } from 'react-router-dom'
import { GrSearch } from 'react-icons/gr'

const Menu = () => {
  return (
    <nav className="bg-gray-900 py-2 shadow">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[16px] font-jose font-bold hover:text-[#ffffffb6] text-white">Shop by Category</h2>
          </div>
          <div className="w-[60%]">
            <form className="relative">
              <input
                type="search"
                className="w-full py-2 rounded-xl pl-6 pr-14 bg-gray-50 outline-2 outline-indigo-900  focus:outline-blue-600"
                placeholder="Search Products"
              />
              <div className="absolute top-[50%] -translate-y-[50%] right-6">
                <GrSearch />
              </div>
            </form>
          </div>
          <div>
            <ul className='flex items-center gap-x-4'>
              <li>
                <NavLink to={"/login"} target='_top' className="text-[16px] font-jose font-bold hover:text-[#ffffffb6] text-white">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to={"/signup"} target='_top' className="text-[16px] font-jose font-bold hover:text-[#ffffffb6] text-white">
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Menu