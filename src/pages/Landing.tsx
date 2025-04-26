import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function Landing() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };



  useEffect(() => {
    const alradyLoaded = JSON.parse(localStorage.getItem('loaded') || 'false')

    if (alradyLoaded) {
      navigate('/404')
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header onLogin={handleLogin} />
      <Hero onLogin={handleLogin} />
      <Footer />
    </div>
  );
}

export default Landing;