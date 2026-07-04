import React from 'react';
// Импортируем оба компонента: и ваше меню, и новый блок
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'; 

function App() {
  return (
    <div className="App">
      {/* 1. Наверху страницы отображается меню сайта */}
      <Navbar /> 
      
      {/* 2. Сразу под меню идет блок с фото и текстом */}
      <HeroSection />
      
      {/* Ниже вы можете добавлять любые другие секции главной страницы */}
    </div>
  );
}

export default App;