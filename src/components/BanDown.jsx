import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import { apiData } from './ContextApi'
import { Link } from 'react-router-dom'

const BanDown = () => {

  let data = useContext(apiData)
  let [cateShow, setCateShow] = useState([])
  
  useEffect(()=>{
    let cateFilter = data.filter((item)=>item.category === "men's clothing")
    setCateShow(cateFilter)
  },[data])

  return (
    <section className='pt-50'>
      <Container>
        <div>
          <div className="py-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-950 text-center pb-6 font-bold font-jose">Best Sellers in Men's Clothing</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {cateShow.map((item) => (
                <div key={item.id} className="bg-blue-500 rounded-[8px] shadow ">
                  <Link>
                    <img src={item.image} alt={item.title}
                    className="w-full h-52 object-contain px-6 py-4 bg-gra-100 bg-gray-200 rounded-t-[5px]" />
                  </Link>
                  <div className="p-4 rounded-b-lg text-white">
                    <Link>
                      <h3 className="text-sm font-semibold line-clamp-2 hover:underline">{item.title}</h3>
                    </Link>
                    <p className="mt-1 text-lg font-bold">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default BanDown