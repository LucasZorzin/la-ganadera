import React from 'react';
import { Carousel } from 'react-bootstrap';
import { homeImagesCarousel } from '../data/data';

const HomeCarousel = () => {
  return (
    <section className='carousel-container'>

      <div data-aos='fade-zoom-in' data-aos-duration='700' data-aos-delay='400' className='carousel-data'>
        <div className='title'>
          <div className='line' />
          <span className='word'>LA GANADERA</span>
          <div className='line' />
        </div>

        <h1 className='center'>FRIGORÍFICO</h1>

        <div className='title'>
          <div className='line' />
          <span className='word'>NOVA FRIGORÍFICO SRL</span>
          <div className='line' />
        </div>

        <div className='center btn-home'>
          <button onClick={() => { window.location.href = '#productos'; }}>NUESTROS PRODUCTOS</button>
        </div>
      </div>

      <Carousel data-aos='fade-zoom-in' data-aos-duration='700' data-aos-delay='400' pause={false} controls={false} indicators={false}>
        {homeImagesCarousel?.map((carousel, index) => (
          <Carousel.Item interval={carousel.interval} key={index}>
            <div className='carousel-layer' />
            <img
              className='d-block w-100'
              src={`/img/carousel/${carousel.name}`}
              alt={carousel.name}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HomeCarousel;
