import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, Button, theme } from 'antd';
import "./HeroSection.css";
import myPhoto from '/src/assets/main-photo.png'; 

const { Title, Paragraph } = Typography;

// Массив строк перенесен прямо сюда, без внешних импортов
const TEST_CODE_LINES = [
  `const project = new SmartApp();\nproject.init({ techStack: ["Vue", "Node.js"] });`,
  `function deploy() {\n  return database.connect().then(() => "Live");\n}`
];

const HeroSection = () => {
  const { token } = theme.useToken();

  // Логика бегущей строки встроена прямо в HeroSection
  const [currentText, setCurrentText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = TEST_CODE_LINES[lineIndex];

    if (!isDeleting && charIndex < currentFullText.length) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev + currentFullText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 40);
    } else if (!isDeleting && charIndex === currentFullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 20);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setLineIndex((prev) => (prev + 1) % TEST_CODE_LINES.length);
    }
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, lineIndex]);

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
              
              {/* ТЕСТОВАЯ ВСТАВКА БЕГУЩЕЙ СТРОКИ НАПРЯМУЮ */}
              <div style={{ 
                background: '#1e1e23', 
                color: '#a9dc76', 
                borderRadius: '8px',
                padding: '20px',
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: '0.95rem',
                textAlign: 'left',
                whiteSpace: 'pre-wrap',
                minHeight: '100px',
                marginBottom: '20px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
              }}>
                <span>{currentText}</span>
                <span style={{ color: '#fc9867', fontWeight: 'bold' }}>|</span>
              </div>

              <Button type="primary" size="large">
                Попробовать
              </Button>
            </Typography>
          </Col>

          {/* ФОТО СПРАВА */}
          <Col xs={24} md={12} style={{ textAlign: 'center' }}>
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
          </Col>

        </Row>
      </div>
    </div>
  );
};

export default HeroSection;
