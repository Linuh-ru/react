import React, { useState, useEffect } from 'react';
import './CodeTypewriterWidget.css'; 

const DEFAULT_CODE_LINES = [
  `const project = new SmartApp();\nproject.init({ techStack: ["Vue", "Node.js"] });`,
  `function deploy() {\n  return database.connect().then(() => "Live");\n}`,
  `@media (max-width: 768px) {\n  .interface { display: flex; }\n}`
];

export default function CodeTypewriterWidget({
  // Защищаем пропсы: если они придут пустыми извне, жестко берем дефолтные значения
  codeLines = DEFAULT_CODE_LINES,
  speed = 40,
  delay = 2500
}) {
  const [currentText, setCurrentText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // ЗАЩИТА: Проверяем, что массив существует и в нем есть строки
    if (!codeLines || !codeLines[lineIndex]) {
      return; 
    }

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

  // ЗАЩИТА СБОРКИ: Если массив пуст, не ломаем страницу, а рендерим пустое темное окно
  const safeLines = codeLines && codeLines.length > 0 ? codeLines : DEFAULT_CODE_LINES;
  const currentFullText = safeLines[lineIndex] || '';

  return (
    <div 
      className="widget-container" 
      style={{ 
        display: 'flex', 
        width: '100%', 
        minHeight: '140px', 
        position: 'relative',
        background: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
        marginBottom: '20px'
      }}
    >
      <div className="widget-content" style={{ width: '100%', position: 'relative', zIndex: 3 }}>
        <div 
          className="code-box" 
          style={{ 
            background: '#1e1e23', 
            color: '#a9dc76', 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            padding: '20px',
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: '0.95rem',
            textAlign: 'left',
            whiteSpace: 'pre-wrap',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            minHeight: '100px'
          }}
        >
          {/* Если анимация еще не пошла, покажем хотя бы первый символ или заглушку */}
          <span>{currentText || ''}</span>
          <span className="cursor" style={{ color: '#fc9867', fontWeight: 'bold' }}>|</span>
        </div>
      </div>
    </div>
  );
}
