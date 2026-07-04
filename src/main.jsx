import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd' // Импортируем провайдер настроек Ant Design
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Обернули приложение в ConfigProvider для поддержки Ant Design v6 */}
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677ff', // Основной цвет кнопок и активных элементов
          borderRadius: 8,         // Единое скругление углов
          fontFamily: 'Inter, system-ui, sans-serif', // Современный шрифт
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
)