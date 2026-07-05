import React from 'react';
import { Row, Col, Typography, Button, theme } from 'antd';
import "./HeroSection.css";
import myPhoto from '/src/assets/main-photo.png'; 
import CodeTypewriterWidget from '../CodeWidget/CodeTypewriterWidget.jsx'; // Проверьте правильность этого пути!

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
            <Typography>
              <Title level={1} style={{ marginTop: 0, marginBottom: token.marginMD, fontWeight: 700 }}>
                Всем привет! Меня зовут Александр Омаров.
              </Title>
              <Paragraph style={{ fontSize: '18px', color: token.colorTextDescription, marginBottom: token.marginLG, lineHeight: '1.6' }}>
                Я главный инженер в банке ВТБ. Ниже разработанный мной искусственный интеллект для Linux.
              </Paragraph>
              <Button type="primary" size="large">
                Попробовать
              </Button>
            </Typography>
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
