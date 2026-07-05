import React from 'react';
import { Row, Col, Typography, Button, theme } from 'antd';
import "./HeroSection.css";
import myPhoto from '/src/assets/main-photo.png'; 
// 1. Добавьте импорт в самом верху HeroSection.jsx (путь может отличаться)
import CodeTypewriterWidget from '../../components/CodeWidget/CodeTypewriterWidget.jsx'; 

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  const { token } = theme.useToken();

  return (
    <div style={{ 
      padding: '80px 24px 140px 24px', 
      backgroundColor: token.colorBgContainer,
      position: 'relative' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[32, 32]} align="middle">
          
          {/* ТЕКСТ СЛЕВА */}
          <Col xs={24} md={12}>
            <Typography>
              {/* ИСПРАВЛЕНО: Добавлено свойство marginTop: 0 */}
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

          {/* ФОТО СПРАВА */}
          <Col xs={24} md={12} style={{ textAlign: 'center' }}>
            <img src={myPhoto} alt="Главное изображение" style={{ width: '100%', maxWidth: '350px', borderRadius: token.borderRadiusLG, boxShadow: '0 12px 32px rgba(0, 0, 0, 0.06)' }} />
          </Col>

          {/* ВСТАВКА ВИДЖЕТА СНИЗУ НА ВСЮ ШИРИНУ (24 колонки) */}
          {/*<Col xs={24} style={{ marginTop: '-150px' }}>
            <CodeTypewriterWidget />
          </Col>*/}
            <CodeTypewriterWidget />

        </Row>
      </div>
    </div>
  );
};

export default HeroSection;
