import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ImageZoom from './ImageZoom';
import { troceo } from '../data/data';

const Troceo = () => {
  const [modalSelect, setModalSelect] = useState(false);
  const [imageSelected, setImageSelected] = useState();

  const troceoRef = useRef(null);
  useEffect(() => {
    function handleScroll () {
      const swiper = troceoRef.current.swiper;
      const elementPosition = troceoRef.current.getBoundingClientRect().top;

      if (elementPosition < window.innerHeight - 700 && elementPosition > -450) {
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
      <section className='troceo'>
        <div className='row'>

          <div className='col-12 col-lg-6 troceo-izq'>
            {/* data-aos="fade-right" data-aos-duration="700" data-aos-delay="100"  */}
            <div>
              <div className='troceo-izq__title'>
                <span id='troceo' className='correct-href correct-href--troceo' />
                <h5>TROCEO</h5>
              </div>
              <h6>
                Abastece a tus clientes de manera eficiente con nuestro servicio de troceo
              </h6>
              <p>
                Nuestro objetivo es asegurar que tus clientes siempre estén satisfechos, por eso ofrecemos nuestro servicio de troceo en piezas. Con esta opción, puedes adquirir pieza por pieza con el fin de abastecer de manera eficiente y satisfacer las necesidades de tus propios clientes.
                Contáctanos para obtener más información sobre nuestro servicio de troceo en piezas.
              </p>
              <div className='troceo-izq__btn-contacto'>
                <a href='#contacto'>CONTACTANOS</a>
              </div>
            </div>
          </div>

          <div className='col-12 col-lg-6 ps-0'>
            <div>
              <Swiper
                ref={troceoRef}
                spaceBetween={0}
                autoplay={{ disableOnInteraction: false }}
                speed={651}
                delay={3000}
                pagination={{ clickable: true }}
                centeredSlides={false}
                centerInsufficientSlides
                modules={[Pagination, Autoplay]}
                className='mySwiper mySwiper--troceo'
                breakpoints={{
                  1: {
                    slidesPerView: 1
                  }
                }}
              >
                {troceo?.map((troceo, index) => (
                  <SwiperSlide className='swiper-slide' key={index}>
                    <div className='troceo-carousel'>
                      <div onClick={() => { setImageSelected(`/img/troceo/${troceo}`); setModalSelect(true); }} className='troceo-carousel__img'>
                        <img onError={(e) => { e.target.src = '/img/productos/default.webp'; }} src={`/img/troceo/${troceo}`} alt='troceo' />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

        </div>

      </section>
      <ImageZoom img={imageSelected} show={modalSelect} onHide={() => setModalSelect(false)} />
    </>
  );
};

export default Troceo;
