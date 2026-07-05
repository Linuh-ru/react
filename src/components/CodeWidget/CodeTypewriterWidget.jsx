import React, { useState, useEffect } from 'react';
import './CodeTypewriterWidget.css'; 

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
  
  // Добавляем JS-стейт для мигания курсора вместо CSS-анимации
  const [cursorVisible, setCursorVisible] = useState(true);

  // Эффект печатной машинки
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

  // Эффект мигания курсора (каждые 530мс переключаем видимость)
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="widget-container" style={{ display: 'flex', width: '100%', minHeight: '140px', background: 'transparent', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
      <div className="widget-content" style={{ width: '100%' }}>
        <div className="code-box" style={{ background: '#1e1e23', color: '#a9dc76', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '20px', fontFamily: "'Courier New', Courier, monospace", fontSize: '0.95rem', textAlign: 'left', whiteSpace: 'pre-wrap', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}>
          <span>{currentText}</span>
          {/* Управляем прозрачностью курсора через инлайн-стиль opacity */}
          <span className="cursor" style={{ color: '#fc9867', fontWeight: 'bold', opacity: cursorVisible ? 1 : 0, transition: 'opacity 0.1s ease-in-out' }}>|</span>
        </div>
      </div>
    </div>
  );
}
