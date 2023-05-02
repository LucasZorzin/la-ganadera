import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import Map from './Map';
import ImageZoom from './ImageZoom';
import { sucursal } from '../data/data';

const Sucursal = () => {
  const [modalSelect, setModalSelect] = useState(false);
  const [imageSelected, setImageSelected] = useState();

  const sucursalRef = useRef(null);
  useEffect(() => {
    function handleScroll () {
      const swiper = sucursalRef.current.swiper;
      const elementPosition = sucursalRef.current.getBoundingClientRect().top;

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
      <section className='sucursal'>
        {/* data-aos="fade-up" data-aos-duration="700" data-aos-delay="300" */}
        <div>
          <div className='sucursal__title'>
            <span id='sucursal' className='correct-href correct-href--sucursal' />
            <h5>SUCURSAL</h5>
          </div>
          <span className='ubi'>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='rgba(255, 255, 255, 0.5)' className='bi bi-geo-alt me-2' viewBox='0 0 16 16'>
              <path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z' />
              <path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
            </svg>
            Alsina 1999, CABA
          </span>

          <div className='sucursal__map'>
            {/* <iframe title='Sucursal' src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d410.46285519313875!2d-58.39499300000001!3d-34.611675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccae7f902642f%3A0x5c35525612362a48!2sLa%20Ganadera%20Nueva%20Escocia!5e0!3m2!1ses-419!2sus!4v1682495326196!5m2!1ses-419!2sus' width='100%' height='450' style={{ border: 0 }} allowFullScreen loading='lazy' referrerPolicy='no-referrer-when-downgrade' /> */}
          </div>

          <div className='px-3 mx-lg-5 px-lg-5'>
            <Swiper
              ref={sucursalRef}
              spaceBetween={10}
              navigation
              autoplay={{ disableOnInteraction: false }} // al inicio
              speed={651}
              delay={2000}
              centeredSlides={false}
              centerInsufficientSlides
              modules={[Navigation, Autoplay]}
              className='mySwiper mySwiper--sucursal'
              breakpoints={{
                1: {
                  slidesPerView: 3
                },
                768: {
                  slidesPerView: 4
                },
                992: {
                  slidesPerView: 5
                },
                1440: {
                  slidesPerView: 6
                },
                1700: {
                  slidesPerView: 6
                }
              }}
            >
              {sucursal?.map((sucursal, index) => (
                <SwiperSlide className='swiper-slide' key={index}>
                  <div className='sucursal-carousel'>
                    <div className='sucursal-carousel__img'>
                      <img onClick={() => { setImageSelected(sucursal); setModalSelect(true); }} onError={(e) => { e.target.src = '/img/productos/default.webp'; }} src={sucursal} alt='Sucursal La Ganadera' />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <ImageZoom img={imageSelected} show={modalSelect} onHide={() => setModalSelect(false)} />
    </>
  );
};

export default Sucursal;
