import React from 'react';
import { Row, Col, Typography, Button, theme } from 'antd';
// 1. Импортируем вашу картинку (укажите правильное расширение: .jpg, .png, .svg)
import myPhoto from '../assets/main-photo.png'; 

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  // Получаем доступ к дизайн-токенам темы Antd v6
  const { token } = theme.useToken();

  return (
    <div style={{ 
      padding: '80px 24px', 
      backgroundColor: token.colorBgContainer // Использует системный цвет фона
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[32, 32]} align="middle">
          
          {/* Текстовый блок */}
          <Col xs={24} md={12}>
            <Typography>
              <Title level={1} style={{ marginBottom: token.marginMD, fontWeight: 700 }}>
                Всем привет! Меня зовут Александр Омаров.
              </Title>
              <Paragraph style={{ fontSize: '18px', color: token.colorTextDescription, marginBottom: token.marginLG, lineHeight: '1.6' }}>
                Я главный инженер в банке ВТБ. Ниже разработанный мной искуственный интелект для linux
              </Paragraph>
              <Button type="primary" size="large">
                Попробовать
              </Button>
            </Typography>
          </Col>

          {/* Блок с фото */}
          <Col xs={24} md={12} style={{ textAlign: 'center' }}>
            <img 
              src={myPhoto} // 2. Вставляем переменную с картинкой вместо старой ссылки
              alt="Главное изображение" 
              style={{ 
                width: '100%', 
                maxWidth: '500px', 
                borderRadius: token.borderRadiusLG, // Использует скругление из темы
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.06)' 
              }} 
            />
          </Col>

        </Row>
      </div>
    </div>
  );
};

export default HeroSection;