import React from 'react';
import { Row, Col, Typography, Button, theme } from 'antd';
import "./HeroSection.css"; // Здесь этот импорт отработает корректно, так как css лежит рядом
import myPhoto from '/src/assets/main-photo.png'; 
import CodeTypewriterWidget from '../CodeWidget/CodeTypewriterWidget.jsx'; // ИСПРАВЛЕНО: Правильный путь до виджета

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  const { token } = theme.useToken();

  return (
    <div style={{ 
      padding: '80px 24px 80px 24px', 
      backgroundColor: token.colorBgContainer,
      position: 'relative' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[32, 32]} align="middle">
            
          {/* ТЕКСТ СЛЕВА */}
<Col xs={24} md={12}>
  <Typography>
    <Title level={1} style={{ marginTop: 0, marginBottom: token.marginMD, fontWeight: 700 }}>
      Всем привет! Меня зовут Александр Омаров.
    </Title>
    <Paragraph style={{ fontSize: '18px', color: token.colorTextDescription, marginBottom: token.marginLG, lineHeight: '1.6' }}>
      Я главный инженер в банке ВТБ. Ниже разработанный мной искусственный интеллект для Linux.
    </Paragraph>

    {/* ИСПРАВЛЕНО: Отсюда блок кода удален, осталась только чистая кнопка */}
    <Button type="primary" size="large">
      Попробовать
    </Button>
  </Typography>
</Col>

{/* ФОТО СПРАВА: Привязываем плашку кода сюда */}
<Col xs={24} md={12} style={{ textAlign: 'center', position: 'relative' }}> {/* ДОБАВЛЕНО: position 'relative' */}
  
  {/* Само изображение */}
  <img 
    src={myPhoto} 
    alt="Главное изображение" 
    style={{ 
      width: '100%', 
      maxWidth: '350px', 
      borderRadius: token.borderRadiusLG, 
      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.06)' 
    }} 
  />

  {/* ПЛАШКА С КОДОМ: Теперь она жестко привязана к фотографии */}
  <div style={{ 
    position: 'absolute',          // Абсолютное позиционирование внутри контейнера фото
    bottom: '-30px',               // Наплыв снизу на фотографию (подберите под себя)
    left: '50%',                   // Выравнивание по центру относительно ширины фото
    transform: 'translateX(-50%)', // Центрирование
    width: '90%',                  // Ширина плашки относительно фото
    maxWidth: '400px',             // Ограничиваем максимальную ширину под размер фото
    zIndex: 10,                    // Отображаем поверх картинки
    background: '#1e1e23', 
    color: '#a9dc76', 
    borderRadius: '8px',
    padding: '16px',
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: '0.9rem',
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    minHeight: '90px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)', // Глубокая тень для эффекта парения
    border: '1px solid rgba(255, 255, 255, 0.1)'
  }}>
    <span>{currentText}</span>
    <span style={{ color: '#fc9867', fontWeight: 'bold' }}>|</span>
  </div>

</Col>


        </Row>
      </div>
    </div>
  );
};

export default HeroSection;
