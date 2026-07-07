import React from 'react';
import { Row, Col, Typography, Button, theme } from 'antd';
import "./HeroSection.css";
import myPhoto from '/src/assets/main-photo.png';
import CodeTypewriterWidget from '../CodeWidget/CodeTypewriterWidget.jsx';
import textBg from '/src/assets/text-bg.png';

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  const { token } = theme.useToken();

  // Добавим стили для анимации прямо в JS (или скопируйте в HeroSection.css)
  const injectStyles = `
    @keyframes floatAnimation {
      0% { transform: translateY(0px) rotateX(4deg) rotateY(-8deg); }
      50% { transform: translateY(-15px) rotateX(6deg) rotateY(-6deg); }
      100% { transform: translateY(0px) rotateX(4deg) rotateY(-8deg); }
    }
    .modern-hero-image {
      animation: floatAnimation 6s ease-in-out infinite;
      transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
      transform-style: preserve-3d;
    }
    .modern-hero-image:hover {
      animation-play-state: paused; /* Останавливает парение при фокусе */
      transform: translateY(-20px) scale(1.03) rotateX(0deg) rotateY(0deg) !important;
      box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.12),
        0 0 50px rgba(24, 144, 255, 0.3) !important; /* Мягкое неоновое свечение бренда (AntD Blue) */
    }
    .image-container-3d {
      perspective: 1000px; /* Задает глубину для 3D трансформаций */
    }
  `;

  return (
    <div style={{
      padding: '60px 24px 70px 24px',
      backgroundColor: token.colorBgContainer,
      position: 'relative'
    }}>
      {/* Внедряем стили анимации */}
      <style>{injectStyles}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[32, 32]} align="middle">

          {/* ТЕКСТ СЛЕВА */}
          <Col xs={24} md={12}>
            <div style={{ position: 'relative' }}>
              <img
                src={textBg}
                alt="Фон текста"
                style={{
                  position: 'absolute',
                  top: '-90px',
                  left: '-150px',
                  width: '100%',
                  height: '400px',
                  objectFit: 'contain',
                  opacity: 0.15,
                  zIndex: 1,
                  pointerEvents: 'none'
                }}
              />

              <div style={{ position: 'relative', zIndex: 2 }}>
                <Typography>
                  <Title level={1} style={{ marginTop: 0, marginBottom: token.marginMD, fontWeight: 700 }}>
                    Всем привет! Меня зовут Александр Омаров.
                  </Title>
                  <Paragraph style={{ fontSize: '18px', color: token.colorTextDescription, marginBottom: token.marginLG, lineHeight: '1.6' }}>
                    Я главный инженер в банке ВТБ. Ниже созданный мной искусственный интеллект для Linux.
                  </Paragraph>
                  <Button type="primary" size="large">
                    Перейти
                  </Button>
                </Typography>
              </div>
            </div>
          </Col>

          {/* ФОТО СПРАВА С ОБЪЕМНЫМ ДИЗАЙНОМ */}
          <Col
            xs={24}
            md={12}
            className="image-container-3d"
            style={{
              display: 'flex',
              justifyContent: 'flex-end', // На десктопах прижмет к правому краю
              position: 'relative',
              paddingRight: '31px' //отступ справа
            }}
          >
            <div style={{ width: '100%', maxWidth: '350px', textAlign: 'center' }}>
              {/* Оставили обертку для корректной работы виджета и центрирования на мобилках */}
              <img
                src={myPhoto}
                alt="Главное изображение"
                className="modern-hero-image"
                style={{
                  width: '100%',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.04)',
                  cursor: 'pointer'
                }}
              />
              {/* Наплывающий виджет */}
              <CodeTypewriterWidget />
            </div>
          </Col>

        </Row>
      </div>
    </div>
  );
};

export default HeroSection;
