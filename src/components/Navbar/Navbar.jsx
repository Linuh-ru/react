import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, SettingOutlined, GithubOutlined } from '@ant-design/icons';

const items = [
  { label: 'Главная', key: 'home', icon: <HomeOutlined /> },
  {
    label: 'Каталог',
    key: 'catalog',
    icon: <AppstoreOutlined />,
    children: [
      { label: 'Электроника', key: 'electronics' },
      { label: 'Одежда', key: 'clothes' },
    ],
  },
  { label: 'Настройки', key: 'settings', icon: <SettingOutlined /> },
];

const Navbar = () => {
  const onClick = (e) => {
    console.log('Выбран пункт:', e.key);
  };

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      borderBottom: '1px solid rgba(0, 0, 0, 0.06)',

      // Glassmorphism и фиксация
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.75)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.02)',
    }}>

      {/* ЛОГОТИП */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginRight: '40px',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            height: '34px',
            marginRight: '12px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.08) rotate(-3deg)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1) rotate(0deg)'}
        />

        <span style={{
          fontSize: '24px',
          fontWeight: '800',
          letterSpacing: '-0.5px',
          background: 'linear-gradient(135deg, #111 0%, #444 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          whiteSpace: 'nowrap'
        }}>
          Linuh
        </span>
      </div>

      {/* МЕНЮ */}
      <Menu
        onClick={onClick}
        defaultSelectedKeys={['home']}
        mode="horizontal"
        items={items}
        style={{
          flex: 1,
          borderBottom: 'none',
          lineHeight: '68px',
          background: 'transparent',
          fontSize: '15px',
          fontWeight: '500',
          marginRight: '24px', // Отступ справа до 3D-кнопки
        }}
      />

      {/* ЛИНК-КНОПКА GITHUB В СТИЛЕ 3D */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '0 20px',
          height: '40px',
          borderRadius: '10px',
          backgroundColor: '#24292f', // Фирменный цвет GitHub
          color: '#fff',
          fontWeight: '600',
          fontSize: '14px',
          textDecoration: 'none',
          userSelect: 'none',

          // Базовый 3D эффект через глубокую плотную тень
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 0px #0f1115, 0 8px 12px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.1s ease-in-out',
        }}
        // Анимация при наведении: кнопка слегка приподнимается, тень растет
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 5px 0px #0f1115, 0 10px 16px rgba(0, 0, 0, 0.2)';
        }}
        // Возврат в исходное состояние
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 0px #0f1115, 0 8px 12px rgba(0, 0, 0, 0.15)';
        }}
        // Анимация клика: кнопка физически "вжимается" вниз, 3D-тень уменьшается
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'translateY(2px)';
          e.currentTarget.style.boxShadow = '0 0px 0px #0f1115, 0 2px 4px rgba(0, 0, 0, 0.1)';
        }}
        // Возврат после клика
        onMouseUp={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 5px 0px #0f1115, 0 10px 16px rgba(0, 0, 0, 0.2)';
        }}
      >
        <GithubOutlined style={{ fontSize: '18px' }} />
        GitHub
      </a>

    </header>
  );
};

export default Navbar;
