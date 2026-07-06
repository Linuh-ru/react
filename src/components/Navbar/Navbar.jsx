import React, { useState, useEffect } from 'react';
import { Menu, Drawer, Button } from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined,
  GithubOutlined,
  MenuOutlined
} from '@ant-design/icons';

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
  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Отслеживаем размер экрана для адаптивности
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px — стандартный планшетный/мобильный брейкпоинт
    };

    handleResize(); // Проверка при первой загрузке
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onClick = (e) => {
    console.log('Выбран пункт:', e.key);
    if (isMobile) setIsDrawerOpen(false); // Закрываем шторку на мобильном после клика
  };

  // Вынесли стили 3D-кнопки, чтобы не дублировать в коде
  const github3DButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '0 20px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: '#24292f',
    color: '#fff',
    fontWeight: '600',
    fontSize: '14px',
    textDecoration: 'none',
    userSelect: 'none',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 0px #0f1115, 0 8px 12px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.1s ease-in-out',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.boxShadow = '0 5px 0px #0f1115, 0 10px 16px rgba(0, 0, 0, 0.2)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = '0 4px 0px #0f1115, 0 8px 12px rgba(0, 0, 0, 0.15)';
  };

  const handleMouseDown = (e) => {
    e.currentTarget.style.transform = 'translateY(2px)';
    e.currentTarget.style.boxShadow = '0 0px 0px #0f1115, 0 2px 4px rgba(0, 0, 0, 0.1)';
  };

  const handleMouseUp = (e) => {
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.boxShadow = '0 5px 0px #0f1115, 0 10px 16px rgba(0, 0, 0, 0.2)';
  };

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: isMobile ? '0 20px' : '0 40px', // Меньше отступы на мобилках
      borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.75)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.02)',
      height: '68px'
    }}>

      {/* ЛОГОТИП */}
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}>
        <img
          src="/logo.png"
          alt="Logo"
          style={{ height: '34px', marginRight: '12px', transition: 'transform 0.3s ease' }}
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

      {/* ДЕСКТОПНАЯ ВЕРСИЯ (Показывается только если НЕ mobile) */}
      {!isMobile && (
        <>
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
              marginLeft: '40px',
              marginRight: '24px',
            }}
          />
          <a
            href="https://github.com/Linuh-ru/react"
            target="_blank"
            rel="noopener noreferrer"
            style={github3DButtonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            <GithubOutlined style={{ fontSize: '18px' }} />
            GitHub
          </a>
        </>
      )}

      {/* МОБИЛЬНАЯ ВЕРСИЯ (Иконка гамбургера) */}
      {isMobile && (
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: '20px' }} />}
          onClick={() => setIsDrawerOpen(true)}
          style={{ height: '40px', width: '40px' }}
        />
      )}

      {/* ВЫЕЗЖАЮЩАЯ ШТОРКА ДЛЯ МОБИЛЬНЫХ */}
      <Drawer
        title="Навигация"
        placement="right"
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        width={280}
        bodyStyle={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px 16px' }}
      >
        {/* Вертикальное меню внутри шторки */}
        <Menu
          onClick={onClick}
          defaultSelectedKeys={['home']}
          mode="inline"
          items={items}
          style={{ borderRight: 'none', fontSize: '16px' }}
        />

        {/* Кнопка GitHub внизу шторки */}
        <div style={{ padding: '0 12px', marginTop: '20px', textAlign: 'center' }}>
          <a
            href="https://github.com/Linuh-ru/react"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...github3DButtonStyle, width: '100%', justifyContent: 'center' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            <GithubOutlined style={{ fontSize: '18px' }} />
            GitHub
          </a>
        </div>
      </Drawer>

    </header>
  );
};

export default Navbar;
