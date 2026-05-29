import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
  resolve: {
    dedupe: ["react", "react-dom"],
  },
=======
>>>>>>> 8cca6526669db68d743f5eab34e201df603fed9a
})