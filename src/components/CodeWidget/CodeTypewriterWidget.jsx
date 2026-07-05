import React, { useState, useEffect } from 'react';
import './CodeTypewriterWidget.css'; // Импорт стилей
import myPhoto from '../../assets/react.svg'; // ИСПРАВЛЕНО: 2 уровня вверх

const DEFAULT_CODE_LINES = [
  `const project = new SmartApp();\nproject.init({ techStack: ["Vue", "Node.js"] });`,
  `function deploy() {\n  return database.connect().then(() => "Live");\n}`,
  `@media (max-width: 768px) {\n  .interface { display: flex; }\n}`
];

export default function CodeTypewriterWidget({
  title = "Создаем Будущее",
  subtitle = "Инновационные ИТ-решения для вашего бизнеса",
  bgImage = myPhoto, // 2. ИСПРАВЛЕНО: Правильно задаем локальное фото по умолчанию
  codeLines = DEFAULT_CODE_LINES,
  speed = 40,
  delay = 2500
}) {
  const [currentText, setCurrentText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = codeLines[lineIndex];

    if (!isDeleting && charIndex < currentFullText.length) {
      // Режим печати букв
      timer = setTimeout(() => {
        setCurrentText((prev) => prev + currentFullText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (!isDeleting && charIndex === currentFullText.length) {
      // Пауза после того, как строка напечаталась целиком
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && charIndex > 0) {
      // Режим удаления букв (в два раза быстрее печати)
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);
    } else if (isDeleting && charIndex === 0) {
      // Переключение на следующую строку после полного удаления
      setIsDeleting(false);
      setLineIndex((prev) => (prev + 1) % codeLines.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, lineIndex, codeLines, speed, delay]);

  return (
    <div className="widget-container">
      {/* Фоновое изображение и оверлей удалены */}
      
      {/* Основной контент */}
      <div className="widget-content">
        {/* <h1 className="widget-title">{title}</h1> */}
        {/* <p className="widget-subtitle">{subtitle}</p> */}
        
        {/* Контейнер для бегущего кода */}
        <div className="code-box">
          <span>{currentText}</span>
          <span className="cursor">|</span>
        </div>
      </div>
    </div>
  );
}