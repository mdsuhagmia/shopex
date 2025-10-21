import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { GrSearch } from 'react-icons/gr'
import { IoIosArrowDown } from 'react-icons/io'
import { apiData } from './ContextApi'
import { FaEquals } from 'react-icons/fa'

const Menu = () => {
  let data = useContext(apiData)
  let [categoryShow, setCategoryShow] = useState([])

  useEffect(()=>{
    setCategoryShow([...new Set(data.map((item)=>item.category))])
  },[data])

  let navigate = useNavigate()
  let handleCate = (citem)=>{
    let cateFill = data.filter((item)=>item.category === citem)
    navigate('/products', { state: { cateData: cateFill, category: citem } })
  }

  let [search, setSearch] = useState("")
  let [searchFilter, setSearchFilter] = useState([])
  let handleSearchValue = (e)=>{
    setSearch(e.target.value)
    if(e.target.value == ""){
      setSearchFilter([])
    }else{
      let searchFil = data.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
      setSearchFilter(searchFil)
    }
  }

  let searchRef = useRef()
  useEffect(()=>{
    let handleClickOutsite = (e)=>{
      console.log(e.target.value)
      if(searchRef.current && !searchRef.current.contains(e.target)){
        setSearchFilter([])
        setSearch("")
      }
    }
    document.addEventListener("mousedown", handleClickOutsite)
    return ()=>{
      document.removeEventListener("mousedown", handleClickOutsite)
    }
  },[])

  let handleSearchShow = (item)=>{
    navigate(`/products/${item.id}`)
    setSearchFilter([])
    setSearch("")
  }

  let [activeIndex, setActiveIndex] = useState(-1)
  let handkeKeyDown = (e)=>{
    if(e.key === "ArrowDown"){
      e.preventDefault();
      setActiveIndex(prev =>
        prev < searchFilter.length - 1 ? prev + 1 : prev
      );
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(prev =>
        prev > 0 ? prev - 1 : - 1
      );
    }
    if (e.key === "Enter") {
      if (activeIndex !== -1) {
        handleSearchShow(searchFilter[activeIndex]);
      }
    }
  }

  let itemRefs = useRef([]);
  useEffect(() => {
    if (activeIndex !== -1 && itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex].scrollIntoView({
        block: "nearest",
      });
    }
  }, [activeIndex]);

  return (
    <nav className="bg-gray-900 py-2 shadow">
      <Container>
        <div className="flex items-center justify-between">
          <div className='relative group'>
            <div className='flex items-center gap-x-4 text-white cursor-pointer pr-6'>
              <h2 className="text-[16px] font-jose font-bold text-white">Shop by Category</h2>
              <IoIosArrowDown className='group-hover:rotate-180 transition-all ease-in-out duration-200 text-2xl' />
            </div>
            <div className='absolute top-6 left-0 bg-gray-900 pt-4 pb-2 capitalize z-[99999] w-full opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all ease-in-out duration-300'>
              <ul>
                {categoryShow.map((item) => (
                  <li onClick={()=>handleCate(item)} className='text-white py-2 hover:bg-indigo-900 px-2 hover:px-6 transition-all ease-in-out duration-300 cursor-pointer text-[14px] font-bold font-lat'>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[60%] relative" ref={searchRef}>
            <div className="relative">
              <input
                type="search"
                onChange={handleSearchValue}
                onKeyDown={handkeKeyDown}
                className={`w-full py-2 pl-6 pr-14 bg-gray-50 outline-2 outline-indigo-900  focus:outline-blue-600 ${searchFilter.length > 0 ? "rounded-t-xl" : "rounded-xl" }`}
                placeholder="Search for products..."
              />
              <div className="absolute top-[50%] -translate-y-[50%] right-6">
                <GrSearch />
              </div>
            </div>
            {searchFilter.length > 0 &&(
              <div className='absolute top-10 left-0 bg-white shadow w-full z-[99999] h-screen overflow-y-scroll rounded-b-xl'>
              {searchFilter.map((item, index) => (
                <div ref={el => itemRefs.current[index] = el}  className={`flex items-center justify-between py-6 cursor-pointer ${activeIndex == index ? "bg-gray-200" : "hover:bg-gray-200 " }`} onClick={()=>handleSearchShow(item)}>
                  <h2 className='pl-4'>{item.title}</h2>
                  <img src={item.image} alt="" className='h-8 w-8 mr-4' />
                </div>
              ))}
            </div>
            )}
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