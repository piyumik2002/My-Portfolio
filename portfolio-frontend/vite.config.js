import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // මේ පේළිය අනිවාර්යයි!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), 
  ],
})