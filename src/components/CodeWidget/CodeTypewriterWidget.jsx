import React, { useState, useEffect } from 'react';

const DEFAULT_CODE_LINES = [
  `const project = new SmartApp();\nproject.init({ techStack: ["Vue", "Node.js"] });`,
  `function deploy() {\n  return database.connect().then(() => "Live");\n}`
];

export default function CodeTypewriterWidget({
  codeLines = DEFAULT_CODE_LINES,
  speed = 40,
  delay = 2500
}) {
  const [currentText, setCurrentText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let timer;
    const currentFullText = codeLines[lineIndex];

    if (!isDeleting && charIndex < currentFullText.length) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev + currentFullText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (!isDeleting && charIndex === currentFullText.length) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setLineIndex((prev) => (prev + 1) % codeLines.length);
    }
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, lineIndex, codeLines, speed, delay]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div style={{ 
      position: 'absolute',          // Абсолютное позиционирование поверх фото
      bottom: '-10px',               // Наплыв снизу на фотографию
      left: '30%',                   // ИСПРАВЛЕНО: Сдвинули точку привязки влево
      transform: 'translateX(-50%)', // Оставляем для сохранения внутренней оси центрирования
      width: '90%',                  
      maxWidth: '400px',             
      zIndex: 10, 
      
      /* --- ВОЗВРАЩАЕМ ПРОЗРАЧНОСТЬ И ЭФФЕКТ МАТОВОГО СТЕКЛА --- */
      background: 'rgba(30, 30, 35, 0.45)', // Полупрозрачный темный фон (45% непрозрачности)
      backdropFilter: 'blur(8px)',          // Размытие элементов, которые оказались ПОД плашкой
      WebkitBackdropFilter: 'blur(8px)',    // Поддержка размытия для браузеров Safari (Apple)
      border: '1px solid rgba(255, 255, 255, 0.15)', // Чуть более заметная аккуратная светлая рамка
      /* -------------------------------------------------------- */

      /* background: '#1e1e23', */
      color: '#a9dc76', 
      borderRadius: '8px',
      padding: '16px',
      fontFamily: "'Courier New', Courier, monospace",
      fontSize: '0.9rem',
      textAlign: 'left',
      whiteSpace: 'pre-wrap',
      minHeight: '90px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <span>{currentText}</span>
      <span style={{ color: '#fc9867', fontWeight: 'bold', opacity: cursorVisible ? 1 : 0, transition: 'opacity 0.1s ease-in-out' }}>|</span>
    </div>
  );
}
