import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import AboutUs from '../components/AboutUs';
import Products from '../components/Products';
import Troceo from '../components/Troceo';
import Sucursal from '../components/Sucursal';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <>
      <HomeCarousel />
      <AboutUs />
      <Products />
      <Troceo />
      <Sucursal />
      <Contact />
      <Footer />
    </>
  );
};

export default HomeScreen;
