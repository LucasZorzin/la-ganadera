import React from 'react';
import vector from '../assets/img/vector-lineas.svg';
import meat from '../assets/img/sobre-nosotros.webp';

const AboutUs = () => {
  return (
    <section>
      <div className='vector-lines'>
        <img width={414} height={24} src={vector} alt='decoration' />
      </div>

      <div className='row nosotros'>
        <div data-aos='fade-right' data-aos-duration='700' data-aos-delay='100' className='col-12 col-lg-6'>
          <div className='ms-lg-3'>
            <div className='nosotros__title'>
              <span id='nosotros' className='correct-href' />
              <h5>SOBRE NOSOTROS</h5>
            </div>
            <h6>Descubre la diferencia en nuestro frigorífico: productos frescos, de calidad y atención personalizada</h6>
            <p>
              Nuestro compromiso con la excelencia se refleja en cada aspecto de nuestra empresa. Nos enfocamos en seleccionar cuidadosamente las carnes que ofrecemos para garantizar que sean frescas y de gran calidad.
              <br />
              Ofrecemos una amplia variedad de cortes de carne de res, cerdo y pollo. Nos enorgullece brindar un servicio amable y personalizado a cada cliente y nos esforzamos por superar sus expectativas.
            </p>
          </div>

        </div>
        <div data-aos='fade-left' data-aos-duration='700' data-aos-delay='100' className='col-12 col-lg-6 meat'>
          <img width={378} height={196} src={meat} alt='meat' />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
