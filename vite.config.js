import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/react/', // Замените на точное имя вашего репо на Git // СТАРОЕ ЗНАЧЕНИЕ НЕАКТУАЛЬНОЕ! нужно при первночальной настройке
  base: './', // Сюда ставим просто слэш!
})
