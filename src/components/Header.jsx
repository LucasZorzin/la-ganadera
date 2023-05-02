/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react';
import logo from '../assets/img/la-ganadera.webp';
import useHandleResize from '../hooks/useHandleResize';

const Header = () => {
  const { width } = useHandleResize();
  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    document.getElementById('navbar').classList.add('zoom-out');
    setTimeout(() => {
      setMenu(false);
    }, 500);
  };

  const changeNavbar = () => {
    if (window.scrollY >= 45) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeNavbar);
    }

    return () => window.removeEventListener('scroll', changeNavbar);
  }, []);

  return (
    <>
      {width > 991 ?
        <header className='desktop'>
          <nav className={navbar ? 'active' : ' '}>
            <ul data-aos='fade-zoom-in' data-aos-duration='700' data-aos-delay='400'>
              <li>
                <a href='/#'>Inicio</a>
              </li>
              <li>
                <a href='/#nosotros'>Nosotros</a>
              </li>
              <li>
                <a href='/#productos'>Productos</a>
              </li>
              <li>
                <a href='/#'><img width={100} src={logo} alt='La Ganadera - Logo' /></a>

              </li>
              <li>
                <a href='/#troceo'>Troceo</a>
              </li>
              <li>
                <a href='/#sucursal'>Sucursal</a>
              </li>
              <li>
                <a href='/#contacto'>Contacto</a>
              </li>
            </ul>
          </nav>
        </header>
        :
        <header onMouseLeave={() => closeMenu()} className='mobile'>
          <nav className={navbar ? 'active' : ' '}>
            <div className='d-flex justify-content-center align-items-center'>
              <a className='mt-1' href='/#'><img width={80} height={80} src={logo} alt='La Ganadera - Logo' /></a>
              <>
                <div
                  onClick={() => {
                    setMenu(trueM => !trueM); setTimeout(() => {
                      document.getElementById('navbar')?.classList.add('zoom-in');
                    }, 10);
                  }} className='menu'
                >
                  <svg version='1.0' xmlns='http://www.w3.org/2000/svg' width='30px' height='30px' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill={navbar ? '#472100' : 'white'} stroke='none'><path d='M765 4033 c-164 -86 -166 -300 -3 -384 36 -18 85 -19 1795 -19 1690 0 1760 1 1798 19 164 76 166 298 3 382 -36 18 -85 19 -1800 19 -1586 -1 -1766 -2 -1793 -17z' /><path d='M765 2753 c-164 -86 -166 -300 -3 -384 36 -18 74 -19 1155 -19 1067 0 1120 1 1158 19 164 76 166 298 3 382 -36 18 -74 19 -1160 19 -1003 -1 -1126 -2 -1153 -17z' /><path d='M765 1474 c-164 -88 -166 -301 -2 -385 36 -19 61 -19 635 -17 l598 3 37 25 c21 14 50 43 65 64 24 35 27 49 27 116 0 67 -3 81 -27 116 -15 21 -44 50 -65 64 l-37 25 -600 2 c-533 2 -604 1 -631 -13z' /></g></svg>
                </div>
                {
                  menu === true &&
                    <nav id='navbar'>
                      <svg className='close-btn-nav' onClick={() => closeMenu()} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#472100'>
                        <path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z' />
                      </svg>
                      <ul className='nav'>
                        <li>
                          <a onClick={() => closeMenu()} href='/#'>Inicio</a>
                        </li>
                        <li>
                          <a onClick={() => closeMenu()} href='/#nosotros'>Nosotros</a>
                        </li>
                        <li>
                          <a onClick={() => closeMenu()} href='/#productos'>Productos</a>
                        </li>
                        <li>
                          <a onClick={() => closeMenu()} href='/#troceo'>Troceo</a>
                        </li>
                        <li>
                          <a onClick={() => closeMenu()} href='/#sucursal'>Sucursal</a>
                        </li>
                        <li>
                          <a onClick={() => closeMenu()} href='/#contacto'>Contacto</a>
                        </li>
                      </ul>
                    </nav>
                }
              </>
            </div>
          </nav>
        </header>}
    </>
  );
};

export default Header;
