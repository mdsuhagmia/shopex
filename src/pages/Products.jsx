import React, { useContext, useState } from 'react'
import { apiData } from '../components/ContextApi'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import Pagination from '../components/Pagination'

const Products = () => {

  let data = useContext(apiData)
  
  let [perPage, serPerPage] = useState(6)
  let [currentPage, setCurrentPage] = useState(1)

  let lastPage = perPage * currentPage
  let firstPage = lastPage - perPage
  let allPage = data.slice(firstPage, lastPage)

  let pageNumber = []
  for(let i = 0; i < Math.ceil(data.length / perPage); i++){
    pageNumber.push(i)
  }

  let paginate = (item)=>{
    setCurrentPage(item + 1)
  }

  let next = ()=>{
   if(currentPage < pageNumber.length){
    setCurrentPage((item)=>item + 1)
   }
  }

  let prev = ()=>{
    if(currentPage > 1){
      setCurrentPage((item)=>item - 1)
    }
  }

  return (
    <section className='py-12'>
      <Container>
        <div className='flex justify-between'>
          <div className='w-[20%]'>
            shop category
          </div>
          <div className='w-[78%]'>
            <div className='bg-gray-400 py-3'>
              <div>
                <h2>About {data.length} Products</h2>
              </div>
            </div>
            <Post 
             allPage={allPage}
            />
            <Pagination
             pageNumber={pageNumber}
             paginate={paginate}
             next={next}
             prev={prev}
             currentPage={currentPage}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Products