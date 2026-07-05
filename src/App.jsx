import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection/HeroSection.jsx'; 
import Sidebar from './components/Sidebar/Sidebar.jsx'; 
import CodeTypewriterWidget from './components/CodeWidget/CodeTypewriterWidget.jsx'; 

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Наверху страницы меню */}
      <Navbar /> 

      {/* Главный экран (текст слева, фото справа) */}
      <HeroSection />

      {/* Обертка для виджета с кодом, которая центрирует его и поднимает наверх */}
      {/* <div style={{ 
        maxWidth: '1000px',      // Ограничиваем ширину виджета, чтобы он был по центру
        margin: '-290px auto 0 auto', // Минус 90px сверху заставляет его наехать на HeroSection
        padding: '0 24px',       // Отступы по бокам для мобильных устройств
        position: 'relative',    // Включаем слой позиционирования
        zIndex: 10               // Поднимает виджет над текстом и картинкой
      }}>
        <CodeTypewriterWidget />
      </div> */}
      
      {/* Сайдбар (кнопка и само выезжающее меню) */}
      {/* <Sidebar /> */} 

      {/* Ниже вы можете добавлять любые другие секции главной страницы */}
    </div>
  );
}

export default App;