import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

// 1. Конфигурация элементов меню
const items = [
  {
    label: 'Главная',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Каталог',
    key: 'catalog',
    icon: <AppstoreOutlined />,
    children: [       // Выпадающее подменю
      { label: 'Электроника', key: 'electronics' },
      { label: 'Одежда', key: 'clothes' },
    ],
  },
  {
    label: 'Настройки',
    key: 'settings',
    icon: <SettingOutlined />,
  },
];

const App = () => {
  // 2. Функция обработки клика
  const onClick = (e) => {
    console.log('Выбран пункт:', e.key);
  };

  return (
    <div style={{ width: 256, padding: '20px 0' }}>
      <Menu
        onClick={onClick}
        style={{ width: '100%' }}
        defaultSelectedKeys={['home']} // Изначально выбранный пункт
        defaultOpenKeys={['catalog']} // Изначально открытое подменю
        mode="inline"                 // Вертикальное отображение
        items={items}
      />
    </div>
  );
};

export default App;