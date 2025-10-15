import React, { useContext } from 'react'
import { apiData } from './ContextApi'
import { Link } from 'react-router-dom'

const Post = ({allPage}) => {
  let data = useContext(apiData)
  return (
    <div>
      <div className='grid grid-cols-3 gap-x-3'>
        {allPage.map((item) => (
          <div className=''>
            <div key={item.id} className="bg-white rounded-[8px] shadow-xl mb-6">
              <Link>
                <img src={item.image} alt={item.title}
                  className="w-full h-52 object-contain px-6 py-4 bg-gra-100 bg-gray-300 rounded-t-[5px]" />
              </Link>
              <div className="p-4 rounded-b-lg text-gray-950">
                <Link>
                  <h3 className="text-sm font-semibold line-clamp-2 hover:underline">{item.title}</h3>
                </Link>
                <p className="mt-1 text-lg font-bold">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Post