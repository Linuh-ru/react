function App() {
  return (
    <div>
      <h1>Привет, мир!</h1>
      <p>Это мой собственный проект на React.</p>
    </div>
  )
}

export default App

import React from 'react';
// 1. Импортируем ваш новый компонент (путь зависит от структуры папок)
import Navbar from './navbar'; 

function App() {
  return (
    <div className="App">
      {/* 2. Вызываем компонент как HTML-тег */}
      <Navbar /> 
      
      {/* Остальной контент вашей главной страницы */}
      <main style={{ padding: '20px' }}>
        <h1>Добро пожаловать на сайт!</h1>
      </main>
    </div>
  );
}

export default App;