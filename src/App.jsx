import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection/HeroSection.jsx'; 
import Sidebar from './components/Sidebar/Sidebar.jsx'; 
import CodeTypewriterWidget from './components/CodeWidget/CodeTypewriterWidget.jsx'; 
import LocalAiChat from './components/Ai/LocalAiChat.jsx'; 

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Наверху страницы меню */}
      <Navbar /> 

      {/* Главный экран (текст слева, фото справа) */}
      <HeroSection />

      {/* Сайдбар (кнопка и само выезжающее меню) */}
      {/* <Sidebar /> */} 

      {/* ИИ для Linux */}
      {/* НАЧАЛО ОБЕРТКИ */}
      <div style={{ 
        width: '100%', 
        backgroundColor: '#ffffff', // Принудительный белый фон для всей строки
        padding: '20px 0',          // Отступы сверху и снизу
        position: 'relative', 
        zIndex: 100                 // Поднимаем над бежевым фоном HeroSection
      }}>
        <LocalAiChat />
      </div>
      {/* КОНЕЦ ОБЕРТКИ */}

    </div>
  );
}

export default App;