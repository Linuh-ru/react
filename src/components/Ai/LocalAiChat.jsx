import React, { useState, useRef, useEffect } from 'react';
import './AiChat.css';

function LocalAiChat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  // Реф для управления высотой текстового поля
  const textareaRef = useRef(null);

  // Эффект для автоподстройки высоты
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      // Сбрасываем высоту, чтобы корректно рассчитать её при удалении текста
      textarea.style.height = 'auto';
      // Устанавливаем высоту равной высоте контента (минимум 54px — примерно одна строка)
      textarea.style.height = `${Math.max(textarea.scrollHeight, 54)}px`;
    }
  }, [prompt]); // Срабатывает при каждом изменении текста

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'llama3',
          prompt: prompt,
          stream: false,
        }),
      });

      if (!res.ok) throw new Error('Ошибка сети');

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Ошибка:', error);
      setResponse('Не удалось получить ответ от локального ИИ. Проверьте, запущен ли сервер.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-container">

      <div className="ai-header">
        <img src="/logo.png" alt="Logo" className="ai-header-logo" />
        <h2 className="ai-title">Linuh AI</h2>
      </div>

      {/* Добавили ref и атрибут rows */}
      <textarea
        ref={textareaRef}
        rows={1}
        className="ai-textarea"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Введите ваш вопрос про linux..."
      />

      <button
        className="ai-button"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? 'Думаю...' : 'Спросить ИИ'}
      </button>

      {(response || loading) && (
        <div className="ai-result-box">
          <h3 className="ai-result-title">Ответ:</h3>
          <p className="ai-result-text">
            {loading ? 'Генерация ответа...' : response}
          </p>
        </div>
      )}
    </div>
  );
}

export default LocalAiChat;
