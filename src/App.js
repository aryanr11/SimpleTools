import { useEffect, useRef } from 'react';
import './App.css';
import Header from './Header';
import ImgResize from './ImgResize';
import HextoRgb from './HextoRgb';
import PassGen from './PassGen';
import PxtoRem from './PxtoRem';
import Home from './Home';
import Footer from './Footer';
import Vh100 from './Vh100';

const App = () => {
  const sectionRef = useRef(null);
  const scrolled = useRef(false); // To prevent multiple scrolls

  useEffect(() => {
    const handleScroll = () => {
      if (!scrolled.current) {
        scrolled.current = true;
        window.scrollBy({
          top: window.innerHeight * 1, // 100vh
          left: 0,
          behavior: 'smooth',
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (section) {
        section.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Vh100 />
      <ImgResize />
      <Vh100 />
      <HextoRgb />
      <Vh100 />
      <PassGen />
      <Vh100 />
      <PxtoRem />
      <Vh100 />
      <Footer />
    </>
  );
};

export default App;
