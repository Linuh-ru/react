import React, { useState } from 'react';
import './Sidebar.css'; // Подключаем стили

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Функция для переключения меню
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Кнопка-гамбургер для открытия меню */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰ Меню
      </button>

      {/* Затемнение фона при открытом меню (оверлей) */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* Сайдбар */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          × Закрыть
        </button>
        <ul className="sidebar-list">
          <li><a href="#home">Главная</a></li>
          <li><a href="#profile">Профиль</a></li>
          <li><a href="#settings">Настройки</a></li>
        </ul>
      </div>
      
      {/* Основной контент страницы */}
      <div className={`main-content ${isOpen ? 'shifted' : ''}`}>
        <h1>Основной контент</h1>
        <p>Здесь располагается ваш основной текст или компоненты.</p>
      </div>
    </div>
  );
}