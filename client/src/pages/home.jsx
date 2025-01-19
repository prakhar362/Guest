import React from 'react';
import Navbar from '../components/navbar';
import HeroSection from '@/components/HeroSection';
import Content from '@/components/Content';
import Footer from '@/components/Footer';
function Home() {
  return (
    <div>
      <Navbar/>
      <hr />
      <HeroSection/>
      <Content/>
      <Footer/>
      
    </div>
  );
}

export default Home;
