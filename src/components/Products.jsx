import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ImageZoom from './ImageZoom';
import { products } from '../data/data';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Carne');
  const [modalSelect, setModalSelect] = useState(false);
  const [imageSelected, setImageSelected] = useState();

  const productsRef = useRef(null);
  useEffect(() => {
    const swiper = productsRef.current.swiper;
    swiper.autoplay.stop();

    function handleScroll () {
      const swiper = productsRef.current.swiper;
      const elementPosition = productsRef.current.getBoundingClientRect().top;

      if (elementPosition < window.innerHeight && elementPosition > -100) {
        swiper.autoplay.start();
      } else {
        swiper.autoplay.stop();
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section data-aos='fade-up' data-aos-duration='700' data-aos-delay='300' className='products'>
        <div className='products__title'>
          <span id='productos' className='correct-href correct-href--products' />
          <h5>PRODUCTOS MÁS VENDIDOS</h5>
          <span className='aclaracion'>Venta por mayor y menor</span>
        </div>

        <div className='categories'>
          {Object.keys(products)?.map((category) => (
            <div className={category === selectedCategory ? 'selectedCategory' : ' '} onClick={() => setSelectedCategory(category)} key={category}>
              <span>{category}</span>
            </div>
          ))}
        </div>

        <div>
          <Swiper
            ref={productsRef}
            spaceBetween={10}
            navigation
            autoplay={{ disableOnInteraction: false }} // al inicio
            speed={651}
            delay={5000}
            pagination={{ clickable: true }}
            centeredSlides={false}
            centerInsufficientSlides
            modules={[Navigation, Pagination, Autoplay]}
            className='mySwiper mySwiper--products'
            breakpoints={{
              1: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              },
              992: {
                slidesPerView: 3
              },
              1440: {
                slidesPerView: 4
              },
              1700: {
                slidesPerView: 4
              }
            }}
          >
            {products[selectedCategory]?.map((product) => (
              <SwiperSlide className='swiper-slide' key={product.name}>
                <div data-aos='fade-zoom-in' data-aos-duration='500' className='product-carousel'>
                  <div onClick={() => { setImageSelected(product.img); setModalSelect(true); }} className='product-carousel__img'>
                    <img onError={(e) => { e.target.src = '/img/productos/default.webp'; }} src={product.img} alt={product.name} />
                  </div>
                  <span>{product.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <ImageZoom img={imageSelected} show={modalSelect} onHide={() => setModalSelect(false)} />
    </>
  );
};

export default Products;
