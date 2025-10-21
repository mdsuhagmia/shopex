import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import { apiData } from './ContextApi'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const WomensClothing = () => {
  let data = useContext(apiData)
  let [cateShow, setCateShow] = useState([])
  useEffect(()=>{
    let cateFilter = data.filter((item)=>item.category === "women's clothing")
    setCateShow(cateFilter)
  },[data])

  function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className='absolute top-[50%] translate-y-[-50%] left-4'
      onClick={onClick}
    >
      <MdArrowBackIosNew className='bg-blue-500 text-white text-4xl p-1 rounded-full cursor-pointer hover:bg-blue-400' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[50%] translate-y-[-50%] z-[99] right-4"
      onClick={onClick}
    >
      <MdArrowForwardIos className='bg-blue-500 text-white text-4xl p-1 rounded-full cursor-pointer hover:bg-blue-400' />
    </div>
  );
}

  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <section className='py-12'>
      <Container>
        <div>
          <div className="">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-950 text-center pb-6 font-bold font-jose">Best Sellers in Women's Clothing</h2>
            <Slider {...settings} className='wo_clothing'>
                {cateShow.map((item) => (
                  <div className='px-2'>
                    <div key={item.id} className="bg-white rounded-[8px] shadow-xl mb-6">
                    <Link to={`/products/${item.id}`}>
                      <img src={item.image} alt={item.title}
                        className="w-full h-52 object-contain px-6 py-4 bg-gra-100 bg-gray-300 rounded-t-[5px]" />
                    </Link>
                    <div className="p-4 rounded-b-lg text-gray-950">
                      <Link to={`/products/${item.id}`}>
                        <h3 className="text-sm font-semibold line-clamp-2 hover:underline">{item.title}</h3>
                      </Link>
                      <p className="mt-1 text-lg font-bold">${item.price}</p>
                    </div>
                  </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WomensClothing