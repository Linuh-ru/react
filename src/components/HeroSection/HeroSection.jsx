import React from 'react';
import { Row, Col, Typography, Button, theme } from 'antd';
import "./HeroSection.css";
import myPhoto from '/src/assets/main-photo.png'; 
import CodeTypewriterWidget from '../CodeWidget/CodeTypewriterWidget.jsx'; // Проверьте правильность этого пути!
import textBg from '/src/assets/text-bg.png'; // Фоновая картинка текста слева

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  const { token } = theme.useToken();

  return (
    <div style={{ 
      padding: '80px 24px 160px 24px', // Увеличили нижний отступ, чтобы наплывающий виджет не вылетал из секции
      backgroundColor: token.colorBgContainer,
      position: 'relative' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[32, 32]} align="middle">
          
          {/* ТЕКСТ СЛЕВА */}
          <Col xs={24} md={12}>
            {/* Контейнер-родитель, задающий рамки для абсолютных координат картинки */}
            <div style={{
              position: 'relative', // КРИТИЧЕСКИ ВАЖНО: картинка будет позиционироваться внутри этого блока
              /*
              padding: '30px',
              borderRadius: token.borderRadiusLG,
              overflow: 'hidden',   // Чтобы картинка не вылезала за скругленные края блока
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              backgroundColor: token.colorBgContainer // Базовый фон подложки
              */
            }}>

              {/* КАРТИНКА С АБСОЛЮТНЫМ ПОЗИЦИОНИРОВАНИЕМ */}
              <img
                src={textBg}
                alt="Фон текста"
                style={{
                  position: 'absolute',
                  // --- КООРДИНАТЫ: меняйте их, чтобы двигать картинку ---
                  top: '-90px',         // Дистанция от верхнего края текста
                  left: '-150px',        // Дистанция от левого края текста
                  width: '100%',      // Ширина картинки (можно задать в px, например '200px')
                  height: '400px',     // Высота картинки (можно задать в px, например '150px')
                  // ----------------------------------------------------
                  /* --- ИСПРАВЛЕНО: Картинка больше не обрезается --- */
                  objectFit: 'contain', // Картинка целиком впишется в размеры текстового поля
                  opacity: 0.08,      // Прозрачность самой картинки (0.15 = 15% видимости, текст будет отлично читаться)
                  zIndex: 1,          // Отправляем картинку на самый нижний слой
                  pointerEvents: 'none' // Чтобы картинка не мешала выделять текст мышкой
                }}
              />

              {/* ТЕКСТОВЫЙ КОНТЕНТ (Обязательно zIndex: 2, чтобы быть ПОВЕРХ картинки) */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Typography>
                  <Title level={1} style={{ marginTop: 0, marginBottom: token.marginMD, fontWeight: 700 }}>
                    Всем привет! Меня зовут Александр Омаров.
                  </Title>
                  <Paragraph style={{ fontSize: '18px', color: token.colorTextDescription, marginBottom: token.marginLG, lineHeight: '1.6' }}>
                    Я главный инженер в банке ВТБ. Ниже созданный мной искусственный интеллект для Linux.
                  </Paragraph>
                  <Button type="primary" size="large">
                    Попробовать
                  </Button>
                </Typography>
              </div>

            </div>
          </Col>


          {/* ФОТО СПРАВА С ПРИВЯЗАННЫМ ВИДЖЕТОМ */}
          <Col xs={24} md={12} style={{ textAlign: 'center', position: 'relative' }}>
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
            {/* Рендерим виджет. Вся логика currentText инкапсулирована внутри него и не видна для HeroSection */}
            <CodeTypewriterWidget />
          </Col>

        </Row>
      </div>
    </div>
  );
};

export default HeroSection;
