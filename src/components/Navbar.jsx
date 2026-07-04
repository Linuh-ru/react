import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

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
      display: 'flex',                  // Выстраивает логотип и меню в одну строку
      alignItems: 'center',             // Центрирует их по вертикали
      justifyContent: 'space-between',  // Расталкивает логотип влево, а меню вправо (или займет всю ширину)
      padding: '0 24px',                // Внутренние отступы по бокам шапки
      borderBottom: '1px solid #f0f0f0',// Линия под шапкой
      background: '#fff'                // Белый фон шапки
    }}>
      
      {/* БЛОК ЛОГОТИПА */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginRight: '40px'             // Отступ от логотипа до первого пункта меню
      }}>
        {/* Вариант 1: Иконка-заглушка из Ant Design вместо картинки */}
        {/* <SettingOutlined style={{ fontSize: '24px', color: '#1677ff', marginRight: '8px' }} /> */}
        
        {/* Вариант 2: Если у вас есть картинка, раскомментируйте строку ниже */}
        <img src="/logo.png" alt="Logo" style={{ height: '32px', marginRight: '8px' }} />
        
        <span style={{ 
          fontSize: '28px', 
          fontWeight: 'bold', 
          color: '#000',
          whiteSpace: 'nowrap'          // Запрещает перенос названия на новую строку
        }}>
          Linuh
        </span>
      </div>

      {/* КОМПОНЕНТ МЕНЮ */}
      <Menu
        onClick={onClick}
        defaultSelectedKeys={['home']}
        mode="horizontal"
        items={items}
        style={{ 
          flex: 1,                      // Позволяет меню занять всё оставшееся пространство
          borderBottom: 'none',         // Убираем родную полосу Ant Design
          lineHeight: '64px'            // Высота пунктов меню под стать шапке
        }}
      />
      
    </header>
  );
};

export default Navbar;