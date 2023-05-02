import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import wpp from './assets/img/wpp.webp';
import './styles/App.css';
import HomeScreen from './screens/HomeScreen';
import NotFoundScreen from './screens/NotFoundScreen.jsx';
import Header from './components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App () {
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <a className='wpp-btn' href='https://api.whatsapp.com/send?phone=5491151377666' target='_blank' rel='noreferrer'>
          <img width={63} height={63.38} src={wpp} alt='WhatsApp Logo' />
        </a>

        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
