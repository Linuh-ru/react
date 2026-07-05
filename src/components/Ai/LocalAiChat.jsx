import React, { useState } from 'react';
import './AiChat.css'; // Импортируем наши новые стили

function LocalAiChat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

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
      <h2 className="ai-title">ИИ Ассистент для Linux</h2>
      
      <textarea
        className="ai-textarea"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Введите ваш вопрос..."
      />
      
      <button 
        className="ai-button"
        onClick={handleGenerate} 
        disabled={loading}
      >
        {loading ? 'Думаю...' : 'Спросить ИИ'}
      </button>

      {/* Показываем блок ответа только когда есть текст или идет загрузка */}
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
