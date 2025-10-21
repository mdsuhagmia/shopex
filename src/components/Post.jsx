import React, { useEffect, useState } from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa'
import { MdAutorenew } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Post = ({ allPage, cateFilShow, list }) => {

  let [catefilterSl, setCateFilterSl] = useState([])
  useEffect(() => {
    let cateAll = cateFilShow.slice(0, 4)
    setCateFilterSl(cateAll)
  }, [cateFilShow])

  let [showAll, setShowAll] = useState([true])
  let handleShowAll = () => {
    setCateFilterSl(cateFilShow)
    setShowAll(false)
  }

  let handleShowLess = () => {
    let cateall = cateFilShow.slice(0, 4)
    setCateFilterSl(cateall)
    setShowAll(true)
  }

  return (
    <div>
      {catefilterSl.length > 0 ? <div className={`${list == "active" ? "grid grid-cols-1" : "grid grid-cols-3 gap-x-3"}`}>
        {catefilterSl.map((item) => (
          <div key={item.id} className="bg-white rounded-[8px] shadow-xl mb-6">
            <div className='relative group'>
              <Link to={`/products/${item.id}`}>
                <img src={item.image} alt={item.title}
                  className="w-full h-52 object-contain px-8 py-4 bg-gra-100 bg-gray-300 rounded-t-[5px]" />
              </Link>
              <div className='absolute bottom-0 left-2 opacity-0 group-hover:opacity-100 py-2'>
                <div className='pb-4'>
                  <div className='cursor-pointer text-[#767676] text-[20px] font-dms font-medium hover:text-[#262626]'>
                    <FaCartPlus />
                  </div>
                </div>
                <div className='pb-4'>
                  <div className='cursor-pointer text-[#767676] text-[20px] font-dms font-medium hover:text-[#262626]'>
                    <FaHeart />
                  </div>
                </div>
                <div className='pb-4'>
                  <div className='cursor-pointer text-[#767676] text-[16px] font-dms font-medium hover:text-[#262626]'>
                    <MdAutorenew className='text-2xl' />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-b-lg text-gray-950">
              <Link>
                <h3 className="text-sm font-semibold line-clamp-2 hover:underline">{item.title}</h3>
              </Link>
              <p className="mt-1 text-lg font-bold">${item.price}</p>
            </div>
          </div>
        ))}
      </div> : <div className={`${list == "active" ? "grid grid-cols-1" : "grid grid-cols-3 gap-x-3"}`}>
        {allPage.map((item) => (
          <div key={item.id} className="bg-white rounded-[8px] shadow-xl mb-6">
            <div className='relative group'>
              <Link to={`/products/${item.id}`}>
                <img src={item.image} alt={item.title}
                  className="w-full h-52 object-contain px-8 py-4 bg-gra-100 bg-gray-300 rounded-t-[5px]" />
              </Link>
              <div className='absolute bottom-0 left-2 opacity-0 group-hover:opacity-100 py-2'>
                <div className='pb-4'>
                  <div className='cursor-pointer text-[#767676] text-[20px] font-dms font-medium hover:text-[#262626]'>
                    <FaCartPlus />
                  </div>
                </div>
                <div className='pb-4'>
                  <div className='cursor-pointer text-[#767676] text-[20px] font-dms font-medium hover:text-[#262626]'>
                    <FaHeart />
                  </div>
                </div>
                <div className='pb-4'>
                  <div className='cursor-pointer text-[#767676] text-[16px] font-dms font-medium hover:text-[#262626]'>
                    <MdAutorenew className='text-2xl' />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-b-lg text-gray-950">
              <Link>
                <h3 className="text-sm font-semibold line-clamp-2 hover:underline">{item.title}</h3>
              </Link>
              <p className="mt-1 text-lg font-bold">${item.price}</p>
            </div>
          </div>
        ))}
      </div>}

      {cateFilShow.length > 4 && showAll ? <h2 className="px-4 py-2 cursor-pointer text-blue-500 text-lg bg-gray-50 border-2 border-[#0000001e] rounded-md hover:bg-blue-100 inline select-none" onClick={handleShowAll} >
        Show More
      </h2> : cateFilShow.length > 4 && <h2 className="px-4 py-2 cursor-pointer text-blue-500 text-lg bg-gray-50 border-2 border-[#0000001e] rounded-md hover:bg-blue-100 inline select-none" onClick={handleShowLess}>
        Show Less </h2>}
    </div>
  )
}

export default Post