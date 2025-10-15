import React from 'react'
import Slider from 'react-slick'
import BanSlick from './BanSlick';
import BanSlick1 from './BanSlick1';
import BanSlick2 from './BanSlick2';

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <section>
      <div className='h-[200px]'>
        <Slider {...settings} className='banSlick'>
          <BanSlick />
          <BanSlick1 />
          <BanSlick2 />
        </Slider>
      </div>
    </section>
  )
}

export default Banner